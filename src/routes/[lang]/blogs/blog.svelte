<script lang="ts">
	export let name: string;
	export let url: string;
</script>

<a class="blogEntry" href={url}>{name}</a>

<style>
	.blogEntry {
		background-color: #3b4252;
		padding: 2rem;
		border-radius: 5px;
	}
</style>
