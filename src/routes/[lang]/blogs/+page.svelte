<script>
	import LL from '$lib/i18n/i18n-svelte';
	import Blog from './blog.svelte';
</script>

<svelte:head>
	<title>{$LL.blogs.blogs()}</title>
	<meta name="description" content={$LL.blogs.description()} />
</svelte:head>

<div class="blogspage">
	<div class="blogs">
		<Blog
			name="European Services and Digital Sovereignty"
			url="https://kvanttori.fi/en/blogi/eurooppalaiset-palvelut"
			year={2025}
		/>
		<Blog
			name="Technology Choices in Software Projects and Tools"
			url="https://kvanttori.fi/en/blogi/teknologiavalinnat"
			year={2025}
		/>
		<Blog name="Unsafe Rust" url="https://kvanttori.fi/en/blogi/unsafe-rust" year={2024} />
		<Blog
			name="Introduction to Energy Efficiency of Software"
			url=" https://kvanttori.fi/en/blogi/johdatus-ohjelmien-energiatehokkuuteen"
			year={2023}
		/>
	</div>
</div>

<style>
	.blogs {
		display: flex;
		flex-direction: column;
		gap: 1.5rem;
	}
</style>
