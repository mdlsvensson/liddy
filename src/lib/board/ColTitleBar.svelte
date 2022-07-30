<script lang="ts">
	import Icon from '$lib/common/Icon.svelte';

	export let color: string;
</script>

<div
	style="border-color: {color};"
	class="flex items-center py-2 pl-4 pr-2 rounded-xl bg-fg place-content-between border-2"
>
	<h1><slot /></h1>
	<button
		class="w-6 fill-text-fg hover:bg-fg-shade rounded-md p-[2px] transition duration-100"
		on:click
	>
		<Icon name="add" />
	</button>
</div>
