<script lang="ts">
	import { Hero } from '@uklick/content-components';
	import type { LayoutServerData } from './$types';
	export let data: LayoutServerData;

	let walkingAnimation = false;
</script>

<Hero
	blog={data.content.hero?.blog ?? ''}
	description={data.content.hero?.description ?? ''}
	asset={{
		url: data.content.hero?.asset?.url ?? '',
		alt: data.content.hero?.asset?.alt ?? ''
	}}
	heading={data.content.hero?.heading ?? ''}
	link={{
		anchor: data.content.hero?.link?.anchor ?? '',
		label: data.content.hero?.link?.label ?? ''
	}}
/>
