<script lang="ts">
	import Icon from './Icon.svelte';

	export let name: string;
</script>

<button class="fill-text1 hover:fill-text2 transition">
	<Icon {name} />
</button>
