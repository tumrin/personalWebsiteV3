<script lang="ts">
	import SvelteMarkdown from 'svelte-exmarkdown';
	import { onMount } from 'svelte';
	export let project: string;
	export let year: number;
	let markdown: string | null = null;
	let expanded = false;
	const contentId = `content-${project.replace(/[^a-z0-9_-]/gi, '')}`;

	onMount(async () => {
		markdown = (await import(`../../lib/assets/projects/${project}.md?raw`)).default;
	});
	async function toggle() {
		expanded = !expanded;
	}
</script>

<div class="project">
	<button class="header" on:click={toggle} aria-expanded={expanded} aria-controls={contentId}>
		<span class="title"><span class="year">{year}</span> - {markdown?.split('\n')[0].replaceAll('#', '')}</span>
		<svg class="arrow" width="20" height="20" viewBox="0 0 24 24" aria-hidden="true">
			<path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6z" fill="currentColor" />
		</svg>
	</button>

	{#if expanded}
		<div id={contentId} class="content">
			{#if markdown}
				<SvelteMarkdown md={markdown} />
			{:else}
				<p>Loading…</p>
			{/if}
		</div>
	{/if}
</div>

<style>
	.project {
		width: 100%;
	}

	.header {
		display: flex;
		align-items: center;
		justify-content: space-between;
		width: 100%;
		padding: 1rem;
		background-color: #4c566a;
		border: none;
		border-radius: 5px;
		color: white;
		cursor: pointer;
	}

	.header:focus {
		outline: 2px solid #88c0d0;
		outline-offset: 2px;
	}

	.title {
		text-align: left;
		white-space: nowrap;
		overflow: hidden;
	}

	.year {
		font-weight: bold;
		color: #88c0d0;
	}

	.arrow {
		transition: transform 200ms ease;
		color: #d8dee9;
	}

	:global(.header[aria-expanded='true']) .arrow {
		transform: rotate(90deg);
	}

	.content {
		padding: 1rem;
		margin-top: 0.5rem;
		background-color: #4c566a;
		border-radius: 5px;
	}
</style>
