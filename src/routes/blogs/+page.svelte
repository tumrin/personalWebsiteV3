<script>
	import Blog from './blog.svelte';
</script>

<svelte:head>
	<title>Blogs</title>
	<meta name="description" content="Blogs I have written, both personal and professional." />
</svelte:head>

<div class="blogs">
	<h1>Personal Blogs</h1>
	<h1>Professional Blogs</h1>
	<Blog
		name="European Services and Digital Sovereignty"
		url="https://kvanttori.fi/en/blogi/eurooppalaiset-palvelut"
	/>
	<Blog
		name="Technology Choices in Software Projects and Tools"
		url="https://kvanttori.fi/en/blogi/teknologiavalinnat"
	/>
	<Blog name="Unsafe Rust" url="https://kvanttori.fi/en/blogi/unsafe-rust" />
	<Blog
		name="Introduction to Energy Efficiency of Software"
		url=" https://kvanttori.fi/en/blogi/johdatus-ohjelmien-energiatehokkuuteen"
	/>
</div>

<style>
	.blogs {
		display: flex;
		flex-direction: column;
		gap: 1rem;
	}
</style>
