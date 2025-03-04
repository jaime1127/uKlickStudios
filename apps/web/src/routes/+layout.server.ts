import type { LayoutServerLoad } from './$types';
import type { TestQuery } from '$lib/generated/gql/types';
import { fetchFooterData, fetchHeroData, fetchImageData } from '../clients/content';
import type { GetHeroQuery } from '@uklick/content-components/gql';
import type { GetFooterQuery } from '@uklick/core-components/gql';

export const load: LayoutServerLoad = async () => {
	const image = (await fetchImageData('clzm45ppx8ttj07lliqhyf7fc')) as TestQuery;
	const content = (await fetchHeroData('home-page')) as GetHeroQuery;
	const layoutData = (await fetchFooterData('footer')) as GetFooterQuery;
	return {
		image,
		content,
		layoutData
	};
};
