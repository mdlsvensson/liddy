<script lang="ts">
	import { modal } from '$lib/store';
	import ColTitleBar from './ColTitleBar.svelte';

	export let title: string;

	const handleClick = () => {
		$modal.isVisible = true;
		$modal.type = 'NewCard';
	};
</script>

<div class="flex flex-col gap-3">
	<ColTitleBar on:click={handleClick}>{title}</ColTitleBar>
	<div class="min-w-[300px] max-w-[400px] h-full bg-fg rounded-xl flex flex-col" />
</div>
