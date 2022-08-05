<script lang="ts">
	import Icon from './Icon.svelte';
	import { tooltipToggle } from '$lib/tooltip';
	import { capitalize } from '$lib/common';

	export let name: string;
</script>

<button
	class="fill-text1 hover:fill-text2 transition"
	use:tooltipToggle
	data-tooltip={capitalize(name)}
>
	<Icon {name} />
</button>
