<script lang="ts">
	import { browser } from '$app/env';
	import { tooltip } from '$lib/stores';

	let tooltipEl: HTMLDivElement;
	let width: number;
	let height: number;

	const onMouseMove = (event: MouseEvent) => {
		if (!tooltip) return;
		tooltipEl.style.left = `${event.pageX}px`;
		tooltipEl.style.top = `${event.pageY}px`;
	};

	if (browser) {
		document.addEventListener('mousemove', onMouseMove);
	}
</script>

<div
	class="absolute top-0 left-0 w-[200px] h-[200px] bg-bg3 z-50 rounded-md border-bg4 border-2 shadow-lg"
	bind:this={tooltipEl}
	bind:clientHeight={height}
	bind:clientWidth={width}
>
	<slot />
</div>
