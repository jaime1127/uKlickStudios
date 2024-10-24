import { fetchImageData } from '../../packages/content-components/gql';
import type { LayoutServerLoad } from './$types';
import type { TestQuery } from '$lib/generated/types';

export const load: LayoutServerLoad = async () => {
	const image = (await fetchImageData('clzm45ppx8ttj07lliqhyf7fc')) as TestQuery;
	return {
		image
	};
};
