<script lang="ts">
	import Icon from './common/Icon.svelte';
	export let project: any;
</script>

<button
	class="bg-fg rounded-md hover:bg-fg-shade absolute pl-4 pr-1 py-1 right-3 top-3 flex items-center"
	name="card-status"
	id="card-status"
	on:click|preventDefault
>
	<p>Project</p>
	<div class="h-8 w-8 fill-text-fg">
		<Icon name="down" />
	</div>
</button>
