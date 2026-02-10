import { setLocale } from '$lib/i18n/i18n-svelte';
import { baseLocale } from '$lib/i18n/i18n-util';
import { loadLocale } from '$lib/i18n/i18n-util.sync';
import type { Locales } from '$lib/i18n/i18n-types';
import type { LayoutLoad } from './$types';

export const prerender = true;

export const load: LayoutLoad = ({ url }) => {
	let lang = url.pathname.split('/').filter(Boolean)[0] as Locales;
	if (lang !== 'en' && lang !== 'fi') {
		lang = baseLocale;
	}

	loadLocale(lang);
	setLocale(lang);
};
