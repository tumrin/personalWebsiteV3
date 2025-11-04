<script lang="ts">
	import { routes } from '$lib/contants';
	let open = false;
	const toggle = () => (open = !open);
	const closeMenu = () => (open = false);
</script>

<div class="topbar">
	<div class="topbar-inner">
		<button class="hamburger" aria-label="Toggle menu" aria-expanded={open} on:click={toggle}>
			<span class="bar"></span>
			<span class="bar"></span>
			<span class="bar"></span>
		</button>

		<nav class="navbar desktop-nav">
			{#each Object.entries(routes) as [name, path]}
				<a class="navlink" href={path}>{name}</a>
			{/each}
		</nav>
	</div>

	<div class="backdrop" class:open on:click={closeMenu}></div>

	<nav class="navbar side-menu" class:open aria-hidden={!open}>
		{#each Object.entries(routes) as [name, path]}
			<a class="navlink" href={path} on:click={closeMenu}>{name}</a>
		{/each}
	</nav>
</div>

<style>
	.topbar {
		height: 10%;
		display: flex;
		gap: 2rem;
	}
	.topbar-inner {
		width: 100%;
		display: flex;
		align-items: center;
		justify-content: center;
	}
	.navbar {
		display: flex;
		gap: 2rem;
	}
	.side-menu {
		display: none;
	}
	.navlink {
		color: #4c566a;
		background-color: #88c0d0;
		padding: 1rem 1.25rem;
		text-align: center;
		text-decoration: none;
		min-width: 6rem;
		border-radius: 5px;
		transition: background-color 0.15s ease;
	}
	.navlink:hover {
		background-color: #8fbcbb;
	}

	.hamburger {
		display: none;
		background: transparent;
		border: none;
		cursor: pointer;
		padding: 0.5rem;
	}
	.hamburger:focus {
		outline: 2px solid #88c0d0;
		outline-offset: 2px;
	}
	.hamburger .bar {
		display: block;
		width: 22px;
		height: 2px;
		background: #88c0d0;
		margin: 4px 0;
		border-radius: 2px;
	}

	.backdrop {
		display: none;
		position: fixed;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		background: rgba(0, 0, 0, 0.4);
		opacity: 0;
		transition: opacity 200ms ease;
		pointer-events: none;
		z-index: 1;
	}
	.backdrop.open {
		display: block;
		opacity: 1;
		pointer-events: auto;
	}

	@media (max-width: 640px) {
		.topbar {
			height: auto;
			padding: 0.5rem 0;
		}
		.topbar-inner {
			justify-content: space-between;
		}
		.hamburger {
			display: block;
		}
		.desktop-nav {
			display: none;
		}
		.side-menu {
			display: flex;
			flex-direction: column;
			gap: 0.5rem;
			padding: 1rem;
			position: fixed;
			top: 0;
			left: 0;
			height: 100vh;
			width: 50%;
			background: #3b4252;
			transform: translateX(-100%);
			transition: transform 220ms cubic-bezier(0.2, 0.8, 0.2, 1);
			z-index: 2;
		}
		.side-menu.open {
			transform: translateX(0);
		}
		.navlink {
			width: 100%;
			padding: 0.75rem 0.25rem;
			border-radius: 6px;
			text-align: left;
			color: #eceff4;
			background: transparent;
		}
		.navlink:hover {
			background: rgba(255, 255, 255, 0.04);
		}
	}
</style>
