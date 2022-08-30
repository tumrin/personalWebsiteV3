<script>
	import '../app.css';
	import CommandLine from './commandLine.svelte';
</script>

<div class="text-white text-shadow font-mono flex flex-col crt">
	<nav class="flex justify-evenly">
		<a href="/">Home</a>
		<a href="/career">Career</a>
		<a href="/settings">Settings</a>
	</nav>

	<div class="flex flex-grow justify-start align-middle m-8">
		<slot />
	</div>
	<CommandLine />
</div>
