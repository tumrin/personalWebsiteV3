import type { Reroute } from '@sveltejs/kit';

export const reroute: Reroute = ({ url }) => {
	if (!url.pathname.includes('/en') && !url.pathname.includes('/fi')) {
		let pathname = url.pathname.split('/').filter((s) => s !== '');
		pathname.unshift('/en');
		return pathname.join('/');
	}
};
