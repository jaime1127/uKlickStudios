<script lang="ts">
	import type { ComponentProps } from 'svelte';

	import { Facebook, Instagram } from '@uklick/icon-components';
	import Icon from '../Icon/Icon.svelte';

	interface Props {
		socials?: {
			platform: string | undefined;
			label: string | undefined;
			href: string | undefined;
		}[];
		company?: string | null;
	}

	let { socials = [], company = undefined }: Props = $props();
</script>

<footer class="bg-gray-900 p-8 mt-10">
	<div class="flex justify-center gap-12">
		{#each socials as social}
			<Icon label={social.label} link={social.href} iconSvg={social.platform} />
		{/each}
	</div>
	<p class="mt-10 text-center text-xs leading-5 text-gray-500">
		&copy; {company}
	</p>
</footer>
