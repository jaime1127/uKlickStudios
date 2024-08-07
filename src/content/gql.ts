import { gql, GraphQLClient } from 'graphql-request';
import { HYGRAPH_ACCESS_TOKEN, HYGRAPH_API_ENDPOINT } from '$env/static/private';

const client = new GraphQLClient(HYGRAPH_API_ENDPOINT, {
	headers: {
		Authorization: `Bearer ${HYGRAPH_ACCESS_TOKEN}`
	}
});

const imageQuery = gql`
	query imageQuery($slug: String!) {
  test(where: {slug: $slug}) {
    id
    description
    id
    slug
    title
    imagess {
      id
      slug
      image {
        id
        stage
        updatedAt
        handle
        fileName
        mimeType
        width
        height
        size
        url
      }
    }
  }
}
`;

export const fetchImageData = async (variables: { where: { slug: string } }) => {
	console.log('Fetching image data with variables:', variables);
	try {
		const response = await client.request(imageQuery, variables);
		console.log('Received image data:', response);
		return response;
	} catch (error) {
		console.error('Error fetching image data:', error);
		throw error;
	}
};
