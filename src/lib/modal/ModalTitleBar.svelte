<script lang="ts">
	import { modal } from '$lib/stores';
	import Icon from '$lib/common/Icon.svelte';

	export let title: string;

	const handleClick = () => {
		$modal.isVisible = false;
	};
</script>

<div class="w-full flex place-content-between bg-fg-shade p-2">
	<h1 class="pl-[0.4rem] pt-[0.2rem]">{title}</h1>
	<button
		class="w-7 fill-text-fg hover:bg-fg-light rounded-md p-[2px] transition duration-100"
		on:click={handleClick}
	>
		<Icon name="close" />
	</button>
</div>
