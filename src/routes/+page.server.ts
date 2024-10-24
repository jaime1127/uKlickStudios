import type { PageServerLoad } from './$types';
import { CALANDY_TOKEN } from '$env/static/private';

export const load: PageServerLoad = async () => {
	try {
		const response = await fetch(`https://api.calendly.com/user_busy_times`, {
			headers: {
				Authorization: `Bearer ${CALANDY_TOKEN}`,
				'Content-Type': 'application/json'
			}
		});

		if (!response.ok) {
			throw new Error(`Failed to fetch Calendly data: ${response.statusText}`);
		}

		const data = await response.json();
		return {
			data
		};
	} catch (error) {
		return {
			error: 'An error occurred while fetching Calendly data'
		};
	}
};
