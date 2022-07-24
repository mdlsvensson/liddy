<script lang="ts">
	export let bg: string;
</script>

<div
	class="absolute invisible opacity-0 rounded bg-{bg} transition left-16 top-2 px-2 py-1 group-hover:opacity-100 group-hover:visible shadow"
>
	<slot />
</div>
