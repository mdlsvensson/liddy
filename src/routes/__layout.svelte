<script lang="ts">
	import '../app.css';
	import Logo from '$lib/Logo.svelte';
	import Nav from '$lib/nav/Nav.svelte';
</script>

<svelte:head>
	<title>Liddy</title>
</svelte:head>

<div class="flex w-screen h-screen">
	<header class="w-16 h-full bg-fg flex flex-col gap-6 items-center">
		<Logo />
		<Nav />
	</header>

	<main class="bg-bg w-full p-6">
		<slot />
	</main>
</div>
