import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vitest/config';

export default defineConfig({
	plugins: [sveltekit()],
	test: {
		include: ['src/**/*.{test,spec}.{js,ts}']
	},
	server: {
		fs: {
			allow: [
				'C:/Users/pfjai/apps/web/src/uKlickStudios/packages',
				'C:/Users/pfjai/src/uKlickStudios/apps/web/app.css'
			]
		}
	}
});
