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
		<ModalTitleBar title="New Task" />
		<CardModal bind:nameInput={popupFocusedElement} {data} on:keypress={onKeyPress} />
	</div>
{/if}
