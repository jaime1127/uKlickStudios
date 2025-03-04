import { gql } from 'graphql-request';

export type { GetHeroQuery } from './generated/gql/types';

export const heroQuery = gql`
	query getHero($slug: String!) {
		hero(where: { slug: $slug }) {
			id
			slug
			blog
			heading
			description
			link {
				__typename
				id
				slug
				anchor
				label
			}
			asset {
				id
				fileName
				size
				mimeType
				url
				width
				height
				handle
				alt
				__typename
			}
		}
	}
`;
