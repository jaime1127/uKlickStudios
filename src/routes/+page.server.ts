import { fetchImageData } from '../content/gql';

export const load = async () => {
	try {
		const data = await fetchImageData({ where: { slug: 'test' } });
		return {
			data
		};
	} catch (error) {
		console.error('Error loading image data:', error);
		return {
			imageData: null
		};
	}
};
