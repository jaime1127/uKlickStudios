import request, { gql, GraphQLClient } from 'graphql-request';
import { HYGRAPH_ACCESS_TOKEN, HYGRAPH_API_ENDPOINT } from '$env/static/private';

const client = new GraphQLClient(HYGRAPH_API_ENDPOINT, {
	headers: {
		Authorization: `Bearer ${HYGRAPH_ACCESS_TOKEN}`
	}
});

export const image = gql`
	query imageQL($where: TestWhereUniqueInput!) {
		values: test(where: $where) {
			title
			description
			slug
			imagess {
				__typename
				slug
				image {
					fileName
					size
					mimeType
					url
					width
					height
					handle
					__typename
				}
			}
			id
		}
	}
`;

const loadImageData = async () => {
	const data = await request(HYGRAPH_API_ENDPOINT, image);
	console.log(data)
};

loadImageData();
