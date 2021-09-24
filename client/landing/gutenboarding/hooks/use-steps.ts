import { isEnabled } from '@automattic/calypso-config';
import { useLocale } from '@automattic/i18n-utils';
import { useSelect } from '@wordpress/data';
import { Step, StepType, useIsAnchorFm } from '../path';
import { STORE_KEY as ONBOARD_STORE } from '../stores/onboard';
import { PLANS_STORE } from '../stores/plans';
import { usePlanFromPath } from './use-selected-plan';

export default function useSteps(): Array< StepType > {
	const locale = useLocale();
	const { hasSiteTitle, hasSelectedDesignWithoutFonts, isEnrollingInFse } = useSelect(
		( select ) => {
			const onboardSelect = select( ONBOARD_STORE );
			return {
				hasSiteTitle: onboardSelect.hasSiteTitle(),
				hasSelectedDesignWithoutFonts: onboardSelect.hasSelectedDesignWithoutFonts(),
				isEnrollingInFse: onboardSelect.shouldEnrollInFseBeta(),
			};
		},
		[ ONBOARD_STORE ]
	);
	const isAnchorFmSignup = useIsAnchorFm();

	let steps: StepType[];

	// If anchor_podcast param, show Intent Gathering, Design, and Style steps.
	if ( isAnchorFmSignup ) {
		steps = [ Step.IntentGathering, Step.DesignSelection, Step.Style ];
		// If site title is skipped, we're showing Domains step before Features step. If not, we are showing Domains step next.
	} else if ( hasSiteTitle ) {
		steps = [
			Step.IntentGathering,
			Step.Domains,
			Step.FseBetaOptIn,
			Step.DesignSelection,
			Step.Style,
			Step.Features,
			Step.Plans,
		];
	} else {
		steps = [
			Step.IntentGathering,
			Step.FseBetaOptIn,
			Step.DesignSelection,
			Step.Style,
			Step.Domains,
			Step.Features,
			Step.Plans,
		];
	}

	// Remove the Style (fonts) step in the following cases:
	// - Site Editor flow (feature flag)
	// - the user has selected a design without fonts
	// - the user is enrolled in Beta FSE
	if (
		isEnabled( 'gutenboarding/site-editor' ) ||
		hasSelectedDesignWithoutFonts ||
		isEnrollingInFse
	) {
		steps = steps.filter( ( step ) => step !== Step.Style );
	}

	// Remove the FSE Beta Opt In if not in a configured environment
	if ( ! isEnabled( 'full-site-editing/beta-opt-in' ) ) {
		steps = steps.filter( ( step ) => step !== Step.FseBetaOptIn );
	}

	// Logic necessary to skip Domains or Plans steps
	// General rule: if a step has been used already, don't remove it.
	const { domain, hasUsedDomainsStep, hasUsedPlansStep } = useSelect( ( select ) =>
		select( ONBOARD_STORE ).getState()
	);
	const planProductId = useSelect( ( select ) => select( ONBOARD_STORE ).getPlanProductId() );
	const plan = useSelect( ( select ) =>
		select( PLANS_STORE ).getPlanByProductId( planProductId, locale )
	);
	const hasPlanFromPath = !! usePlanFromPath();

	if ( domain && ! hasUsedDomainsStep ) {
		steps = steps.filter( ( step ) => step !== Step.Domains );
	}

	// Don't show the mandatory Plans steps:
	// - if the user landed from a marketing page after selecting a plan
	// - if a plan has been explicitly selected using the PlansModal
	if ( ( hasPlanFromPath || plan ) && ! hasUsedPlansStep ) {
		steps = steps.filter( ( step ) => step !== Step.Plans );
	}

	return steps;
}
