import type { TestQuery } from '$lib/generated/gql/types';

import { HYGRAPH_API_ENDPOINT } from '$env/static/private';
import { heroQuery, type GetHeroQuery } from '@uklick/content-components/gql';
import { footerQuery, type GetFooterQuery} from '@uklick/core-components/gql';

import request, { gql } from 'graphql-request';

export const imageQuery = gql`
	query test($id: ID!) {
		asset(where: { id: $id }) {
			id
			handle
			fileName
			mimeType
			width
			height
			size
			url
		}
	}
`;

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

export const fetchHeroData = async (values: string) => {
	try {
		const response = await request(HYGRAPH_API_ENDPOINT, heroQuery, <GetHeroQuery>{
			slug: values
		});
		return response;
	} catch (error) {
		console.error('Error fetching image data:', error);
		throw error;
	}
};

export const fetchFooterData = async (values: string) => {
	try {
		const response = await request(HYGRAPH_API_ENDPOINT, footerQuery, <GetFooterQuery>{
			slug: values
		});
		return response;
	} catch (error) {
		console.error('Error fetching image data:', error);
		throw error;
	}
};
