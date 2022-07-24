<script lang="ts">
	import HLine from '$lib/common/HLine.svelte';
	import NavTooltip from '$lib/nav/NavTooltip.svelte';
	import NavLink from '$lib/nav/NavLink.svelte';
	import Icon from '$lib/common/Icon.svelte';
</script>

<nav class="flex flex-col h-full items-center w-12 gap-2">
	<NavLink href="/">
		<Icon name="dashboard" />
		<NavTooltip bg="yellow">
			<p class="text-bg">Dashboard</p>
		</NavTooltip>
	</NavLink>

	<HLine />

	<NavLink href="/board">
		<Icon name="board" />
		<NavTooltip bg="green2">
			<p class="text-bg">Project</p>
		</NavTooltip>
	</NavLink>

	<NavLink href="/stats">
		<Icon name="stats" />
		<NavTooltip bg="red1">
			<p class="text-bg">Stats</p>
		</NavTooltip>
	</NavLink>

	<HLine />

	<NavLink href="/user">
		<Icon name="user" />
		<NavTooltip bg="blue3">
			<p class="text-bg">Profile</p>
		</NavTooltip>
	</NavLink>
</nav>
