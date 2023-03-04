<script lang="ts">
	import { onMount } from 'svelte';
	import Socials from './socials.svelte';
	import { DateTime } from 'luxon';
	import { goto } from '$app/navigation';
	import { routes } from '$lib/contants';
	import { faListAlt } from '@fortawesome/free-regular-svg-icons';
	import Fa from 'svelte-fa';

	let time = DateTime.now();
	onMount(() => {
		setInterval(() => {
			time = DateTime.now();
		}, 1000);
	});
</script>

<div class="border-b-2">
	<div class="flex flex-row items-center justify-between ml-1 mr-1">
		<Socials />
		<nav class="hidden flex justify-evenly text-lg gap-10 sm:block">
			{#each Object.entries(routes) as [name, path]}
				<a class="focus:outline-none focus:ring focus:ring-white p-0.5 m-1" href={path}>{name}</a>
			{/each}
		</nav>
		<div class="sm:hidden text-lg flex">
			<button on:click={() => goto('/menu')}
				><span class="text-shadow">
					<Fa size="2x" icon={faListAlt} />
				</span></button
			>
		</div>
		{time.toLocaleString(DateTime.DATETIME_MED_WITH_SECONDS)}
	</div>
</div>
