<script lang="ts">
	export let mode: string;
	export let data: Record<string, any>;
	export let nameInput: HTMLElement | undefined;
</script>

<form class="w-full h-full p-3 flex flex-col gap-3">
	<label class="sr-only" for="project-name">Enter a name for your project</label>
	<input
		type="text"
		name="project-name"
		id="project-name"
		placeholder="Untitled Project"
		maxlength="50"
		class="p-2 text-lg w-full bg-fg rounded-md hover:ring-2 ring-fg-light focus:ring-2"
		on:keypress
		bind:value={data.name}
		bind:this={nameInput}
	/>

	<textarea
		name="project-description"
		id="project-description"
		placeholder="Add a description if you want..."
		maxlength="500"
		class="w-full h-40 bg-fg resize-none text-text-fg py-2 px-3 rounded-md hover:ring-2 ring-fg-light focus:ring-2"
		bind:value={data.description}
	/>

	<div class="flex justify-center">
		{#if mode === 'new'}
			<label for="card-add" class="sr-only">Submit this task to the project</label>
			<button
				class="p-3 px-14 bg-fg-shade rounded-md hover:bg-fg-light text-lg"
				name="card-add"
				id="card-add"
				data-type="project"
				on:click|preventDefault>Create</button
			>
		{/if}
	</div>
</form>
