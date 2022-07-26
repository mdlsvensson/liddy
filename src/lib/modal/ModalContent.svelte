<script lang="ts">
	import ModalTitleBar from './ModalTitleBar.svelte';

	export let type: string;
</script>

{#if type === 'NewCard'}
	<div class="w-[60vw] h-[60vh] flex flex-col gap-4">
		<ModalTitleBar title="New Card" />

		<div class="w-full h-full pl-2">
			<label class="" for="card-assign-input">Assign</label>
			<input name="card-assign-input" id="card-assign-input" />
		</div>
	</div>
{/if}
