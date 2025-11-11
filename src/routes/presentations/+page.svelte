<svelte:head>
	<title>Presentations</title>
	<meta name="description" content="Presentations I have given." />
</svelte:head>

<div class="presentation">
	<h1>GreenICT Tour (In Finnish)</h1>
	<iframe
		class="player"
		src="https://www.youtube.com/embed/iwGVfuCTSt4?si=uYroeE0G8QmObb5m"
		title="YouTube video player"
		frameborder="0"
		allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
		referrerpolicy="strict-origin-when-cross-origin"
		allowfullscreen
	></iframe>
	<h1>Ympäristö OK</h1>
	<a
		href="https://docs.google.com/presentation/d/1yatbtO7-xS9hz2npVrzAO2TJn48zXBLHSFCFouk7rII/edit?usp=sharing"
	>
		Presentation
	</a>
</div>

<style>
	.presentation {
		width: 100%;
		display: flex;
		flex-direction: column;
		align-items: center;
	}
	.player {
		border-radius: 5px;
		border: #88c0d0 solid 2px;
		width: 600px;
		height: 300px;
	}
	@media (max-width: 840px) {
		.player {
			width: 90vw;
		}
	}
</style>
