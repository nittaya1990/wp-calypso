import { Card } from '@automattic/components';
import { SelectControl } from '@wordpress/components';
import { useTranslate } from 'i18n-calypso';
import type { FunctionComponent } from 'react';
import './style.scss';

// Helper function to generate all time slots
const generateTimeSlots = (): { label: string; value: string }[] => {
	const options = [];
	for ( let hour = 0; hour < 24; hour++ ) {
		const startTime = hour.toString().padStart( 2, '0' ) + ':00';
		const endTime = hour.toString().padStart( 2, '0' ) + ':59';
		options.push( {
			label: `${ startTime } - ${ endTime }`,
			value: hour.toString(),
		} );
	}
	return options;
};

const BackupScheduleSetting: FunctionComponent = () => {
	const translate = useTranslate();
	const options = generateTimeSlots();

	return (
		<div id="backup-schedule" className="backup-schedule-setting">
			<Card compact className="setting-title">
				<h3>{ translate( 'Backup schedule' ) }</h3>
			</Card>
			<Card className="setting-content">
				<p>
					{ translate(
						'Pick a timeframe for your backup to run. Some site owners prefer scheduling backups at specific times for better control.'
					) }
				</p>
				<SelectControl options={ options } help={ translate( 'Default time' ) } />
			</Card>
		</div>
	);
};

export default BackupScheduleSetting;