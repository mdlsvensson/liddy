<script lang="ts">
	import { page } from '$app/stores';
	export let href: string;
</script>

<a
	class="rounded-md hover:bg-fg-shade p-[0.6rem] transition relative group"
	sveltekit:prefetch
	{href}
	class:bg-fg-shade={$page.url.pathname === href}
>
	<slot />
</a>
