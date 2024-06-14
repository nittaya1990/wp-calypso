import { SENSEI_FLOW } from '@automattic/onboarding';
import { useEffect } from 'react';
import { useQuery } from 'calypso/landing/stepper/hooks/use-query';
import { recordSignupStart } from 'calypso/lib/analytics/signup';
import { type Flow } from '../../types';

/**
 * Hook to track the start of a signup flow.
 */
interface Props {
	flow: Flow;
	currentStepRoute: string;
}

export const useSignUpStartTracking = ( { flow, currentStepRoute }: Props ) => {
	const steps = flow.useSteps();
	const queryParams = useQuery();
	const ref = queryParams.get( 'ref' ) || '';
	const signedUp = queryParams.has( 'signed_up' );

	// TODO: Check if we can remove the sensei flow reference from here.
	const firstStepSlug = ( flow.name === SENSEI_FLOW ? steps[ 1 ] : steps[ 0 ] ).slug;
	const isFirstStep = firstStepSlug === currentStepRoute;
	const extraProps = flow.useSignupStartEventProps?.();
	const flowName = flow.name;
	const shouldTrack = flow.isSignupFlow && isFirstStep && ! signedUp;

	useEffect( () => {
		if ( ! shouldTrack ) {
			return;
		}

		recordSignupStart( flowName, ref, extraProps || {} );
	}, [ extraProps, flowName, ref, shouldTrack ] );
};