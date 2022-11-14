<script lang="ts">
	import Fa from 'svelte-fa';
	import { faFile } from '@fortawesome/free-regular-svg-icons';
	import SvelteMarkdown from 'svelte-markdown';
	import { onMount } from 'svelte';
	export let project: string;
	let markdown: string;
	let collapsed = true;

	const projectName = project.split('/').slice(-1)[0].split('.')[0];

	onMount(async () => {
		markdown = (await import(project.concat('?raw'))).default;
	});
</script>

<div class={!collapsed ? 'border-b-2 ' : 'max-w-fit'}>
	<p
		class=" flex pl-1 {collapsed ? 'max-w-fit border-b-2 ' : 'max-w-none'}"
		on:click={() => (collapsed = !collapsed)}
	>
		<Fa class="self-center pr-1" icon={faFile} />{projectName}
	</p>
	{#if !collapsed}
		<div
			class="prose prose-headings:text-white m-8 prose-p: text-white prose-strong:text-white prose-em:text-white prose-a:text-white"
		>
			<SvelteMarkdown source={markdown} />
		</div>
	{/if}
</div>
