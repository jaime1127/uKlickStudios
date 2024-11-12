<script lang="ts">
	import type { PageServerData } from './$types';
	// import Button from '@uklickstudios/core-components'
	// import { Container } from '@uklick/core-components';

	export let data: PageServerData;

	function reverseString(str) {
  return str.split("").reverse().join("");
}

</script>
{JSON.stringify(reverseString('dog'))}

<!-- <Container></Container> -->
<!-- <Button text="Button" size="medium" />
<Button text="Button" />
<Button text="Button" size="small" /> -->
