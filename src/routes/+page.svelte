<script lang="ts">
	import type { PageData } from './$types';

	export let data: PageData;

	console.log(data);
</script>

<img src={data.imageData} alt="test" />
