<script lang="ts">
	import { supabase } from '$lib/supabase';
	import Icon from '$lib/common/Icon.svelte';

	let loading = false;
	let email: string;

	const handleLogin = async () => {
		try {
			loading = true;
			const { error } = await supabase.auth.signIn({ email });
			if (error) throw error;
			alert('Check your email for the login link!');
		} catch (error) {
			alert(error.error_description || error.message);
		} finally {
			loading = false;
		}
	};
</script>

<div class="w-full h-full flex justify-center items-center">
	<form class="w-[350px] flex flex-col gap-10" on:submit|preventDefault={handleLogin}>
		<div class="flex flex-col gap-4">
			<input
				class="pb-4 px-6 pt-[17px] w-full bg-bg2 rounded-md hover:ring-2 ring-bg3"
				type="email"
				placeholder="Your email"
			/>

			<div class="w-full h-14">
				<input
					type="submit"
					value={loading ? 'Loading' : 'Send login link'}
					disabled={loading}
					class="h-full bg-orange rounded-md w-full text-bg1 font-bold text-bg border-orange-dim border-b-4 hover:border-b-0 hover:translate-y-[4px] hover:h-[52px] transition-all"
				/>
			</div>
		</div>

		<div class="flex justify-center gap-2 fill-text bg-bg2 px-4 py-3 rounded-full">
			<button class="h-[46px]">
				<Icon name="google" />
			</button>
			<button class="h-[46px]">
				<Icon name="apple" />
			</button>
			<button class="h-[46px]">
				<Icon name="linkedin" />
			</button>
			<button class="h-[46px]">
				<Icon name="github" />
			</button>
			<button class="h-[46px]">
				<Icon name="slack" />
			</button>
			<button class="h-[46px]">
				<Icon name="discord" />
			</button>
		</div>
	</form>
</div>

<footer class="absolute bottom-0 left-1/2 -translate-x-1/2 w-12">
	<a href="https://github.com/mdlsvensson/liddy" class="fill-text"><Icon name="github2" /></a>
</footer>
