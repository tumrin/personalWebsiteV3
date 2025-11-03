<script>
	import ProjectEntry from './projectEntry.svelte';
	import { extractFileName } from '$lib/utils';

	const projects = Object.entries(import.meta.glob('../../lib/assets/projects/*.md'));
</script>

<svelte:head>
	<title>Projects</title>
	<meta
		name="description"
		content="Personal and professional projects I have been part of during my career."
	/>
</svelte:head>

<div class="projects">
	{#each projects as entry}
		<ProjectEntry project={extractFileName(entry[0])} />
	{/each}
</div>

<style>
	.projects {
		display: flex;
		justify-content: center;
		flex-wrap: wrap;
		gap: 1rem;
		overflow-y: scroll;
	}
</style>
