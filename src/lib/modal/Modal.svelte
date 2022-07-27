<script lang="ts">
	import { modal } from '$lib/store';
	import { clickOutside } from '$lib/util/clickOutside';
	import ModalContent from './ModalContent.svelte';

	const handleClickOutside = () => {
		$modal.isVisible = false;
	};
</script>

<div
	class="opacity-0 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-fg dim rounded-lg"
	class:opacity-100={$modal.isVisible}
	use:clickOutside
	on:click_outside={handleClickOutside}
>
	<ModalContent type={$modal.type} data={$modal.data} />
</div>
