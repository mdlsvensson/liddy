<script lang="ts">
	import { browser } from '$app/env';
	import { tooltip } from '$lib/stores';

	let tooltipEl: HTMLDivElement;
	let width: number;
	let height: number;

	const onMouseMove = (event: MouseEvent) => {
		if (!tooltipEl) return;
		tooltipEl.style.left = `${event.pageX + 15}px`;
		tooltipEl.style.top = `${event.pageY + 15}px`;
	};

	if (browser) {
		document.addEventListener('mousemove', onMouseMove);
	}
</script>

<div
	class="absolute top-0 left-0 max-w-[500px] bg-bg3 z-50 rounded-md border-bg4 border-2 shadow pointer-events-none px-2 py-1 text-text1 text-sm opacity-0 transition duration-100"
	bind:this={tooltipEl}
	bind:clientHeight={height}
	bind:clientWidth={width}
	class:opacity-100={$tooltip.isVisible}
>
	{$tooltip.text}
</div>
