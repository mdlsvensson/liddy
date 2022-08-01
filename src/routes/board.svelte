<script lang="ts">
	import { project } from '$lib/store';
	import { newColumn } from '$lib/common';
	import colorOptions from '$lib/util/colorOptions';
	import Col from '$lib/board/Col.svelte';

	$: if ($project != undefined && $project.isNewProject) {
		$project.columns = [
			...$project.columns,
			newColumn({
				title: 'Backlog',
				color: colorOptions.gray,
			}),
			newColumn({
				title: 'Unassigned',
				color: colorOptions.red2,
			}),
			newColumn({
				title: 'In Progress',
				color: colorOptions.yellow,
			}),
			newColumn({
				title: 'Done',
				color: colorOptions.green2,
			}),
		];

		$project.isNewProject = false;
	}
</script>

<div class="h-full flex gap-6">
	{#if $project != undefined}
		{#if $project.columns.length > 0}
			{#each $project.columns as column}
				<Col title={column.title} color={column.color} />
			{/each}
		{:else}
			<button>Add Column</button>
		{/if}
	{:else}
		<button>Create Project</button>
	{/if}
</div>
