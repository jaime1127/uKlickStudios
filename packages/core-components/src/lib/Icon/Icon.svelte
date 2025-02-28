<script lang="ts">
	import type { SvelteComponent } from 'svelte';

	interface Props {
		label?: string | undefined;
		link?: string | undefined;
		iconSvg?: typeof SvelteComponent<any> | undefined;
	}

	let { label = undefined, link = undefined, iconSvg = undefined }: Props = $props();
</script>

<a href={link} class="text-gray-400 hover:text-gray-500">
	{#if label}
		<span class="sr-only">{label}</span>
	{/if}
	{#if iconSvg}
		<svelte:component this={iconSvg} />
	{/if}
</a>
