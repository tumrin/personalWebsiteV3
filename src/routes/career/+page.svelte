<script lang="ts">
	import SvelteMarkdown from 'svelte-exmarkdown';
	import markdown from '$lib/assets/career.md?raw';
</script>

<svelte:head>
	<title>Career</title>
	<meta name="description" content="Places I have workded at." />
</svelte:head>

<div class="career">
	<SvelteMarkdown md={markdown} />
</div>

<style>
	.career {
		padding: 0 25vw;
	}
</style>
