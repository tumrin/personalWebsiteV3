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
			name={$LL.blogs.europe.name()}
			url={$LL.blogs.europe.url()}
			year={2025}
			external={false}
		/>
		<Blog name={$LL.blogs.techChoices.name()} url={$LL.blogs.techChoices.url()} year={2025} />
		<Blog name={$LL.blogs.rust.name()} url={$LL.blogs.rust.url()} year={2024} />
		<Blog name={$LL.blogs.energy.name()} url={$LL.blogs.energy.url()} year={2023} />
	</div>
</div>

<style>
	.blogs {
		display: flex;
		flex-direction: column;
		gap: 1.5rem;
	}
</style>
