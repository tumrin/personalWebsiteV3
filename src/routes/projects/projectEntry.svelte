<script lang="ts">
	import SvelteMarkdown from 'svelte-exmarkdown';
	import { onMount } from 'svelte';
	export let project: string;
	let markdown: string;

	onMount(async () => {
		markdown = (await import(`../../lib/assets/projects/${project}.md?raw`)).default;
	});
</script>

<div class="project">
	<SvelteMarkdown md={markdown} />
</div>

<style>
	.project {
		width: 30%;
		padding: 0 1rem;
		background-color: #4c566a;
		border-radius: 5px;
	}
	@media (max-width: 840px) {
		.project {
			width: 90%;
		}
	}
</style>
