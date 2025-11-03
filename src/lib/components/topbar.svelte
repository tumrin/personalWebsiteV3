<script lang="ts">
	import { routes } from '$lib/contants';
</script>

<div class="topbar">
	<nav class="navbar">
		{#each Object.entries(routes) as [name, path]}
			<a class="navlink" href={path}>{name}</a>
		{/each}
	</nav>
</div>

<style>
	.topbar {
		height: 10%;
		display: flex;
		flex-direction: column;
		gap: 2rem;
		justify-content: center;
		align-items: center;
	}
	.navbar {
		display: flex;
		gap: 2rem;
	}
	.navlink {
		color: #4c566a;
		background-color: #88c0d0;
		padding: 2rem;
		text-align: center;
		text-decoration: none;
		width: 7rem;
		border-radius: 5px;
		&:hover {
			background-color: #8fbcbb;
		}
	}
</style>
