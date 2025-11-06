<script lang="ts">
	import SvelteMarkdown from 'svelte-exmarkdown';
	import markdown from '$lib/assets/education.md?raw';
</script>

<svelte:head>
	<title>Education</title>
	<meta name="description" content="Summary of my education and links to my theses." />
</svelte:head>

<div class="education">
	<SvelteMarkdown md={markdown} />
</div>

<style>
	.education {
		padding: 0 25vw;
	}
</style>
