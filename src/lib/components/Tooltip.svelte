<script lang="ts">
	import { browser } from '$app/env';
	import { tooltip } from '$lib/stores';

	let tooltipEl: HTMLDivElement;
	let width: number;
	let height: number;

	const onMouseMove = (event: MouseEvent) => {
		if (!tooltipEl) return;

		const offset = 15;

		const isOutsideView = isTooltipOutside(event, offset);

		let offsetTop: number = isOutsideView ? -offset - height : offset;
		let offsetLeft: number = isOutsideView ? -offset - width : offset;

		tooltipEl.style.top = `${event.pageY + offsetTop}px`;
		tooltipEl.style.left = `${event.pageX + offsetLeft}px`;
	};

	const isTooltipOutside = (event: MouseEvent, offset: number): boolean => {
		const margin = 5;

		const isOutsideView = {
			bottom: event.pageY + (offset + margin) + height > window.innerHeight,
			right: event.pageX + (offset + margin) + width > window.innerWidth,
		};

		if (isOutsideView.bottom || isOutsideView.right) return true;
		return false;
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
