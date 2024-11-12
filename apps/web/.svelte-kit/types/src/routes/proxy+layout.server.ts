// @ts-nocheck
// import { fetchImageData } from '../../../../packages/content-components/src/components/gql';
import type { LayoutServerLoad } from './$types';
import type { TestQuery } from '$lib/generated/types';
import { HYGRAPH_API_ENDPOINT } from '$env/static/private';
import request from 'graphql-request';

export const load = async () => {
	const image = (await fetchImageData('clzm45ppx8ttj07lliqhyf7fc')) as TestQuery;
	return {
		image
	};
};

export const fetchImageData = async (values: string) => {
	try {
		const response = await request(HYGRAPH_API_ENDPOINT, imageQuery, <TestQuery>{
			id: values
		});
		return response;
	} catch (error) {
		console.error('Error fetching image data:', error);
		throw error;
	}
};
;null as any as LayoutServerLoad;