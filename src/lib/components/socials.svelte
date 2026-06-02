<script lang="ts">
	import Fa from 'svelte-fa';
	import Codeberg from './codeberg-logo_icon_white.svelte';
	import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
	const color = '#FFFFFF';
</script>

<div class="socials">
	<div class="social">
		<a href="https://codeberg.org/tumrin" aria-label="Link to Codeberg">
			<Codeberg />
		</a>
	</div>
	<div class="social">
		<a href="https://github.com/tumrin" aria-label="Link to GitHub">
			<Fa scale={2} {color} icon={faGithub} />
		</a>
	</div>
	<div class="social">
		<a href="https://www.linkedin.com/in/tuomas-rinne-0840a6157/" aria-label="Link to LinkedIn">
			<Fa scale={2} {color} icon={faLinkedin} />
		</a>
	</div>
</div>

<style>
	.socials {
		display: flex;
		justify-content: center;
		align-items: center;
		gap: 2rem;
		height: 10%;
	}
	.social {
		display: flex;
		align-items: center;
		justify-content: center;
		width: 32px;
		height: 32px;
	}
</style>
