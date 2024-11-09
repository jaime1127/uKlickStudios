<script lang="ts">
	import { onMount } from 'svelte';

	onMount(() => {
		const script = document.createElement('script');
		script.src = 'https://assets.calendly.com/assets/external/widget.js';
		script.async = true;
		document.head.appendChild(script);
	});
</script>

<!-- Calendly widget-->
<div class="calendly-inline-widget m-16 h-screen" data-url="https://calendly.com/pfjaime"></div>
