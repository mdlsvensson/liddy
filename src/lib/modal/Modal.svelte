<script lang="ts">
	import { modal, state } from '$lib/store';
	import clickOutside from '$lib/util/clickOutside';
	import ModalTitleBar from './ModalTitleBar.svelte';
	import CardModal from './types/CardModal.svelte';
	import ProjectModal from './types/ProjectModal.svelte';

	let popupFocusedElement: HTMLElement | undefined;

	let type = $modal.type;
	let data = $modal.data;

	const onClickOutside = () => {
		$modal.isVisible = false;
	};

	const onKeyPress = (event: KeyboardEvent) => {
		if (event.key === 'Enter') fieldSubmit(document.activeElement);
	};

	const fieldSubmit = (element: Element | null) => {
		if (element instanceof HTMLElement) element.blur();
	};

	$: if ($modal.isVisible && data.name === '') {
		if (popupFocusedElement != undefined) {
			popupFocusedElement.focus();
		}
	}

	const onClick = (event: HTMLButtonElement) => {
		console.log(event.target.dataset)
	}
</script>

<div
	class="opacity-0 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-fg dim rounded-lg"
	class:opacity-100={$modal.isVisible}
	use:clickOutside
	on:click_outside={onClickOutside}
>
	{#if type === 'Card'}
		<div class="w-[40vw] flex flex-col">
			{#if data.name === ''}
				<ModalTitleBar title="New Task" />
				<CardModal
					bind:nameInput={popupFocusedElement}
					{data}
					on:keypress={onKeyPress}
					mode="new"
				/>
			{:else}
				<ModalTitleBar title="Edit Task ({data.name})" />
				<CardModal
					bind:nameInput={popupFocusedElement}
					{data}
					on:keypress={onKeyPress}
					mode="edit"
				/>
			{/if}
		</div>
	{:else if type === 'Project'}
		<div class="w-[40vw] flex flex-col">
			{#if $state.isNewUser}
				<ModalTitleBar title="Create Your First Project" />
				<ProjectModal
					bind:nameInput={popupFocusedElement}
					{data}
					on:keypress={onKeyPress}
					mode="new"
				/>
			{:else if data.name === ''}
				<ModalTitleBar title="New Project" />
				<ProjectModal
					bind:nameInput={popupFocusedElement}
					{data}
					on:keypress={onKeyPress}
					mode="new"
				/>
			{:else}
				<ModalTitleBar title="Edit Project ({data.name})" />
				<ProjectModal
					bind:nameInput={popupFocusedElement}
					{data}
					on:keypress={onKeyPress}
					mode="edit"
					on:click={}
				/>
			{/if}
		</div>
	{/if}
</div>
