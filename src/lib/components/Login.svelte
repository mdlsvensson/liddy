<script lang="ts">
	import { supabase } from '$lib/supabaseClient';
	import { user } from '$lib/stores';
	import LoginError from './LoginError.svelte';
	import LoginWithIcon from './LoginWithIcon.svelte';
	import LoginFooter from './LoginFooter.svelte';
	import LoginLinkButton from './LoginLinkButton.svelte';

	let email: string;
	let errorText = '';
	let loading = false;
	let isLinkSent = false;
	let isError = false;

	$: buttonText = isLinkSent ? 'Resend login link' : 'Send login link';

	const handleLogin = async () => {
		try {
			loading = true;
			const { error } = await supabase.auth.signIn({ email });
			if (error) throw error;
			if (!error) isLinkSent = true;
		} catch (error: any) {
			isError = true;
			errorText = error.message || error.error_description;
		} finally {
			loading = false;
		}
	};
</script>

<LoginError {isError} {errorText} />

<div class="w-full h-full flex justify-center items-center">
	<form class="w-[350px] flex flex-col gap-10" on:submit|preventDefault={handleLogin}>
		<div class="flex flex-col gap-4">
			<input
				class="pb-4 px-5 pt-[17px] w-full bg-bg2 rounded-md hover:ring-2 ring-bg3"
				type="email"
				placeholder="Email"
				bind:value={email}
			/>

			<LoginLinkButton {loading} {buttonText} />
		</div>

		<div class="flex flex-col gap-2">
			<p class="self-center pointer-events-none">or login with</p>

			<div class="flex justify-center gap-2 bg-bg2 px-4 py-3 rounded-full">
				<LoginWithIcon name="google" />
				<LoginWithIcon name="apple" />
				<LoginWithIcon name="linkedin" />
				<LoginWithIcon name="github" />
				<LoginWithIcon name="slack" />
				<LoginWithIcon name="discord" />
			</div>
		</div>
	</form>
</div>

<LoginFooter />
