<script lang="ts">
	import { fly } from 'svelte/transition';
	import { onMount } from 'svelte';
	import ToogleMenu from '../icon-components/ToogleMenu.svelte';
	import CloseMenu from '../icon-components/CloseMenu.svelte';

	let items = [
		{ label: 'Book', href: '/book' },
		{ label: 'Portfolio', href: '/portfolio' },
		{ label: 'About Us', href: '/aboutus' },
		{ label: 'Contact', href: '/contact' }
	];

	export let logo: string | undefined = undefined;

	let isMenuOpen = false;
	let isScrolled = false;

	async function toggleMenu() {
		isMenuOpen = !isMenuOpen;
	}

	async function handleScroll() {
		isScrolled = window.scrollY > 0;
	}

	onMount(() => {
		if (typeof window !== 'undefined') {
			window.addEventListener('scroll', handleScroll);
		}

		return () => {
			if (typeof window !== 'undefined') {
				window.removeEventListener('scroll', handleScroll);
			}
		};
	});
</script>

<header
	class="fixed inset-x-0 top-0 z-50 bg-slate-900 {isScrolled ? 'bg-gray-900' : ''}"
	data-sveltekit-preload-code="tap"
>
	<nav class="flex items-center justify-between p-4 lg:px-8" aria-label="Global">
		<div class="flex lg:flex-1 rounded-full">
			{#if logo}
				<a href="/" class="-m-1.5 p-1.5">
					<img class="h-8 w-auto rounded-full" src={logo} alt="FIXTHIS" />
				</a>
			{/if}
		</div>
		<div class="hidden lg:flex lg:gap-x-12 lg:justify-center">
			{#each items as item}
				<a href={item.href} class="text-sm font-semibold leading-6 text-gray-300">{item.label}</a>
			{/each}
		</div>
		<div class="hidden lg:flex lg:flex-1 lg:justify-end"></div>
		<button type="button" class="lg:hidden text-gray-300 hover:text-white" on:click={toggleMenu}>
			<span class="sr-only">Open menu</span>
			<ToogleMenu />
		</button>
	</nav>
	{#if isMenuOpen}
		<div class="lg:hidden" role="dialog" aria-modal="true">
			<div
				class="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-gray-900 px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10"
				in:fly={{ x: 200, duration: 300 }}
				out:fly={{ x: -200, duration: 300 }}
			>
				<div class="flex items-center justify-between">
					{#if logo}
						<a href="/" class="-m-1.5 p-1.5" on:click={toggleMenu}>
							<span class="sr-only">Your Company</span>
							<img class="h-8 w-auto rounded-full" src={logo} alt="infamous ink logo" />
						</a>
					{/if}
					<button
						type="button"
						class="-m-2.5 rounded-md p-2.5 text-gray-300 hover:text-white"
						on:click={toggleMenu}
					>
						<span class="sr-only">Close menu</span>
						<CloseMenu />
					</button>
				</div>
				<div class="mt-6 flow-root">
					<div class="-my-6 divide-y divide-gray-500/10">
						<div class="space-y-2 py-6">
							{#each items as item}
								<a
									href={item.href}
									class="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-300 hover:text-white"
									on:click={toggleMenu}
								>
									{item.label}
								</a>
							{/each}
						</div>
					</div>
				</div>
			</div>
		</div>
	{/if}
</header>
