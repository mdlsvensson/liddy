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
	<footer class="absolute bottom-4 left-1/2 -translate-x-1/2">
		<a href="https://github.com/mdlsvensson/liddy" class="fill-text"><Icon name="github" /></a>
	</footer>
	<form class="w-[350px] flex flex-col gap-4 on:submit|preventDefault={handleLogin}">
		<input
			class="pb-4 px-6 pt-[17px] w-full bg-bg2 rounded-md hover:ring-2 ring-bg3"
			type="email"
			placeholder="Your email"
			bind:value={email}
		/>

		<div class="w-full h-14">
			<input
				type="submit"
				value={loading ? 'Loading' : 'Send login link'}
				disabled={loading}
				class="h-full bg-orange rounded-md w-full text-bg1 font-bold text-bg border-orange-dim border-b-4 hover:border-b-0 hover:translate-y-[4px] hover:h-[52px] transition-all"
			/>
		</div>
	</form>
</div>
<!-- 
	$bg: #fff;
	$text: #382b22;
	$light-pink: #fff0f0;
	$pink: #ffe9e9;
	$dark-pink: #f9c4d2;
	$pink-border: #b18597;
	$pink-shadow: #ffe3e2;

	* {
		box-sizing: border-box;
		&::before,
		&::after {
			box-sizing: border-box;
		}
	}

	body {
		font-family: 'Rubik', sans-serif;
		font-size: 1rem;
		line-height: 1.5;
		display: flex;
		align-items: center;
		justify-content: center;
		margin: 0;
		min-height: 100vh;
		background: $bg;
	}

	button {
		position: relative;
		display: inline-block;
		cursor: pointer;
		outline: none;
		border: 0;
		vertical-align: middle;
		text-decoration: none;
		font-size: inherit;
		font-family: inherit;
		&.learn-more {
			font-weight: 600;
			color: $text;
			text-transform: uppercase;
			padding: 1.25em 2em;
			background: $light-pink;
			border: 2px solid $pink-border;
			border-radius: 0.75em;
			transform-style: preserve-3d;
			transition: transform 150ms cubic-bezier(0, 0, 0.58, 1),
				background 150ms cubic-bezier(0, 0, 0.58, 1);
			&::before {
				position: absolute;
				content: '';
				width: 100%;
				height: 100%;
				top: 0;
				left: 0;
				right: 0;
				bottom: 0;
				background: $dark-pink;
				border-radius: inherit;
				box-shadow: 0 0 0 2px $pink-border, 0 0.625em 0 0 $pink-shadow;
				transform: translate3d(0, 0.75em, -1em);
				transition: transform 150ms cubic-bezier(0, 0, 0.58, 1),
					box-shadow 150ms cubic-bezier(0, 0, 0.58, 1);
			}
			&:hover {
				background: $pink;
				transform: translate(0, 0.25em);
				&::before {
					box-shadow: 0 0 0 2px $pink-border, 0 0.5em 0 0 $pink-shadow;
					transform: translate3d(0, 0.5em, -1em);
				}
			}
			&:active {
				background: $pink;
				transform: translate(0em, 0.75em);
				&::before {
					box-shadow: 0 0 0 2px $pink-border, 0 0 $pink-shadow;
					transform: translate3d(0, 0, -1em);
				}
			}
		}
	}
 -->
