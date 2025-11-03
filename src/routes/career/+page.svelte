<script lang="ts">
	import SvelteMarkdown from 'svelte-exmarkdown';
	import markdown from '$lib/assets/career.md?raw';
</script>

<svelte:head>
	<title>Career</title>
	<meta name="description" content="Places I have workded at." />
</svelte:head>

<div>
	<SvelteMarkdown md={markdown} />
</div>
