<script lang="ts">
	import SvelteMarkdown from 'svelte-exmarkdown';
	import { onMount } from 'svelte';
	export let place: string;
	let markdown: string;
	onMount(async () => {
		markdown = (await import(`../../lib/assets/careerEntries/${place}.md?raw`)).default;
	});
</script>

<div
	class="prose prose-headings:text-white m-8 prose-p: text-white prose-strong:text-white prose-em:text-white"
>
	<SvelteMarkdown md={markdown} />
</div>
