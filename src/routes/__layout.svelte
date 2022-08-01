<script lang="ts">
	import '../app.css';
	import { state, modal, project, user } from '$lib/store';
	import { newUser, newProject, ModalType, ModalMode } from '$lib/common';

	import Logo from '$lib/Logo.svelte';
	import Nav from '$lib/nav/Nav.svelte';
	import Modal from '$lib/modal/Modal.svelte';
	import ProjectSwitcher from '$lib/ProjectSwitcher.svelte';

	if ($state.isNewUser) {
		$user = newUser();

		$modal.isVisible = true;
		$modal.type = ModalType.PROJECT;
		$modal.mode = ModalMode.CREATE;
		$modal.data = newProject({ ownerId: '1' });
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

{#if $project != undefined}
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
