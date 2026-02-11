<script lang="ts">
	import { routes, routesFi } from '$lib/contants';
	import { locales, baseLocale } from '$lib/i18n/i18n-util';
	import { loadLocale } from '$lib/i18n/i18n-util.sync';
	import { locale, setLocale } from '$lib/i18n/i18n-svelte';
	import { onMount } from 'svelte';
	import type { Locales } from '$lib/i18n/i18n-types';
	import { page } from '$app/stores';
	import { goto } from '$app/navigation';
	import { get } from 'svelte/store';

	let open = false;
	$: route = $locale == 'en' ? routes : routesFi;
	const toggle = () => (open = !open);
	const closeMenu = () => (open = false);

	const switchLang = (lang: Locales) => {
		const url = get(page).url;
		const segments = url.pathname.split('/').filter(Boolean);
		let rest = segments;
		if (segments.length > 0 && (segments[0] === 'en' || segments[0] === 'fi')) {
			rest = segments.slice(1);
		}
		const restPath = rest.length ? `/${rest.join('/')}` : '';
		const newPath = `/${lang}${restPath}${url.search}${url.hash}`;

		localStorage.setItem('preferredLocale', lang);

		loadLocale(lang);
		setLocale(lang);
		goto(newPath);
		open = false;
	};

	onMount(() => {
		try {
			const pref = localStorage.getItem('preferredLocale') as Locales | null;
			if (!pref) return;

			const url = get(page).url;
			const segments = url.pathname.split('/').filter(Boolean);

			// If current path has no locale segment or is the baseLocale and
			// the stored preference differs, navigate to the preferred locale.
			if (segments.length === 0 || (segments[0] === baseLocale && pref !== baseLocale)) {
				if (pref !== get(locale)) {
					switchLang(pref);
				}
			}
		} catch (e) {
			// ignore localStorage errors
		}
	});
</script>

<div class="topbar">
	<button class="hamburger" aria-label="Toggle menu" aria-expanded={open} on:click={toggle}>
		<span class="bar"></span>
		<span class="bar"></span>
		<span class="bar"></span>
	</button>

	<nav class="navbar desktop-nav">
		{#each Object.entries(route) as [name, path]}
			<a class="navlink" href={path}>{name}</a>
		{/each}
	</nav>

	<div class="lang-switcher">
		{#each locales as l}
			<button class="lang-btn" on:click={() => switchLang(l)} aria-pressed={$locale === l}>
				{l.toUpperCase()}
			</button>
		{/each}
	</div>

	<div class="backdrop" class:open on:click={closeMenu}></div>

	<nav class="navbar side-menu" class:open>
		{#each Object.entries(route) as [name, path]}
			<a class="navlink" href={path} on:click={closeMenu}>{name}</a>
		{/each}

		<div class="mobile-lang">
			{#each locales as l}
				<button
					class="navlink lang-btn"
					on:click={() => switchLang(l)}
					aria-pressed={$locale === l}
				>
					{l.toUpperCase()}
				</button>
			{/each}
		</div>
	</nav>
</div>

<style>
	.topbar {
		height: 10%;
		display: flex;
		gap: 2rem;
		align-items: center;
		justify-content: space-around;
		font-weight: bolder;
	}
	.navbar {
		display: flex;
		gap: 2rem;
	}
	.side-menu {
		display: none;
	}
	.navlink {
		color: #2e3440;
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

	.lang-switcher {
		display: flex;
		gap: 0.5rem;
		align-items: center;
		position: absolute;
		right: 2rem;
	}
	.lang-btn {
		background: transparent;
		border: 1px solid #88c0d0;
		color: #4c566a;
		padding: 0.5rem 0.75rem;
		border-radius: 6px;
		cursor: pointer;
		font-weight: bolder;
	}
	.lang-btn[aria-pressed='true'] {
		background: #88c0d0;
		color: #fff;
		border-color: #88c0d0;
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

	@media (max-width: 1240px) {
		.topbar {
			display: flex;
			justify-content: flex-end;
			height: auto;
			padding: 0.5rem 0;
		}
		.hamburger {
			justify-self: flex-start;
			display: inline-block;
			margin-right: 2rem;
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

		.lang-switcher {
			display: none;
		}
		.mobile-lang {
			margin-top: 1rem;
			display: flex;
			gap: 0.5rem;
			flex-direction: column;
		}
	}
</style>
