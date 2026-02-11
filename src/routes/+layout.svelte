<script lang="ts">
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
		flex-direction: column;
		height: 80%;
		padding: 0 20vw;
		overflow-y: auto;
	}
	@media screen and (max-width: 800px) {
		.slot {
			padding: 0.5rem;
		}
	}
	.body {
		display: flex;
		flex-direction: column;
		justify-content: space-evenly;
		height: 100%;
	}
</style>
