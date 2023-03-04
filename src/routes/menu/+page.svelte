<script>
	import { routes } from '$lib/contants';
</script>

<div class="flex flex-col grow items-center justify-center text-3xl">
	{#each Object.entries(routes) as [name, path]}
		<a class="m-8 focus:outline-none focus:ring focus:ring-white" href={path}>{name}</a>
	{/each}
</div>
