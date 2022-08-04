<script lang="ts">
	import '../app.css';
	import { page } from '$app/stores';
	import { goto } from '$app/navigation';
	import { browser } from '$app/env';
	import { state, modal, project, user } from '$lib/stores';
	import { ModalType, ModalMode } from '$lib/common';
	import { newUser, newProject } from '$lib/factories';

	import Logo from '$lib/Logo.svelte';
	import Nav from '$lib/nav/Nav.svelte';
	import Modal from '$lib/modal/Modal.svelte';
	import ProjectSwitcher from '$lib/ProjectSwitcher.svelte';
	import Login from '$lib/auth/Login.svelte';

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
	{#if $user}
		<header class="w-16 h-full bg-bg2 flex flex-col gap-6 items-center">
			<Logo />
			<Nav />
		</header>
	{/if}

	<main class="w-full p-6">
		{#if !$user}
			<Login />
		{:else}
			<slot />
		{/if}
	</main>
</div>
