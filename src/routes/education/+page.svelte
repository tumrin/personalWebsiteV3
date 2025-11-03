<script lang="ts">
	import SvelteMarkdown from 'svelte-exmarkdown';
	import markdown from '$lib/assets/education.md?raw';
</script>

<div>
	<SvelteMarkdown md={markdown} />
</div>
