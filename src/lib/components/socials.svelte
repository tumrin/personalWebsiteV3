<script lang="ts">
	import Fa from 'svelte-fa';
	import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
	const color = '#88c0d0';
</script>

<div class="socials">
	<a href="https://github.com/tumrin" aria-label="Link to GitHub">
		<Fa size="2x" {color} icon={faGithub} />
	</a>
	<a href="https://www.linkedin.com/in/tuomas-rinne-0840a6157/" aria-label="Link to LinkedIn">
		<Fa size="2x" {color} icon={faLinkedin} />
	</a>
</div>

<style>
	.socials {
		display: flex;
		justify-content: center;
		align-items: center;
		gap: 2rem;
		height: 10%;
	}
</style>
