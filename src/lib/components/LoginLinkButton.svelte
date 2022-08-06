<script lang="ts">
	import { tooltipToggle } from '$lib/tooltip';

	export let loading: boolean;
	export let buttonText: string;
</script>

<div class="w-full h-14">
	<input
		type="submit"
		value={loading ? 'Loading' : buttonText}
		disabled={loading}
		class="h-full bg-orange rounded-md w-full text-bg1 font-bold text-bg border-orange-dim border-b-4 hover:border-b-0 hover:translate-y-[4px] hover:h-[52px] transition-all cursor-pointer duration-100"
		use:tooltipToggle
		data-tooltip="Login with magic link"
	/>
</div>
