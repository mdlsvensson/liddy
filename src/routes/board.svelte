<script lang="ts">
	import Col from '$lib/board/Col.svelte';
</script>

<div class="h-full flex gap-6">
	<Col title="Backlog" />
	<Col title="Unassigned" />
	<Col title="In Progress" />
	<Col title="Testing" />
	<Col title="Done" />
</div>
