import request, { gql } from 'graphql-request';
// import { HYGRAPH_API_ENDPOINT } from '../../../../apps/web/';
// import type { TestQuery } from '$lib/generated/types';

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
