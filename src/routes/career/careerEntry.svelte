<script lang="ts">
	import SvelteMarkdown from 'svelte-markdown';
	import { onMount } from 'svelte';
	export let place: string;
	let markdown: string;

	onMount(async () => {
		markdown = (await import(`../../../content/careerEntries/${place}.md?raw`)).default;
	});
</script>

<div class="prose prose-headings:text-white m-8 prose-p: text-white">
	<SvelteMarkdown source={markdown} />
</div>
