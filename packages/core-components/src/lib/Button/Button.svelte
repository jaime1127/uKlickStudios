<script lang="ts">
	export let text: string;
	export let size: 'medium' | 'small' = 'medium';
</script>

<button
	type="button"
	class={`${
		size === 'medium' ? 'px-3 py-2' : 'px-3.5 py-2.5'
	}  text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 rounded-md bg-indigo-600`}
>
	{text}
</button>
