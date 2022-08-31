<script>
	import Toggle from './toggle.svelte';
</script>

<div class="flex flex-grow flex-col">
	<div class="flex justify-evenly flex-col">
		<div class="flex flex-row justify-around">
			<p>text color</p>
			<Toggle />
		</div>
		<div class="flex flex-row justify-around">
			<p>background color</p>
			<Toggle />
		</div>
		<div class="flex flex-row justify-around">
			<p>crt effect</p>
			<Toggle />
		</div>
	</div>
</div>
