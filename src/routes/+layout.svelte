<script>
	import '../app.css';
	import CommandLine from './commandLine.svelte';
	import { getStores, navigating, page, updated } from '$app/stores';
</script>

<div class="crt">
	<div class="text-white text-shadow font-mono flex flex-col h-screen">
		<nav class="flex justify-evenly text-lg">
			<a class="focus:outline-none focus:ring focus:ring-white" href="/">Home</a>
			<a class="focus:outline-none focus:ring focus:ring-white" href="/career">Career</a>
			<a class="focus:outline-none focus:ring focus:ring-white" href="/projects">Projects</a>
			<a class="focus:outline-none focus:ring focus:ring-white" href="/settings">Settings</a>
		</nav>

		<div class="flex flex-grow justify-start align-middle m-8 overflow-scroll">
			<slot />
		</div>
		<CommandLine />
	</div>
</div>
