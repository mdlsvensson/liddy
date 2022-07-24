<script lang="ts">
	import ColTitleBar from './ColTitleBar.svelte';

	export let title: string;

	let inputToggled = false;

	const handleClick = () => {
		inputToggled = !inputToggled;
	};
</script>

<div class="flex flex-col gap-3">
	<ColTitleBar on:click={handleClick}>{title}</ColTitleBar>
	<div class="min-w-[300px] max-w-[400px] h-full bg-fg rounded-xl flex flex-col" />
</div>
