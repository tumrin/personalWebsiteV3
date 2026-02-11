import adapter from '@sveltejs/adapter-auto';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	extensions: ['.svelte', '.svx', '.md'],

	kit: {
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
	}
};

export default config;
