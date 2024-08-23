<script lang="ts">
	import type { PageServerData } from './$types';

	export let data: PageServerData;

console.log(data.data)
</script>
		<!-- {JSON.stringify(data)} -->


<!-- <img src={data.image.asset?.url} alt="test" /> -->
