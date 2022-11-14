<script lang="ts">
	import CareerEntry from './careerEntry.svelte';

	const careerEntries = Object.entries(import.meta.glob('../../lib/assets/careerEntries/*.md'));
</script>

<div>
	<div>
		{#each careerEntries as entry}
			<CareerEntry place={entry[0]} />
		{/each}
	</div>
</div>
