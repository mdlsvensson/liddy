<script lang="ts">
	import '../app.css';
	import { supabase } from '$lib/supabaseClient';
	import { supabaseUser, user } from '$lib/stores';
	import type { User as SupabaseUser, Session as SupabaseSession } from '@supabase/supabase-js';
	import Login from '$lib/components/Login.svelte';
	import Tooltip from '$lib/components/Tooltip.svelte';

	const supabaseAuthUser = supabase.auth.user();
	if (supabaseAuthUser) supabaseUser.set(supabaseAuthUser);

	supabase.auth.onAuthStateChange((_, session: SupabaseSession | null) => {
		if (!session) return;
		supabaseUser.set(session.user as SupabaseUser);
	});

	if ($supabaseUser) {
		console.log($supabaseUser);
	}
</script>

<Tooltip />

{#if $user}
	<div class="flex ipa-wrapper">
		<header class="w-16 h-full bg-bg2 flex flex-col gap-6 items-center">
			<Logo />
			<Nav />
		</header>
		<main class="w-full h-full p-6">
			<slot />
		</main>
	</div>
{:else if !$user}
	<div class="ipa-wrapper">
		<main class="w-full h-full p-6">
			<Login />
		</main>
	</div>
{/if}

<style>
	.ipa-wrapper {
		@apply w-screen;
		@apply h-screen;
		@apply overflow-hidden;
	}
</style>
