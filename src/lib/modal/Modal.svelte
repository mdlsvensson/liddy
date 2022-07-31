<script lang="ts">
	import { modal, state } from '$lib/store';
	import clickOutside from '$lib/util/clickOutside';
	import ModalTitleBar from './ModalTitleBar.svelte';
	import CardModal from './types/CardModal.svelte';
	import ProjectModal from './types/ProjectModal.svelte';

	let popupFocusedElement: HTMLElement | undefined;

	const onClickOutside = () => {
		$modal.isVisible = false;
	};

	const onKeyPress = (event: KeyboardEvent) => {
		if (event.key === 'Enter') fieldSubmit(document.activeElement);
	};

	const fieldSubmit = (element: Element | null) => {
		if (element instanceof HTMLElement) element.blur();
	};

	$: if ($modal.isVisible && $modal.data.name === '') {
		if (popupFocusedElement != undefined) {
			popupFocusedElement.focus();
		}
	}
</script>

<div
	class="opacity-0 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-fg dim rounded-lg"
	class:opacity-100={$modal.isVisible}
	use:clickOutside
	on:click_outside={onClickOutside}
>
	{#if $modal.type === 'Card'}
		<div class="w-[40vw] flex flex-col">
			{#if $modal.data.name === ''}
				<ModalTitleBar title="New Task" />
				<CardModal
					mode="new"
					bind:nameInput={popupFocusedElement}
					data={$modal.data}
					on:keypress={onKeyPress}
				/>
			{:else}
				<ModalTitleBar title="Edit Task ({$modal.data.name})" />
				<CardModal
					mode="edit"
					bind:nameInput={popupFocusedElement}
					data={$modal.data}
					on:keypress={onKeyPress}
				/>
			{/if}
		</div>
	{:else if $modal.type === 'Project'}
		<div class="w-[40vw] flex flex-col">
			{#if $state.isNewUser}
				<ModalTitleBar title="Create Your First Project" />
				<ProjectModal
					mode="new"
					bind:nameInput={popupFocusedElement}
					data={$modal.data}
					on:keypress={onKeyPress}
				/>
			{:else if $modal.data.name === ''}
				<ModalTitleBar title="New Project" />
				<ProjectModal
					mode="new"
					bind:nameInput={popupFocusedElement}
					data={$modal.data}
					on:keypress={onKeyPress}
				/>
			{:else}
				<ModalTitleBar title="Edit Project ({$modal.data.name})" />
				<ProjectModal
					mode="edit"
					bind:nameInput={popupFocusedElement}
					data={$modal.data}
					on:keypress={onKeyPress}
				/>
			{/if}
		</div>
	{/if}
</div>
