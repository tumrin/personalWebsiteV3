<script>
	import '../app.css';
	import CommandLine from '../components/commandLine.svelte';
	import Topbar from '../components/topbar.svelte';
</script>

<div class="crt">
	<div class="text-white text-shadow font-mono flex flex-col h-screen">
		<Topbar />
		<div class="flex flex-grow justify-start align-middle m-8 overflow-y-auto overflow-x-clip">
			<slot />
		</div>
		<CommandLine />
	</div>
</div>
