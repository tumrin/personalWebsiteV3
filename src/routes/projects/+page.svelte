<script>
	import ProjectEntry from './projectEntry.svelte';
	import Fa from 'svelte-fa';
	import { faFolder } from '@fortawesome/free-regular-svg-icons';
	import { extractFileName } from '$lib/utils';

	const projects = Object.entries(import.meta.glob('../../lib/assets/projects/*.md'));
</script>

<div class="text-xl m-10">
	<div class="flex">
		<div class="self-center"><Fa icon={faFolder} /></div>
		<p class="border-b-2">projects</p>
	</div>
	<div class="ml-10 border-l-2 cursor-pointer">
		{#each projects as entry}
			<ProjectEntry project={extractFileName(entry[0])} />
		{/each}
	</div>
</div>
