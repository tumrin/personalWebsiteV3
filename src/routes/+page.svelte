<script>
	import SvelteMarkdown from 'svelte-exmarkdown';
	import markdown from '$lib/assets/home.md?raw';
</script>

<svelte:head>
	<title>About</title>
	<meta name="description" content="Summary of my education, career and current interests." />
</svelte:head>

<div class="about">
	<SvelteMarkdown md={markdown} />
</div>

<style>
	.about {
		padding: 0 25vw;
	}
</style>
