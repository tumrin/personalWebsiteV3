import adapter from '@sveltejs/adapter-auto';
import { sveltekit } from '@sveltejs/kit/vite';
import type { UserConfig } from 'vite';

const config: UserConfig = {
	plugins: [
		sveltekit({
			// Consult https://github.com/sveltejs/svelte-preprocess
			// for more information about preprocessors
			extensions: ['.svelte', '.svx', '.md'],
			adapter: adapter(),
			prerender: {
				entries: [
					'/fi',
					'/en',
					'/en/blogs',
					'/en/presentations',
					'/en/projects',
					'/en/publications',
					'/fi/blogs',
					'/fi/presentations',
					'/fi/projects',
					'/fi/publications'
				]
			}
		})
	]
};

export default config;
