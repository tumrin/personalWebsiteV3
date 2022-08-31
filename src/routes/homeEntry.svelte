<script lang="ts">
	import SvelteMarkdown from 'svelte-markdown';
	import markdown from '../../content/home.md?raw';
</script>

<div
	class="prose prose-headings:text-white m-8 prose-p: text-white prose-strong:text-white prose-em:text-white"
>
	<SvelteMarkdown source={markdown} />
</div>
