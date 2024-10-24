import request, { gql } from 'graphql-request';
import { HYGRAPH_API_ENDPOINT } from '$env/static/private';
import type { TestQuery } from '$lib/generated/types';

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
