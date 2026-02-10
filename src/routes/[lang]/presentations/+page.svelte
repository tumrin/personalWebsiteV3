<script>
	import LL from '$lib/i18n/i18n-svelte';
</script>

<svelte:head>
	<title>{$LL.presentations.presentations()}</title>
	<meta name="description" content={$LL.presentations.descriptions()} />
</svelte:head>

<div class="presentation">
	<h1>Ympäristö OK</h1>
	<iframe
		class="player"
		src="https://www.youtube.com/embed/V-2WExfdHP4?si=S-MBNp1CsM8TR-DY"
		title="YouTube video player"
		frameborder="0"
		allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
		referrerpolicy="strict-origin-when-cross-origin"
		allowfullscreen
	></iframe>
	<h1>GreenICT Tour</h1>
	<iframe
		class="player"
		src="https://www.youtube.com/embed/iwGVfuCTSt4?si=uYroeE0G8QmObb5m"
		title="YouTube video player"
		frameborder="0"
		allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
		referrerpolicy="strict-origin-when-cross-origin"
		allowfullscreen
	></iframe>
</div>

<style>
	.presentation {
		width: 100%;
		display: flex;
		flex-direction: column;
	}
	.player {
		border-radius: 5px;
		border: #88c0d0 solid 2px;
		width: 600px;
		height: 300px;
	}
	@media (max-width: 1240px) {
		.player {
			width: 100%;
		}
	}
</style>
