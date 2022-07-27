<script lang="ts">
	import CardWeight from '$lib/card/CardWeight.svelte';

	export let data: any;
	export let nameInput: HTMLElement | undefined;
</script>

<form class="w-full h-full p-3 flex flex-col gap-2">
	<label class="sr-only" for="card-name">Task Name</label>
	<div class="flex gap-2">
		<label for="card-projects" class="sr-only">Select a project for this task</label>
		<button
			class="py-2 px-4 transition bg-fg-shade rounded-md flex-shrink-0"
			name="card-tags"
			id="card-tags"
			on:click|preventDefault>No Project</button
		>

		<input
			type="text"
			class="p-2 text-lg w-full bg-fg transition focus:bg-fg-shade rounded-md"
			name="card-name"
			id="card-name"
			placeholder="Enter a title for your new task..."
			on:keypress
			bind:value={data.name}
			bind:this={nameInput}
		/>
	</div>

	<div class="flex gap-2">
		<label for="card-tags" class="sr-only">Add tags to this task</label>
		<button
			class="p-2 transition bg-fg-shade rounded-md w-full"
			name="card-tags"
			id="card-tags"
			on:click|preventDefault>Tags</button
		>

		<label for="card-assign" class="sr-only">Assign someone to this task</label>
		<button
			class="p-2 transition bg-fg-shade rounded-md w-full"
			name="card-tags"
			id="card-tags"
			on:click|preventDefault>Assign</button
		>
	</div>
</form>
