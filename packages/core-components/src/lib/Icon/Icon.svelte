<script lang="ts">
	import type { Component } from 'svelte';

	interface Props {
		label?: string;
		link?: string;
		iconSvg?: Component<any>;
	}

	let { label = undefined, link = undefined, iconSvg = undefined }: Props = $props();
</script>

<a href={link} class="text-gray-400 hover:text-gray-500">
	{#if label}
		<span class="sr-only">{label}</span>
	{/if}
	{#if iconSvg}
		{@const Component = iconSvg}
		<Component {iconSvg} />
	{/if}
</a>
