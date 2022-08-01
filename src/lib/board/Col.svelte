<script lang="ts">
	import { modal } from '$lib/store';
	import { newCard, ModalMode, ModalType } from '$lib/common';
	import ColTitleBar from '$lib/board/ColTitleBar.svelte';

	export let title: string;
	export let color: string;

	const handleClickTitleBar = () => {
		$modal.isVisible = true;
		$modal.type = ModalType.CARD;
		$modal.mode = ModalMode.CREATE;
		$modal.data = newCard({ ownerId: '1' });
	};
</script>

<div class="flex flex-col gap-3">
	<ColTitleBar on:click={handleClickTitleBar} {color}>{title}</ColTitleBar>
	<div class="min-w-[300px] max-w-[400px] h-full bg-fg rounded-xl flex flex-col" />
</div>
