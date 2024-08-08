<script lang="ts">
	import type { PageServerData } from './$types';

	export let data: PageServerData;
</script>

<img src={data.image.asset?.url} alt="test" />
