<script lang="ts">
	import Icon from './Icon.svelte';

	const githubURL = 'https://github.com/mdlsvensson/liddy';
</script>

<footer class="absolute bottom-0 left-1/2 -translate-x-1/2 w-12">
	<a href={githubURL} class="fill-text1 hover:fill-text2 transition"><Icon name="github2" /></a>
</footer>
