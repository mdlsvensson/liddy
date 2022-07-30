<script lang="ts">
	import { state, columns } from '$lib/store';
	import colorOptions from '$lib/util/colorOptions';
	import Col from '$lib/board/Col.svelte';

	const templateColumns = [
		{
			title: 'Backlog',
			color: colorOptions.gray,
		},
		{
			title: 'Unassigned',
			color: colorOptions.red2,
		},
		{
			title: 'In Progress',
			color: colorOptions.yellow,
		},
		{
			title: 'Done',
			color: colorOptions.green2,
		},
	];

	if ($state.isNewUser) {
	}
</script>

<div class="h-full flex gap-6">
	{#if $state.isNewUser}
		{#each templateColumns as column}
			<Col title={column.title} color={column.color} />
		{/each}
	{/if}
</div>
