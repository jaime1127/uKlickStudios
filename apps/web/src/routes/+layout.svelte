<script lang="ts">
	// import Header from '../../packages/core-components/components/Header.svelte';
	import { Footer, Header } from '@uklick/core-components';
	import '$styles/tailwind.css';
	import type { LayoutServerData } from './$types';

	export let data: LayoutServerData;
</script>

<!-- <Header logo={data.image.asset?.url} /> -->
<main>
	<slot />
</main>
<Footer company={'uKlick Studios'} />
