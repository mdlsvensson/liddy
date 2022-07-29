<script lang="ts">
	import { modal } from '$lib/store';
	import type { Card } from '$lib/interfaces';
	import ColTitleBar from './ColTitleBar.svelte';

	export let title: string;

	const handleClickTitleBar = () => {
		$modal.isVisible = true;
		$modal.type = 'Card';

		const newCard = <Card>{
			id: '',
			name: '',
			description: '',
			userId: '',
			createdAt: new Date().getTime().toString(),
			updatedAt: new Date().getTime().toString(),
			dueAt: '',
			priority: 0,
			weight: 1,
			column: title,
			tags: [],
			comments: [],
			attachments: [],
			projectId: '',
		};

		$modal.data = newCard;
	};
</script>

<div class="flex flex-col gap-3">
	<ColTitleBar on:click={handleClickTitleBar}>{title}</ColTitleBar>
	<div class="min-w-[300px] max-w-[400px] h-full bg-fg rounded-xl flex flex-col" />
</div>
