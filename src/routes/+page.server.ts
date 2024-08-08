import { fetchImageData } from '../content/gql';
import type { PageServerLoad } from './$types';
import type { TestQuery } from '$lib/generated/types';

export const load: PageServerLoad = async () => {
	const image = (await fetchImageData('clzivrtj23lzr07lhfr4gtpil')) as TestQuery;
	return {
		image
	};
};
