import { ReferralPurchase } from '../../types';

type Props = {
	purchase: ReferralPurchase;
};

const DateAssigned = ( { purchase }: Props ) => {
	return purchase.date_assigned ? new Date( purchase.date_assigned ).toLocaleDateString() : '-';
};

export default DateAssigned;