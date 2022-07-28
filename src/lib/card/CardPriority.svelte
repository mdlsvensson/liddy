<script lang="ts">
	export let priority: number;

	const elements: Array<HTMLButtonElement> = [];
	let mouseOverPriority: number;
	const litElements = [false, false, false];

	const onMouseOver = (event: MouseEvent) => {
		if (event.target instanceof HTMLButtonElement) {
			mouseOverPriority = parseInt(event.target.dataset.priority!);
			render();
		}
	};

	const onMouseOut = (event: MouseEvent) => {
		if (event.target instanceof HTMLButtonElement) {
			mouseOverPriority = 0;
			render();
		}
	};

	const onFocus = (event: FocusEvent) => {
		if (event.target instanceof HTMLButtonElement) {
			mouseOverPriority = parseInt(event.target.dataset.priority!);
			render();
		}
	};

	const onBlur = (event: FocusEvent) => {
		if (event.target instanceof HTMLButtonElement) {
			mouseOverPriority = 0;
			render();
		}
	};

	const render = () => {
		for (let i = 0; i < elements.length; i++) {
			const element = elements[i];
			const lit = litElements[i];
			const priority = parseInt(element.dataset.priority!);
			const isLit = priority <= mouseOverPriority;
			if (lit !== isLit) litElements[i] = isLit;
		}
	};
</script>

<div class="w-full flex justify-center bg-fg-shade rounded-md">
	<div class="h-full flex items-center w-full">
		<button
			data-priority="1"
			class="w-full h-full py-3 pl-3"
			on:click|preventDefault
			on:mouseover|stopPropagation={onMouseOver}
			on:mouseout={onMouseOut}
			on:blur={onBlur}
			on:focus={onFocus}
			bind:this={elements[0]}
		>
			<div
				class:bg-green1={litElements[0]}
				class:bg-green1-dimmer={!litElements[0]}
				class="rounded-l-sm w-full h-full pointer-events-none"
			/>
		</button>
		<button
			data-priority="2"
			class="w-full h-full py-3"
			on:click|preventDefault
			on:mouseover={onMouseOver}
			on:mouseout={onMouseOut}
			on:blur={onBlur}
			on:focus={onFocus}
			bind:this={elements[1]}
		>
			<div
				class:bg-yellow={litElements[1]}
				class:bg-yellow-dimmer={!litElements[1]}
				class="rounded-l-sm w-full h-full pointer-events-none"
			/>
		</button>
		<button
			data-priority="3"
			class="w-full h-full py-3 pr-3"
			on:click|preventDefault
			on:mouseover={onMouseOver}
			on:mouseout={onMouseOut}
			on:blur={onBlur}
			on:focus={onFocus}
			bind:this={elements[2]}
		>
			<div
				class:bg-red1={litElements[2]}
				class:bg-red1-dimmer={!litElements[2]}
				class="rounded-l-sm w-full h-full pointer-events-none"
			/>
		</button>
	</div>
</div>
