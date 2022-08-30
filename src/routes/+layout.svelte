<script>
	import '../app.css';
</script>

<div class="text-white text-shadow font-mono crt">
	<nav class="flex justify-evenly">
		<a href="/">Home</a>
		<a href="/career">Career</a>
		<a href="/settings">Settings</a>
	</nav>

	<div class="flex justify-start align-middle m-8">
		<slot />
	</div>
</div>
