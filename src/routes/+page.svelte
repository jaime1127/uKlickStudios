<script lang="ts">
	import type { PageServerData } from './$types';
	// import Button from '../../packages/core-components/components/Button.svelte';
	import { Container } from '@uklick/core-components';

	export let data: PageServerData;
</script>

<Container></Container>
<Button text="Button" size="medium" />
<Button text="Button" />
<Button text="Button" size="small" />
