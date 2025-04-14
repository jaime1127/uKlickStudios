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

<footer class="bg-gray-900">
	<div class="mx-auto max-w-7xl px-6 pb-8 pt-16 sm:pt-24 lg:px-8 lg:pt-32">
		<div class="xl:grid xl:grid-cols-3 xl:gap-8">
			<div class="space-y-8">
				<img
					class="h-9"
					src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=500"
					alt="Company name"
				/>
				<p class="text-balance text-sm/6 text-gray-300">
					Making the world a better place through constructing elegant hierarchies.
				</p>
				<div class="flex gap-x-6"></div>
			</div>
		</div>
		<div class="mt-16 border-t border-white/10 pt-8 sm:mt-20 lg:mt-24">
			<p class="text-sm/6 text-gray-400">&copy; 2024 Your Company, Inc. All rights reserved.</p>
		</div>
	</div>
</footer>
