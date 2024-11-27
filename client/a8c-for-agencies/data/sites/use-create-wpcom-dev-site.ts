import {
	useMutation,
	UseMutationOptions,
	UseMutationResult,
	useQueryClient,
} from '@tanstack/react-query';
import wpcom from 'calypso/lib/wp';
import { useSelector } from 'calypso/state';
import { getActiveAgencyId } from 'calypso/state/a8c-for-agencies/agency/selectors';
import { getFetchDevLicensesQueryKey } from '../purchases/use-fetch-dev-licenses';

export interface APIError {
	status: number;
	code: string;
}

export interface CreateDevSiteParams {
	site_name?: string;
	php_version?: string;
	primary_data_center?: string;
	is_fully_managed_agency_site?: boolean;
}

interface APIResponse {
	site: {
		id: number;
		title: string;
		url: string;
		features: object;
	};
	license: object;
	provision: object;
}

function createWPCOMDevSiteMutation(
	params: CreateDevSiteParams,
	agencyId?: number
): Promise< APIResponse > {
	if ( ! agencyId ) {
		throw new Error( 'Agency ID is required to create a dev site' );
	}

	return wpcom.req.post( {
		apiNamespace: 'wpcom/v2',
		path: `/agency/${ agencyId }/sites/provision-dev-site`,
		body: params,
	} );
}

export default function useCreateWPCOMDevSiteMutation< TContext = unknown >(
	options?: UseMutationOptions< APIResponse, APIError, CreateDevSiteParams, TContext >
): UseMutationResult< APIResponse, APIError, CreateDevSiteParams, TContext > {
	const queryClient = useQueryClient();
	const agencyId = useSelector( getActiveAgencyId );

	return useMutation< APIResponse, APIError, CreateDevSiteParams, TContext >( {
		...options,
		mutationFn: ( args ) => createWPCOMDevSiteMutation( args, agencyId ),
		onSuccess: () => {
			queryClient.invalidateQueries( {
				queryKey: getFetchDevLicensesQueryKey( agencyId ),
			} );
		},
	} );
}
