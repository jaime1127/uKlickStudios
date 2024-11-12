import request, { gql } from "graphql-request";
const HYGRAPH_API_ENDPOINT = "https://us-east-1-shared-usea1-02.cdn.hygraph.com/content/clwx6wl5n073z07te4z66dul9/master";
const imageQuery = gql`
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
const fetchImageData = async (values) => {
  try {
    const response = await request(HYGRAPH_API_ENDPOINT, imageQuery, {
      id: values
    });
    return response;
  } catch (error) {
    console.error("Error fetching image data:", error);
    throw error;
  }
};
const load = async () => {
  const image = await fetchImageData("clzm45ppx8ttj07lliqhyf7fc");
  return {
    image
  };
};
export {
  load
};
