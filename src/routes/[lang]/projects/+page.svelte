<script>
	import ProjectEntry from './projectEntry.svelte';
	import { extractFileName } from '$lib/utils';
	import LL, { locale } from '$lib/i18n/i18n-svelte';

	const projects = Object.entries(import.meta.glob('../../../lib/assets/projects/*.md'));
	const projectsFi = Object.entries(import.meta.glob('../../../lib/assets/projects-fi/*.md'));
	const projectsLang = $locale === 'en' ? projects : projectsFi;
	$: sortedProjects = projectsLang
		.map((p) => {
			const name = extractFileName(p[0]);
			return {
				path: p[0],
				name,
				year: parseInt(name.slice(0, 4))
			};
		})
		.sort((a, b) => b.year - a.year);
	$: clientprojects = sortedProjects.filter((p) => p.path.includes('client'));
	$: hobbyprojects = sortedProjects.filter((p) => !p.path.includes('client'));
</script>

<svelte:head>
	<title>{$LL.projects.projects()}</title>
	<meta name="description" content={$LL.projects.description()} />
</svelte:head>

<div class="projectpage">
	<h1>{$LL.projects.client()}</h1>
	<div class="projects">
		{#each clientprojects as entry}
			<ProjectEntry project={entry.name} year={entry.year} />
		{/each}
	</div>
	<h1>{$LL.projects.hobby()}</h1>
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
		margin: 1rem;
		gap: 1.5rem;
	}
</style>
