<script lang="ts">
	import SvelteMarkdown from 'svelte-markdown';
	import markdown from '$lib/assets/home.md?raw';
</script>

<div
	class="prose prose-headings:text-white m-8 prose-p: text-white prose-strong:text-white prose-em:text-white prose-a:text-white"
>
	<SvelteMarkdown source={markdown} />
</div>
