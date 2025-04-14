<script lang="ts">
	import { Footer, Header } from '@uklick/core-components';
	import '$styles/tailwind.css';
	import type { LayoutServerData } from './$types';
	import { injectAnalytics } from '@vercel/analytics/sveltekit';

	export let data: LayoutServerData;

	injectAnalytics({ mode: 'production' });
</script>

<Header logo={data.image.asset?.url} />
<main>
	<slot />
</main>
<Footer
	company={data.layoutData?.footer?.ownership}
	socials={Array.isArray(data.layoutData?.footer?.icons)
		? data.layoutData.footer.icons.map((icon) => ({
				label: icon.label ?? '',
				link: icon.link ?? ''
			}))
		: undefined}
/>
