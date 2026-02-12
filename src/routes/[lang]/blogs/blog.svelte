<script lang="ts">
	export let name: string;
	export let url: string;
	export let year: number;
</script>

<a class="blogEntry" href={url} target="_blank" rel="noopener noreferrer">
	<span class="title"><span class="year">{year}</span> - {name}</span>
</a>

<style>
	.blogEntry {
		display: flex;
		padding: 1rem;
		background-color: #3b4252;
		font-size: 1rem;
		font-weight: bolder;
		border-radius: 5px;
		color: white;
		cursor: pointer;
		text-decoration: none;
	}

	.blogEntry:hover {
		background-color: #434c5e;
	}

	.title {
		text-align: left;
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
	}

	.year {
		font-weight: bold;
		color: #88c0d0;
	}
</style>
