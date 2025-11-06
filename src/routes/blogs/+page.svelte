<script>
	import Blog from './blog.svelte';
</script>

<div class="blogs">
	<h1>Personal Blogs</h1>
	<h1>Professional Blogs</h1>
	<Blog name="Unsafe Rust" language="Finnish" url="https://kvanttori.fi/blogi/unsafe-rust" />
	<Blog
		name="Introduction to Energy Efficiency of Software"
		language="Finnish"
		url=" https://kvanttori.fi/blogi/johdatus-ohjelmien-energiatehokkuuteen"
	/>
</div>

<style>
	.blogs {
		padding: 0 25vw;
		display: flex;
		flex-direction: column;
		gap: 1rem;
	}
</style>
