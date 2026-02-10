<script lang="ts">
	import SvelteMarkdown from 'svelte-exmarkdown';
	import markdown from '$lib/assets/education.md?raw';
	import markdownFi from '$lib/assets/education-fi.md?raw';
	import LL, { locale } from '$lib/i18n/i18n-svelte';
</script>

<svelte:head>
	<title>{$LL.publications.publications()}</title>
	<meta name="description" content={$LL.publications.description()} />
</svelte:head>

<div class="education">
	{#if $locale == 'en'}
		<SvelteMarkdown md={markdown} />
	{:else}
		<SvelteMarkdown md={markdownFi} />
	{/if}
</div>
