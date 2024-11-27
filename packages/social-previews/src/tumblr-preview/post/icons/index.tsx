import './styles.scss';

const TumblrPostIcon: React.FC< { name: string } > = ( { name } ) => {
	let svg;

	switch ( name ) {
		case 'blaze':
			svg = (
				<svg viewBox="0 0 25 22">
					<path d="m7.5059-0.24414c-0.79843 0.057223-1.2169 0.88587-1.1635 1.6128-0.2266 2.0449-1.4898 3.8696-3.1975 4.9778-3.0182 2.414-4.2201 6.8066-2.8033 10.411 0.92417 2.4679 2.9589 4.5674 5.4768 5.3928 0.95914 0.16102 1.7233-0.94358 1.3074-1.8059-0.11578-0.51062-0.17482-0.96516-0.17845-1.487 1.0413 1.5607 2.5484 2.8986 4.341 3.4975 1.0396-0.0154 1.98-0.64458 2.8516-1.1608 3.3821-2.1786 4.9604-6.7097 3.6597-10.518-0.49144-1.4599-1.2948-2.8935-2.5028-3.8698-0.7512-0.45498-1.661 0.09677-1.9202 0.86038-0.12274 0.16822-0.70352 1.1955-0.6191 0.61976 0.25488-3.4397-1.6789-7.0066-4.8123-8.4958-0.14322-0.037843-0.292-0.049464-0.43945-0.035156zm1.0586 3.5605c1.8947 2.0016 2.2326 5.1984 0.89062 7.5879-0.38498 0.96148 0.71762 2.0063 1.6567 1.5681 1.4159-0.4624 2.6998-1.3259 3.6577-2.4665 1.6442 2.5888 1.1465 6.2819-1.0629 8.3379-0.62378 0.60782-1.3666 1.0945-2.1754 1.4179-1.9543-0.989-3.3534-3.0966-3.5625-5.3125-0.25636-1.0253-1.81-1.2013-2.2852-0.25781-0.75058 1.3054-1.1846 2.7948-1.2305 4.3008-2.2396-1.9852-2.8468-5.4435-1.4609-8.0527 0.58926-1.239 1.651-2.13 2.724-2.9329 1.2958-1.1271 2.2791-2.62 2.7682-4.2683l0.071578 0.069832z"></path>
				</svg>
			);
			break;
		case 'delete':
			svg = (
				<svg viewBox="0 0 14 17">
					<path d="M12 5v9c.1.7-.3 1-1 1H3c-.5 0-.9-.3-1-1V5c0-.6-.4-1-1-1-.5 0-1 .4-1 1v9.5C0 16.1 1.4 17 3 17h8c1.8 0 3-.8 3-2.5V5c0-.6-.5-1-1-1-.6 0-1 .5-1 1z"></path>
					<path d="M4 12s0 1 1 1 1-1 1-1V5c0-.5-.4-1-1-1-.5 0-1 .5-1 1v7zm4 0s0 1 1 1 1-1 1-1V5c0-.5-.4-1-1-1-.5 0-1 .5-1 1v7zm5-10c.5 0 1-.4 1-1 0-.5-.4-.9-1-1H1C.5.1 0 .5 0 1c0 .6.6 1 1.1 1H13z"></path>
				</svg>
			);
			break;
		case 'edit':
			svg = (
				<svg viewBox="0 0 17.6 17.6">
					<path d="M5.3 13.8l-2.1.7.7-2.1L10.3 6l1.4 1.4-6.4 6.4zm6.4-9.3l-1.4-1.4-1.4 1.4-6.7 6.7-.2.5-2 5.9 3.8-1.3 2.1-.7.4-.1.3-.3 7.8-7.8c.1 0-2.7-2.9-2.7-2.9zm5.6-1.4L14.5.3c-.4-.4-1-.4-1.4 0l-1.4 1.4L15.9 6l1.4-1.4c.4-.5.4-1.1 0-1.5"></path>
				</svg>
			);
			break;
		case 'share':
			svg = (
				<svg viewBox="0 0 24 24">
					<path d="M12.6173 1.07612C12.991 0.921338 13.4211 1.00689 13.7071 1.29289L22.7071 10.2929C23.0832 10.669 23.0991 11.2736 22.7433 11.669L13.7433 21.669C13.4663 21.9767 13.0283 22.082 12.6417 21.9336C12.2552 21.7853 12 21.414 12 21V16H11.5C7.31775 16 3.92896 18.2486 2.95256 21.3044C2.80256 21.7738 2.33292 22.064 1.84598 21.9881C1.35904 21.9122 1 21.4928 1 21V18.5C1 12.3162 5.88069 7.27245 12 7.01067V2C12 1.59554 12.2436 1.2309 12.6173 1.07612ZM14 4.41421V8C14 8.55228 13.5523 9 13 9H12.5C7.64534 9 3.64117 12.6414 3.06988 17.3419C5.09636 15.2366 8.18218 14 11.5 14H13C13.5523 14 14 14.4477 14 15V18.394L20.622 11.0362L14 4.41421Z"></path>
				</svg>
			);
			break;
		case 'reply':
			svg = (
				<svg viewBox="0 0 17 17">
					<path d="M8.7 0C4.1 0 .4 3.7.4 8.3c0 1.2.2 2.3.7 3.4-.2.6-.4 1.5-.7 2.5L0 15.8c-.2.7.5 1.4 1.2 1.2l1.6-.4 2.4-.7c1.1.5 2.2.7 3.4.7 4.6 0 8.3-3.7 8.3-8.3C17 3.7 13.3 0 8.7 0zM15 8.3c0 3.5-2.8 6.3-6.4 6.3-1.2 0-2.3-.3-3.2-.9l-3.2.9.9-3.2c-.5-.9-.9-2-.9-3.2.1-3.4 3-6.2 6.5-6.2S15 4.8 15 8.3z"></path>
				</svg>
			);
			break;
		case 'reblog':
			svg = (
				<svg viewBox="0 0 17 18.1">
					<path d="M12.8.2c-.4-.4-.8-.2-.8.4v2H2c-2 0-2 2-2 2v5s0 1 1 1 1-1 1-1v-4c0-1 .5-1 1-1h9v2c0 .6.3.7.8.4L17 3.6 12.8.2zM4.2 17.9c.5.4.8.2.8-.3v-2h10c2 0 2-2 2-2v-5s0-1-1-1-1 1-1 1v4c0 1-.5 1-1 1H5v-2c0-.6-.3-.7-.8-.4L0 14.6l4.2 3.3z"></path>
				</svg>
			);
			break;
		case 'like':
			svg = (
				<svg viewBox="0 0 20 18">
					<path d="M14.658 0c-1.625 0-3.21.767-4.463 2.156-.06.064-.127.138-.197.225-.074-.085-.137-.159-.196-.225C8.547.766 6.966 0 5.35 0 4.215 0 3.114.387 2.162 1.117c-2.773 2.13-2.611 5.89-1.017 8.5 2.158 3.535 6.556 7.18 7.416 7.875A2.3 2.3 0 0 0 9.998 18c.519 0 1.028-.18 1.436-.508.859-.695 5.257-4.34 7.416-7.875 1.595-2.616 1.765-6.376-1-8.5C16.895.387 15.792 0 14.657 0h.001zm0 2.124c.645 0 1.298.208 1.916.683 1.903 1.461 1.457 4.099.484 5.695-1.973 3.23-6.16 6.7-6.94 7.331a.191.191 0 0 1-.241 0c-.779-.631-4.966-4.101-6.94-7.332-.972-1.595-1.4-4.233.5-5.694.619-.475 1.27-.683 1.911-.683 1.064 0 2.095.574 2.898 1.461.495.549 1.658 2.082 1.753 2.203.095-.12 1.259-1.654 1.752-2.203.8-.887 1.842-1.461 2.908-1.461h-.001z"></path>
				</svg>
			);
			break;
		case 'ellipsis':
			svg = (
				<svg viewBox="0 0 17.5 3.9">
					<path d="M17.5 1.9c0 1.1-.9 1.9-1.9 1.9-1.1 0-1.9-.9-1.9-1.9S14.5 0 15.6 0c1 0 1.9.9 1.9 1.9m-6.8 0c0 1.1-.9 1.9-1.9 1.9-1.1.1-2-.8-2-1.9 0-1 .9-1.9 2-1.9s1.9.9 1.9 1.9m-6.8 0c0 1.1-.9 2-2 2-1 0-1.9-.9-1.9-2S.9 0 1.9 0c1.1 0 2 .9 2 1.9"></path>
				</svg>
			);
			break;
	}

	return (
		<span className={ `tumblr-preview__post-icon tumblr-preview__post-icon-${ name }` }>
			{ svg }
		</span>
	);
};

export default TumblrPostIcon;
