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
		padding: 0 2rem;
		height: 80%;
	}
	.body {
		display: flex;
		flex-direction: column;
		justify-content: space-evenly;
		height: 100%;
	}
</style>
