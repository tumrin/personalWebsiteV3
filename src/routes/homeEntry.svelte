<script lang="ts">
	import SvelteMarkdown from 'svelte-markdown';
	import markdown from '../../content/home.md?raw';
</script>

<div class="prose prose-headings:text-white prose-p: text-white m-8 ">
	<SvelteMarkdown source={markdown} />
</div>
