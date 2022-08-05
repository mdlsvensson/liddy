<script lang="ts">
	export let isError: boolean;
	export let errorText: string;
</script>

<div
	class="absolute top-[50px] w-full text-sm flex justify-center opacity-0 transition duration-500"
	class:opacity-100={isError}
>
	<p>{errorText}</p>
</div>
