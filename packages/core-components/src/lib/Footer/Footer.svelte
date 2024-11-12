<script lang="ts">
	import Facebook from '../../icon-components/Facebook.svelte';
	import Instagram from '../../icon-components/Instagram.svelte';
	import Icon from '../Icon/Icon.svelte';

	export let company: string | undefined = undefined;

	let socials = [
		{
			component: Facebook,
			label: 'Facebook',
			href: 'https://www.facebook.com/'
		},
		{
			component: Instagram,
			label: 'Instagram',
			href: 'https://www.instagram.com/'
		}
	];
</script>

<footer class="bg-gray-900 p-8 mt-10">
	<div class="flex justify-center gap-12">
		{#each socials as social}
			<Icon label={social.label} link={social.href} iconSvg={social.component} />
		{/each}
	</div>
	<p class="mt-10 text-center text-xs leading-5 text-gray-500">
		&copy; 2023 {company}, Inc. All rights reserved | Powered by Sveltekit
	</p>
</footer>
