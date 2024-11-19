// import { fetchImageData } from '../../../../packages/content-components/src/components/gql';
import type { LayoutServerLoad } from './$types';
import type { TestQuery } from '$lib/generated/types';
import { fetchImageData } from '../clients/content';

export const load: LayoutServerLoad = async () => {
	const image = (await fetchImageData('clzm45ppx8ttj07lliqhyf7fc')) as TestQuery;
	return {
		image
	};
};
