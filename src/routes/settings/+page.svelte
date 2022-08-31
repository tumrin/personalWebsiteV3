<script>
	import Toggle from './toggle.svelte';
</script>

<div class="flex flex-grow flex-col">
	<div class="flex justify-evenly flex-col">
		<div class="flex justify-center">!!These don't work yet!!</div>

		<div class="flex flex-row justify-around m-1">
			<p>text color</p>
			<Toggle />
		</div>
		<div class="flex flex-row justify-around m-1">
			<p>background color</p>
			<Toggle />
		</div>
		<div class="flex flex-row justify-around m-1">
			<p>crt effect</p>
			<Toggle />
		</div>
	</div>
</div>
