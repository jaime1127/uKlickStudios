<script lang="ts">
	import { Footer, Header } from '@uklick/core-components';
	import '$styles/tailwind.css';
	import type { LayoutServerData } from './$types';

	export let data: LayoutServerData;

	console.log(data);
</script>

<Header logo={data.image.asset?.url} />
<main>
	<slot />
</main>
<Footer
	company={data.layoutData?.footer?.ownership}
	socials={data.layoutData?.footer?.icons?.icon}
/>
