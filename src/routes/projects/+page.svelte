<script>
	import ProjectEntry from './projectEntry.svelte';
	import Fa from 'svelte-fa';
	import { faFolder } from '@fortawesome/free-regular-svg-icons';
</script>

<div class="text-xl m-10">
	<div class="flex">
		<div class="self-center"><Fa icon={faFolder} /></div>
		<p class="border-b-2">projects</p>
	</div>
	<div class="ml-10 border-l-2 cursor-pointer">
		<ProjectEntry project={'djferris'} />
		<ProjectEntry project={'fullstackopen'} />
		<ProjectEntry project={'personalwebsite'} />
		<ProjectEntry project={'sodexowebhook'} />
		<ProjectEntry project={'unicabot'} />
	</div>
</div>
