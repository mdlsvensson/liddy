<script lang="ts">
	import { modal, state } from '$lib/stores';
	import { ModalType, ModalMode } from '$lib/common';
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

	$: if ($modal.isVisible) {
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
	{#if $modal.type === ModalType.PROJECT}
		<div class="w-[40vw] flex flex-col">
			{#if $modal.mode === ModalMode.CREATE && $state.isNewUser}
				<ModalTitleBar title="Create Your First Project" />
				<ProjectModal bind:nameInput={popupFocusedElement} on:keypress={onKeyPress} />
			{:else if $modal.mode === ModalMode.CREATE}
				<ModalTitleBar title="New Project" />
				<ProjectModal bind:nameInput={popupFocusedElement} on:keypress={onKeyPress} />
			{:else if $modal.mode === ModalMode.EDIT}
				<ModalTitleBar title="Edit Project ({$modal.data.name})" />
				<ProjectModal bind:nameInput={popupFocusedElement} on:keypress={onKeyPress} />
			{/if}
		</div>
	{:else if $modal.type === ModalType.CARD}
		<div class="w-[40vw] flex flex-col">
			{#if $modal.mode === ModalMode.CREATE}
				<ModalTitleBar title="New Task" />
				<CardModal bind:nameInput={popupFocusedElement} on:keypress={onKeyPress} />
			{:else if $modal.mode === ModalMode.EDIT}
				<ModalTitleBar title="Edit Task ({$modal.data.name})" />
				<CardModal bind:nameInput={popupFocusedElement} on:keypress={onKeyPress} />
			{/if}
		</div>
	{/if}
</div>
