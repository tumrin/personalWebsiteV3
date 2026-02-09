<script>
	import ProjectEntry from './projectEntry.svelte';
	import { extractFileName } from '$lib/utils';

	const projects = Object.entries(import.meta.glob('../../lib/assets/projects/*.md'));
	const sortedProjects = projects
		.map((p) => {
			const name = extractFileName(p[0]);
			return {
				path: p[0],
				name,
				year: parseInt(name.slice(0, 4))
			};
		})
		.sort((a, b) => b.year - a.year);
	const clientprojects = sortedProjects.filter((p) => p.path.includes('client'));
	const hobbyprojects = sortedProjects.filter((p) => !p.path.includes('client'));
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
			<ProjectEntry project={entry.name} year={entry.year} />
		{/each}
	</div>
	<h1>Hobby projects</h1>
	<div class="projects">
		{#each hobbyprojects as entry}
			<ProjectEntry project={entry.name} year={entry.year} />
		{/each}
	</div>
</div>

<style>
	.projectpage {
		display: flex;
		flex-direction: column;
		overflow-y: scroll;
	}
	.projects {
		display: flex;
		justify-content: center;
		flex-wrap: wrap;
		gap: 1.5rem;
	}
</style>
