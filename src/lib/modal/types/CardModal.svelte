<script lang="ts">
	import { modal } from '$lib/store';
	import { ModalMode } from '$lib/common';
	import CardPriority from '$lib/card/CardPriority.svelte';
	import colorOptions from '$lib/util/colorOptions';

	export let nameInput: HTMLElement | undefined;
</script>

<form class="w-full h-full p-3 flex flex-col gap-3">
	<label class="sr-only" for="card-name">Enter a name for this task</label>
	<input
		type="text"
		name="card-name"
		id="card-name"
		placeholder="Untitled"
		maxlength="50"
		class="p-2 text-lg w-full bg-fg rounded-md hover:ring-2 ring-fg-light focus:ring-2"
		on:keypress
		bind:value={$modal.data.name}
		bind:this={nameInput}
	/>

	<div class="flex gap-2">
		<label for="card-status" class="sr-only">Set the status of this task</label>
		<button
			class="p-2 bg-fg-shade rounded-md w-full hover:bg-fg-light"
			name="card-status"
			id="card-status"
			on:click|preventDefault>{$modal.data.column}</button
		>

		<label for="card-assign" class="sr-only">Assign someone to this task</label>
		<button
			class="p-2 bg-fg-shade rounded-md w-full hover:bg-fg-light"
			name="card-tags"
			id="card-tags"
			on:click|preventDefault>Assign</button
		>

		<label for="card-tags" class="sr-only">Add tags to this task</label>
		<button
			class="p-2 bg-fg-shade rounded-md w-full hover:bg-fg-light"
			name="card-tags"
			id="card-tags"
			on:click|preventDefault>Tags</button
		>

		<label for="card-dependencies" class="sr-only">Add dependencies to this task</label>
		<button
			class="p-2 bg-fg-shade rounded-md w-full hover:bg-fg-light"
			name="card-dependencies"
			id="card-dependencies"
			on:click|preventDefault>Dependencies</button
		>

		<CardPriority priority={$modal.data.priority} />
	</div>

	<div class="flex flex-col gap-4">
		<textarea
			name="card-description"
			id="card-description"
			placeholder="Add more detail to this task..."
			maxlength="500"
			class="w-full h-40 bg-fg resize-none text-text-fg py-2 px-3 rounded-md hover:ring-2 ring-fg-light focus:ring-2"
		/>
		<div class="flex justify-center">
			{#if $modal.mode === ModalMode.CREATE}
				<label for="card-add" class="sr-only">Submit this task to the project</label>
				<button
					class="p-3 px-20 bg-fg-shade rounded-md hover:bg-fg-light text-lg"
					name="card-add"
					id="card-add"
					on:click|preventDefault>Add</button
				>
			{/if}
		</div>
	</div>
</form>
