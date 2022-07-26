<script lang="ts">
	import { modal } from '$lib/store';
	import Icon from '$lib/common/Icon.svelte';

	export let title: string;

	const handleClick = () => {
		$modal.isVisible = false;
	};
</script>

<div class="w-full flex place-content-between">
	<h1 class="pl-2">{title}</h1>
	<button
		class="w-7 fill-text-fg hover:bg-fg-shade rounded-md p-[2px] transition duration-100"
		on:click={handleClick}
	>
		<Icon name="close" />
	</button>
</div>
