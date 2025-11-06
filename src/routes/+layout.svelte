<script>
	import '../app.css';
	import Topbar from '$lib/components/topbar.svelte';
	import Socials from '$lib/components/socials.svelte';
</script>

<div class="body">
	<Topbar />
	<main class="slot">
		<slot />
	</main>
	<Socials />
</div>

<style>
	.slot {
		display: flex;
		height: 80%;
		overflow: scroll;
	}
	.body {
		display: flex;
		flex-direction: column;
		justify-content: space-evenly;
		height: 100%;
	}
</style>
