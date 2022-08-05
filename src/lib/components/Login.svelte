<script lang="ts">
	import { supabase } from '$lib/supabaseClient';
	import { user } from '$lib/stores';
	import Icon from '$lib/common/Icon.svelte';

	let email: string;
	let errorText = '';
	let loading = false;
	let isLinkSent = false;

	$: buttonText = isLinkSent ? 'Resend login link' : 'Send login link';

	const handleLogin = async () => {
		try {
			loading = true;
			const { error } = await supabase.auth.signIn({ email });
			if (error) throw error;
			if (!error) isLinkSent = true;
		} catch (error: any) {
			errorText = error.message || error.error_description;
		} finally {
			loading = false;
		}
	};
</script>

<p class="text-sm absolute top-[50px] left-1/2 -translate-x-1/2">{errorText}</p>

<div class="w-full h-full flex justify-center items-center">
	<form class="w-[350px] flex flex-col gap-10" on:submit|preventDefault={handleLogin}>
		<div class="flex flex-col gap-4">
			<input
				class="pb-4 px-5 pt-[17px] w-full bg-bg2 rounded-md hover:ring-2 ring-bg3"
				type="email"
				placeholder="Email"
				bind:value={email}
			/>

			<div class="w-full h-14">
				<input
					type="submit"
					value={loading ? 'Loading' : buttonText}
					disabled={loading}
					class="h-full bg-orange rounded-md w-full text-bg1 font-bold text-bg border-orange-dim border-b-4 hover:border-b-0 hover:translate-y-[4px] hover:h-[52px] transition-all cursor-pointer"
				/>
			</div>
		</div>

		<div class="flex flex-col gap-2">
			<p class="self-center pointer-events-none">or login with</p>

			<div class="flex justify-center gap-2 fill-text bg-bg2 px-4 py-3 rounded-full">
				<button class="h-[46px] hover:fill-text3 transition">
					<Icon name="google" />
				</button>
				<button class="h-[46px] hover:fill-text3 transition duration-100">
					<Icon name="apple" />
				</button>
				<button class="h-[46px] hover:fill-text3 transition duration-100">
					<Icon name="linkedin" />
				</button>
				<button class="1h-[46px] hover:fill-text3 transition duration-100">
					<Icon name="github" />
				</button>
				<button class="h-[46px] hover:fill-text3 transition duration-100">
					<Icon name="slack" />
				</button>
				<button class="h-[46px] hover:fill-text3 transition duration-100">
					<Icon name="discord" />
				</button>
			</div>
		</div>
	</form>
</div>

<footer class="absolute bottom-0 left-1/2 -translate-x-1/2 w-12">
	<a href="https://github.com/mdlsvensson/liddy" class="fill-text"><Icon name="github2" /></a>
</footer>
