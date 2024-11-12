/** @type {import('tailwindcss').Config} */
export default {
	content: [
		'./src/**/*.{html,js,svelte,ts}',
		'node_modules/@uklick/core-components/src/**/*.{html,svelte,ts}',
		'node_modules/@uklick/icon-components/src/**/*.{html,svelte,ts}',
		'node_modules/@uklick/content-components/src/**/*.{html,svelte,ts}'
	],
	theme: {
		extend: {}
	},
	plugins: []
};
