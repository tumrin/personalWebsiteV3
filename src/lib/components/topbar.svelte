<script lang="ts">
	import { onMount } from 'svelte';
	import Socials from './socials.svelte';
	import { DateTime } from 'luxon';

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
		<nav class="flex justify-evenly text-lg gap-10">
			<a class="focus:outline-none focus:ring focus:ring-white p-0.5 m-1" href="/">Home</a>
			<a class="focus:outline-none focus:ring focus:ring-white p-0.5 m-1" href="/career">Career</a>
			<a class="focus:outline-none focus:ring focus:ring-white p-0.5 m-1" href="/projects"
				>Projects</a
			>
			<a class="focus:outline-none focus:ring focus:ring-white p-0.5 m-1" href="/settings"
				>Settings</a
			>
		</nav>
		{time.toLocaleString(DateTime.DATETIME_MED_WITH_SECONDS)}
	</div>
</div>
