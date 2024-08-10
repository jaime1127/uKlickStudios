<!-- Icon.svelte -->
<script lang="ts">
	import type { SvelteComponent } from 'svelte';

	export let label: string | undefined = undefined;
	export let link: string | undefined = undefined;
	export let iconSvg: typeof SvelteComponent<any> | undefined = undefined;
</script>

<a href={link} class="text-gray-400 hover:text-gray-500">
	{#if label}
		<span class="sr-only">{label}</span>
	{/if}
	{#if iconSvg}
		<svelte:component this={iconSvg} />
	{/if}
</a>
