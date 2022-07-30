<script lang="ts">
	import '../app.css';
	import { state, modal, project } from '$lib/store';
	import type { Project } from '$lib/interfaces';

	import Logo from '$lib/Logo.svelte';
	import Nav from '$lib/nav/Nav.svelte';
	import Modal from '$lib/modal/Modal.svelte';
	import ProjectSwitcher from '$lib/ProjectSwitcher.svelte';

	if ($state.isNewUser) {
		$modal.isVisible = true;
		$modal.type = 'Project';
		$modal.data = <Project>{
			id: '',
			name: '',
			description: '',
			members: [],
			columns: [],
			isActive: true,
			isArchived: false,
			isDeleted: false,
			isPublic: false,
			isLocked: false,
			createdAt: new Date().getTime(),
			updatedAt: new Date().getTime(),
			dueAt: null,
		};
	}

	// Global keybinds
	if (typeof window !== 'undefined') {
		document.onkeydown = (event: KeyboardEvent) => {
			if (event.key === 'Escape') {
				if ($modal.isVisible) {
					$modal.isVisible = false;
				}
			}
		};
	}
</script>

<svelte:head>
	<title>Liddy</title>
</svelte:head>

<Modal />
{#if $project.name != ''}
	<ProjectSwitcher project={$project.name} />
{/if}

<div class="flex w-screen h-screen">
	<header class="w-16 h-full bg-fg flex flex-col gap-6 items-center">
		<Logo />
		<Nav />
	</header>

	<main class="bg-bg w-full p-6">
		<slot />
	</main>
</div>
