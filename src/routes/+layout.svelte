<script>
	import '../app.css';
	import CommandLine from './commandLine.svelte';
	import { getStores, navigating, page, updated } from '$app/stores';
</script>

<div class="crt">
	<div class="text-white text-shadow font-mono flex flex-col h-screen">
		<nav class="flex justify-evenly text-lg">
			<a href="/">Home</a>
			<a href="/career">Career</a>
			<a href="/projects">Projects</a>
			<a href="/settings">Settings</a>
		</nav>

		<div class="flex flex-grow justify-start align-middle m-8 overflow-scroll">
			<slot />
		</div>
		<CommandLine />
	</div>
</div>
