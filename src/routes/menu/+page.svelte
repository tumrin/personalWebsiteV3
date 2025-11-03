<script>
	import { routes } from '$lib/contants';
</script>

<div>
	{#each Object.entries(routes) as [name, path]}
		<a href={path}>{name}</a>
	{/each}
</div>
