import { NoticeBanner } from '@automattic/components';
import { Button } from '@wordpress/components';
import { useTranslate } from 'i18n-calypso';

export const ReportUnavailable = ( {
	isLaunching,
	onLaunchSiteClick,
}: {
	isLaunching: boolean;
	onLaunchSiteClick(): void;
} ) => {
	const translate = useTranslate();

	return (
		<NoticeBanner
			level="info"
			title={ translate( 'Launch your site to start measuring performance' ) }
			hideCloseButton
			actions={ [
				<Button
					disabled={ isLaunching }
					isBusy={ isLaunching }
					key="launch-site"
					variant="primary"
					onClick={ onLaunchSiteClick }
				>
					{ translate( 'Launch your site' ) }
				</Button>,
			] }
		>
			{ translate( 'Performance statistics are only available for public sites.' ) }
		</NoticeBanner>
	);
};