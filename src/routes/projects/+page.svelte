<script>
	import ProjectEntry from './projectEntry.svelte';
	import { extractFileName } from '$lib/utils';

	const projects = Object.entries(import.meta.glob('../../lib/assets/projects/*.md'));
	const clientprojects = projects.filter((p) => p[0].includes('client'));
	const hobbyprojects = projects.filter((p) => !p[0].includes('client'));
</script>

<svelte:head>
	<title>Projects</title>
	<meta
		name="description"
		content="Personal and professional projects I have been part of during my career."
	/>
</svelte:head>

<div class="projectpage">
	<h1>Client projects</h1>
	<div class="projects">
		{#each clientprojects as entry}
			<ProjectEntry project={extractFileName(entry[0])} />
		{/each}
	</div>
	<h1>Hobby projects</h1>
	<div class="projects">
		{#each hobbyprojects as entry}
			<ProjectEntry project={extractFileName(entry[0])} />
		{/each}
	</div>
</div>

<style>
	.projectpage {
		display: flex;
		flex-direction: column;
		align-items: center;
	}
	.projects {
		display: flex;
		justify-content: center;
		flex-wrap: wrap;
		gap: 1rem;
		overflow-y: scroll;
		height: 50%;
	}
</style>
