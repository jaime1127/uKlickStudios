<script lang="ts">
	import Header from '../../packages/core-components/Header.svelte';
	import Footer from '../../packages/core-components/Footer.svelte';
	import '../app.css';
	import type { LayoutServerData } from './$types';

	export let data: LayoutServerData;
</script>

<Header logo={data.image.asset?.url} />
<main>
	<slot />
</main>
<Footer company={'uKlick Studios'} />
