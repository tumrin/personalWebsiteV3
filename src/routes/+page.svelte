<script>
	import SvelteMarkdown from 'svelte-exmarkdown';
	import markdown from '$lib/assets/home.md?raw';
</script>

<div>
	<SvelteMarkdown md={markdown} />
</div>
