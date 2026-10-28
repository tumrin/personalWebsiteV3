import { setLocale } from '#lib/i18n/i18n-svelte.js';
import { baseLocale } from '#lib/i18n/i18n-util.js';
import { loadLocale } from '#lib/i18n/i18n-util.sync.js';
import type { Locales } from '#lib/i18n/i18n-types.js';
import type { LayoutLoad } from './$types';

export const load: LayoutLoad = ({ url }) => {
	let lang = url.pathname.split('/').filter(Boolean)[0] as Locales;
	if (lang !== 'en' && lang !== 'fi') {
		lang = baseLocale;
	}

	loadLocale(lang);
	setLocale(lang);
};
