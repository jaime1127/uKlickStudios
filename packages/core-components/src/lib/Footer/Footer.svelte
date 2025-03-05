<script lang="ts">
	import { Facebook, Instagram } from '@uklick/icon-components';
	import Icon from '../Icon/Icon.svelte';

	interface Props {
		socials?: {
			label: string | undefined;
			link: string | undefined;
		}[];
		company?: string | null;
	}

	let { socials = [], company = undefined }: Props = $props();
</script>

<footer class="bg-gray-900 p-8 mt-10">
	<div class="flex justify-center gap-12">
		{#each socials as social}
			{#if social.label === 'Facebook'}
				<Icon label={social.label} link={social.link} iconSvg={Facebook} />
			{:else if social.label === 'Instagram'}
				<Icon label={social.label} link={social.link} iconSvg={Instagram} />
			{/if}
		{/each}
	</div>
	<p class="mt-10 text-center text-xs leading-5 text-gray-500">
		&copy; {company}
	</p>
</footer>
