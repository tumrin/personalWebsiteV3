<script>
	import LL from '$lib/i18n/i18n-svelte';
	import Publication from './publication.svelte';
</script>

<svelte:head>
	<title>{$LL.publications.publications()}</title>
	<meta name="description" content={$LL.publications.description()} />
</svelte:head>

<div class="publicationspage">
	<div class="publications">
		<Publication
			name="Adapting Sustainable Software Development Methods Into Agile Processes"
			url="https://urn.fi/URN:NBN:fi-fe20241216103073"
			year={2024}
		/>
		<Publication
			name="Rustin soveltuvuus C ja C++ -kielien korvaajaksi korkeaa suorituskykyä vaativille sovelluksille"
			url="https://github.com/tumrin/Kanditaatintutkielma"
			year={2022}
		/>
	</div>
</div>

<style>
	.publications {
		display: flex;
		flex-direction: column;
		gap: 1.5rem;
	}
</style>
