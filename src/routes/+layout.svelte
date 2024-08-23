<script lang="ts">
	import Header from '$lib/components/Header.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import '../app.css';
	import type { LayoutServerData } from './$types';

	export let data: LayoutServerData;

</script>

<Header logo={data.image.asset?.url} />
<main>
	<slot />
</main>
<Footer company={'uKlick Studios'} />
