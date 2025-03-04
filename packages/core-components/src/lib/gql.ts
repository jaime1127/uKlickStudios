import { gql } from 'graphql-request';

export type { GetFooterQuery } from './generated/gql/types';

export const footerQuery = gql`
	query getFooter($slug: String!) {
		footer(where: { slug: $slug }) {
			slug
			ownership
			icons {
				link
				label
				icon {
					id
					alt
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
		}
	}
`;
