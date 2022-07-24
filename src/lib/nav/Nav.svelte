<script lang="ts">
	import HLine from '$lib/common/HLine.svelte';
	import NavTooltip from '$lib/nav/NavTooltip.svelte';
	import NavLink from '$lib/nav/NavLink.svelte';
	import Icon from '$lib/common/Icon.svelte';
</script>

<nav class="flex flex-col h-full items-center w-12 gap-2">
	<NavLink href="/" padding="p-[0.6rem]">
		<Icon name="dashboard" />
		<NavTooltip color="bg-yellow">
			<p class="text-bg">Dashboard</p>
		</NavTooltip>
	</NavLink>

	<HLine />

	<NavLink href="/board" padding="p-[0.4rem]">
		<Icon name="board" />
		<NavTooltip color="bg-green2">
			<p class="text-bg">Project</p>
		</NavTooltip>
	</NavLink>

	<NavLink href="/stats" padding="p-[0.7rem]">
		<Icon name="stats" />
		<NavTooltip color="bg-red1">
			<p class="text-bg">Stats</p>
		</NavTooltip>
	</NavLink>

	<HLine />

	<NavLink href="/user" padding="p-[0.6rem]">
		<Icon name="user" />
		<NavTooltip color="bg-blue3">
			<p class="text-bg">Profile</p>
		</NavTooltip>
	</NavLink>
</nav>
