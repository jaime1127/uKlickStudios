<script lang="ts">
	export let slug: string | undefined = '';
	export let blog: string | undefined = undefined;
	export let heading: string | undefined = undefined;
	export let description: string | undefined = undefined;
	export let link: {
		anchor: string;
		label: string;
	};
	export let asset: {
		url: string;
		alt: string;
	};
</script>

<div class="relative bg-white">
	<div class="mx-auto max-w-7xl lg:grid lg:grid-cols-12 lg:gap-x-8 lg:px-8">
		<div class="px-6 pb-24 pt-10 sm:pb-32 lg:col-span-7 lg:px-0 lg:pb-48 lg:pt-40 xl:col-span-6">
			<div class="mx-auto max-w-lg lg:mx-0">
				<div class="hidden sm:mt-32 sm:flex lg:mt-16">
					<div
						class="relative rounded-full px-3 py-1 text-sm/6 text-gray-500 ring-1 ring-gray-900/10 hover:ring-gray-900/20"
					>
						<a href="/aboutus" class="whitespace-nowrap font-semibold text-indigo-600"
							><span class="absolute inset-0" aria-hidden="true"></span>
							<span aria-hidden="true">&rarr;</span>{blog}</a
						>
					</div>
				</div>
				<h1
					class="mt-24 text-pretty text-5xl font-semibold tracking-tight text-gray-900 sm:mt-10 sm:text-7xl"
				>
					{heading}
				</h1>
				<p class="mt-8 text-pretty text-lg font-medium text-gray-500 sm:text-xl/8">
					{description}
				</p>
				<div class="mt-10 flex items-center gap-x-6">
					<a
						href={link.anchor}
						class="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
						>{link.label}</a
					>
				</div>
			</div>
		</div>
		<div class="relative lg:col-span-5 lg:-mr-8 xl:absolute xl:inset-0 xl:left-1/2 xl:mr-0">
			<img
				class="aspect-[3/2] w-full bg-gray-50 object-cover lg:absolute lg:inset-0 lg:aspect-auto lg:h-full"
				src={asset?.url}
				alt={asset?.alt}
			/>
		</div>
	</div>
</div>
