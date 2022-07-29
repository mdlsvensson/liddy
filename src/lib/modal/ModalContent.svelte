<script lang="ts">
	import { modal } from '$lib/store';
	import ModalTitleBar from './ModalTitleBar.svelte';
	import CardModal from './types/CardModal.svelte';

	export let type: string;
	export let data: any;

	let popupFocusedElement: HTMLElement | undefined;

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
</script>

{#if type === 'Card'}
	<div class="w-[40vw] flex flex-col">
		{#if data.name === ''}
			<ModalTitleBar title="New Task" />
		{:else}
			<ModalTitleBar title="Edit Task ({data.name})" />
		{/if}
		<CardModal bind:nameInput={popupFocusedElement} {data} on:keypress={onKeyPress} />
	</div>
{/if}
