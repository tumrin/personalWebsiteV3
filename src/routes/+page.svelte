<script>
	import SvelteMarkdown from 'svelte-exmarkdown';
	import markdown from '$lib/assets/home.md?raw';
</script>

<svelte:head>
	<title>About</title>
	<meta name="description" content="Summary of my education, career and current interests." />
</svelte:head>

<div>
	<SvelteMarkdown md={markdown} />
</div>
