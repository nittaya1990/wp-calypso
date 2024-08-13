import { useTranslate } from 'i18n-calypso';
import React from 'react';
import './style.scss';
import DocumentHead from 'calypso/components/data/document-head';
import { PerformanceProfilerDashboardContent } from 'calypso/performance-profiler/components/dashboard-content';
import { PerformanceProfilerHeader, TabType } from 'calypso/performance-profiler/components/header';

type PerformanceProfilerDashboardProps = {
	url: string;
	tab: TabType;
};

export const PerformanceProfilerDashboard = ( props: PerformanceProfilerDashboardProps ) => {
	const translate = useTranslate();
	const { url, tab } = props;
	const [ activeTab, setActiveTab ] = React.useState< TabType >( tab );

	const getOnTabChange = ( tab: TabType ) => {
		const queryParams = new URLSearchParams( window.location.search );
		queryParams.set( 'tab', tab );
		window.history.pushState( null, '', `?${ queryParams.toString() }` );

		setActiveTab( tab );
	};

	return (
		<div className="container">
			<DocumentHead title={ translate( 'Speed Test' ) } />

			<PerformanceProfilerHeader
				url={ url }
				activeTab={ activeTab }
				onTabChange={ getOnTabChange }
				showNavigationTabs
			/>

			<PerformanceProfilerDashboardContent activeTab={ activeTab } />
		</div>
	);
};