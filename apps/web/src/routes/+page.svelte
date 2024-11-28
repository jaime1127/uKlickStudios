<script lang="ts">
	import { Hero } from '@uklick/content-components';
	import type { LayoutServerData } from './$types';
	export let data: LayoutServerData;
</script>

<Hero
	blog={data.hero.hero?.blog ?? ''}
	description={data.hero.hero?.description ?? ''}
	asset={{
		url: data.hero.hero?.asset?.url ?? '',
		alt: data.hero.hero?.asset?.alt ?? ''
	}}
	heading={data.hero.hero?.heading ?? ''}
/>
