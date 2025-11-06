<script lang="ts">
	export let name: string;
	export let url: string;
	export let language: string;
</script>

<a class="blogEntry" href={url}>{name} (in {language})</a>

<style>
	.blogEntry {
		background-color: #4c566a;
		padding: 2rem;
		border-radius: 5px;
	}
</style>
