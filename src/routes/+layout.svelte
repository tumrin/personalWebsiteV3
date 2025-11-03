<script>
	import '../app.css';
	import Topbar from '$lib/components/topbar.svelte';
	import Socials from '$lib/components/socials.svelte';
</script>

<div class="body">
	<Topbar />
	<div class="slot">
		<slot />
	</div>
	<Socials />
</div>

<style>
	.slot {
		display: flex;
		justify-content: center;
		padding: 0 2rem;
		height: 80%;
	}
	.body {
		display: flex;
		flex-direction: column;
		justify-content: space-around;
		height: 100%;
	}
</style>
