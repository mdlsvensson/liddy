<script lang="ts">
	import { project, modal, user } from '$lib/stores';
	import type { Project } from '$lib/types';
	import { ModalMode } from '$lib/common';

	export let nameInput: HTMLElement | undefined;

	const submit = () => {
		$project = { ...($modal.data as Project) };
		$user.projects.push($project);
		$modal.isVisible = false;
		console.log($user.projects);
	};
</script>

<form class="w-full h-full p-3 flex flex-col gap-3">
	{#if $modal.mode === ModalMode.CREATE}
		<label class="sr-only" for="project-name">Enter a name for your project</label>
		<input
			type="text"
			name="project-name"
			id="project-name"
			placeholder="Untitled Project"
			maxlength="50"
			class="p-2 text-lg w-full bg-fg rounded-md ring-2 ring-fg-light"
			on:keypress
			bind:value={$modal.data.name}
			bind:this={nameInput}
		/>
	{/if}

	{#if $modal.mode === ModalMode.EDIT}
		<label class="sr-only" for="project-name">Enter a name for your project</label>
		<input
			type="text"
			name="project-name"
			id="project-name"
			placeholder="Untitled Project"
			maxlength="50"
			class="p-2 text-lg w-full bg-fg rounded-md hover:ring-2 ring-fg-light focus:ring-2"
			on:keypress
			bind:value={$modal.data.name}
			bind:this={nameInput}
		/>

		<textarea
			name="project-description"
			id="project-description"
			placeholder="A project description..."
			maxlength="500"
			class="w-full h-40 bg-fg resize-none text-text-fg py-2 px-3 rounded-md hover:ring-2 ring-fg-light focus:ring-2"
			bind:value={$modal.data.description}
		/>
	{/if}

	<div class="flex justify-center">
		{#if $modal.mode === ModalMode.CREATE}
			<label for="card-add" class="sr-only">Submit this task to the project</label>
			<button
				class="p-3 px-14 bg-fg-shade rounded-md hover:bg-fg-light text-lg"
				name="card-add"
				id="card-add"
				data-type="project"
				on:click|preventDefault={submit}>Create</button
			>
		{/if}
	</div>
</form>
