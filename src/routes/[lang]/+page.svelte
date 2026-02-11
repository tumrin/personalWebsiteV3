<script lang="ts">
	import LL from '$lib/i18n/i18n-svelte';

	const programming = ['Rust', 'C', 'JavaScript', 'TypeScript', 'Python'];
	const frameworks = [
		'FastAPI',
		'Express.js',
		'Svelte',
		'SvelteKit',
		'Angular',
		'React',
		'Next.js'
	];
	const databases = ['PostgreSQL', 'SQLite', 'MongoDB'];
	const cloud = ['Azure', 'AWS', 'Docker', 'Hetzner', 'Linux', 'Terraform'];

	function printCV() {
		window.print();
	}
</script>

<svelte:head>
	<title>{$LL.home.title()}</title>
	<meta name="description" content={$LL.home.description()} />
</svelte:head>

<div class="cv-container">
	<button class="download-btn plausible-event-name=cv-download" on:click={printCV}
		>{$LL.cv.downloadPDF()}</button
	>
	<header class="cv-header">
		<h1 class="cv-name">Tuomas Rinne</h1>
		<p class="cv-title">{$LL.cv.title()}</p>
		<div class="cv-contact">
			<span>tuomas.rin(at)protonmail.com</span>
			<span class="divider">|</span>
			<span>Turku, Finland</span>
			<span class="divider">|</span>
			<a href="https://tumrin.dev" target="_blank" rel="noopener">{$LL.cv.website()}</a>
			<span class="divider">|</span>
			<a href="https://github.com/tumrin" target="_blank" rel="noopener">{$LL.cv.github()}</a>
			<span class="divider">|</span>
			<a href="https://www.linkedin.com/in/tuomas-rinne-0840a6157/" target="_blank" rel="noopener"
				>{$LL.cv.linkedin()}</a
			>
		</div>
	</header>

	<section class="cv-section">
		<h2 class="section-title">{$LL.cv.summary()}</h2>
		<p class="summary-text">{$LL.cv.summaryText()}</p>
		<p class="summary-text">{$LL.cv.summaryText2()}</p>
		<p class="summary-text">{$LL.cv.summaryText3()}</p>
	</section>

	<section class="cv-section">
		<h2 class="section-title">{$LL.cv.experience()}</h2>
		<div class="experience-item">
			<div class="experience-left">
				<div class="experience-title-group">
					<h3 class="experience-title">{$LL.cv.experienceTitle1()}</h3>
					<span class="experience-company">{$LL.cv.experienceCompany1()}</span>
				</div>
				<p>{$LL.cv.experienceDesc1_1()}</p>
				<p>{$LL.cv.experienceDesc1_2()}</p>
				<p>{$LL.cv.experienceDesc1_3()}</p>
				<p>{$LL.cv.experienceDesc1_4()}</p>
			</div>
			<div class="experience-right">
				<span class="experience-date">{$LL.cv.experienceDate1()}</span>
			</div>
		</div>
		<div class="experience-item">
			<div class="experience-left">
				<div class="experience-title-group">
					<h3 class="experience-title">{$LL.cv.experienceTitle2()}</h3>
					<span class="experience-company">{$LL.cv.experienceCompany2()}</span>
				</div>
				<p>{$LL.cv.experienceDesc2_1()}</p>
			</div>
			<div class="experience-right">
				<span class="experience-date">{$LL.cv.experienceDate2()}</span>
			</div>
		</div>
	</section>

	<section class="cv-section">
		<h2 class="section-title">{$LL.cv.education()}</h2>
		<div class="education-item">
			<div class="education-header">
				<div class="education-title-group">
					<h3 class="education-degree">{$LL.cv.educationDegree1()}</h3>
					<h4>{$LL.cv.major()}: {$LL.cv.educationMajor()}</h4>
					<h4>{$LL.cv.minor()}: {$LL.cv.educationMinor()}</h4>
					<span class="education-institution">{$LL.cv.educationInstitution1()}</span>
				</div>
				<div class="education-meta">
					<span class="education-date">{$LL.cv.educationDate1()}</span>
				</div>
			</div>
		</div>
	</section>

	<section class="cv-section">
		<h2 class="section-title">{$LL.cv.languages()}</h2>
		<p>{$LL.cv.language1()} - {$LL.cv.language1Proficiency()}</p>
		<p>{$LL.cv.language2()} - {$LL.cv.language2Proficiency()}</p>
	</section>

	<section class="cv-section">
		<h2 class="section-title">{$LL.cv.skills()}</h2>
		<h3>{$LL.cv.programmingLanguages()}</h3>
		<div class="skills-container">
			{#each programming as skill}
				<span class="skill-tag">{skill}</span>
			{/each}
		</div>
		<h3>{$LL.cv.frameworks()}</h3>
		<div class="skills-container">
			{#each frameworks as framework}
				<span class="skill-tag">{framework}</span>
			{/each}
		</div>
		<h3>{$LL.cv.databases()}</h3>
		<div class="skills-container">
			{#each databases as database}
				<span class="skill-tag">{database}</span>
			{/each}
		</div>
		<h3>{$LL.cv.hosting()}</h3>
		<div class="skills-container">
			{#each cloud as cloudItem}
				<span class="skill-tag">{cloudItem}</span>
			{/each}
		</div>
	</section>
</div>

<style>
	.cv-container {
		padding: 2rem;
		display: flex;
		flex-direction: column;
		background-color: #3b4252;
		border-radius: 8px;
	}

	.download-btn {
		background-color: #88c0d0;
		width: fit-content;
		align-self: flex-end;
		color: #2e3440;
		border: none;
		padding: 0.5rem 1rem;
		border-radius: 5px;
		cursor: pointer;
		font-weight: bolder;
	}

	.download-btn:hover {
		background-color: #8fbcbb;
	}

	.cv-header {
		text-align: center;
		border-bottom: 2px solid #88c0d0;
		padding-bottom: 0.5rem;
	}

	.cv-name {
		color: #88c0d0;
		margin: 0 0 0.5rem 0;
	}

	.cv-title {
		color: #8fbcbb;
		margin: 0 0 1rem 0;
		font-weight: bolder;
	}

	.cv-contact {
		color: #eceff4;
		display: flex;
		justify-content: center;
		align-items: center;
		flex-wrap: wrap;
		gap: 0.5rem;
		a {
			color: #88c0d0;
			text-decoration: none;
			&:hover {
				text-decoration: underline;
			}
		}
	}

	.cv-contact .divider {
		color: #4c566a;
	}
	.cv-section {
		display: flex;
		flex-direction: column;
		gap: 1rem;
		p {
			font-size: 1rem;
			margin-bottom: 0;
			margin-top: 0;
		}
		h3 {
			margin-bottom: 0;
			margin-top: 0;
		}
	}

	.section-title {
		color: #8fbcbb;
		font-size: 1.5rem;
		border-bottom: 1px solid #4c566a;
	}

	.summary-text {
		color: #eceff4;
		font-size: 1rem;
		line-height: 1.6;
	}

	.experience-item {
		display: grid;
		grid-template-columns: 5fr 1fr;
		gap: 1rem;
		margin-bottom: 1rem;
		p {
			margin-bottom: 0 !important;
		}
	}

	.experience-left {
		display: flex;
		flex-direction: column;
		gap: 1rem;
		p {
			line-height: 1.6;
			margin-bottom: 0.5rem;
		}
	}
	.experience-right {
		display: flex;
		flex-direction: column;
		text-align: end;
		flex-shrink: 0;
		font-weight: bolder;
	}

	.education-header {
		display: flex;
		justify-content: space-between;
		align-items: flex-start;
		margin-bottom: 0.5rem;
		flex-wrap: wrap;
		gap: 0.5rem;
	}

	.experience-title-group,
	.education-title-group {
		display: flex;
		flex-direction: column;
		gap: 0.25rem;
		margin-bottom: 1rem;
		h4 {
			margin: 0;
			color: #8fbcbb;
		}
	}

	.experience-title,
	.education-degree {
		color: #88c0d0;
		font-size: 1.1rem;
		margin: 0;
	}

	.experience-company,
	.education-institution {
		color: #eceff4;
		font-size: 0.95rem;
		font-weight: bolder;
	}

	.education-meta {
		display: flex;
		flex-direction: column;
		align-items: flex-end;
		gap: 0.25rem;
		font-weight: bolder;
	}

	.experience-date,
	.education-date {
		color: #8fbcbb;
		font-size: 0.9rem;
	}

	.skills-container {
		display: flex;
		flex-wrap: wrap;
		gap: 0.5rem;
		margin-bottom: 1rem;
	}

	.skill-tag {
		background-color: #88c0d0;
		color: #2e3440;
		padding: 0.4rem 0.8rem;
		border-radius: 5px;
		font-size: 0.9rem;
		font-weight: 500;
	}

	@media (max-width: 600px) {
		.cv-container {
			padding: 1rem;
		}

		.download-btn {
			position: static;
			margin-bottom: 1rem;
			width: 100%;
		}

		.cv-name {
			font-size: 1.75rem;
		}

		.cv-title {
			font-size: 1rem;
		}

		.cv-contact {
			font-size: 0.85rem;
		}

		.education-header {
			flex-direction: column;
		}

		.education-meta {
			align-items: flex-start;
		}

		.section-title {
			font-size: 1.25rem;
		}
	}

	@media print {
		.download-btn {
			display: none !important;
		}
		:global(.socials) {
			display: none !important;
		}

		:global(*) {
			overflow: visible !important;
			max-height: none !important;
		}

		:global(body) {
			background: white !important;
			height: auto !important;
			overflow: visible !important;
		}

		:global(main) {
			overflow: visible !important;
			height: auto !important;
		}

		.cv-container {
			background-color: white !important;
			border-radius: 0 !important;
			margin: 0 !important;
			padding: 1rem !important;
			color: #1a1a1a !important;
			-webkit-print-color-adjust: exact !important;
			print-color-adjust: exact !important;
			overflow: visible !important;
			max-height: none !important;
			height: auto !important;
			position: static !important;
		}

		.cv-name {
			color: #1a1a1a !important;
		}

		.cv-title {
			color: #333 !important;
		}

		.cv-contact {
			color: #333 !important;
		}

		.cv-contact a {
			color: #0066cc !important;
			text-decoration: none !important;
		}

		.divider {
			color: #666 !important;
		}

		.section-title {
			color: #1a1a1a !important;
			border-bottom-color: #ccc !important;
		}

		.summary-text {
			color: #333 !important;
		}

		.experience-title,
		.education-degree {
			color: #1a1a1a !important;
		}

		.experience-company,
		.education-institution {
			color: #333 !important;
		}

		.experience-date,
		.education-date {
			color: #666 !important;
		}

		.skill-tag {
			background-color: #e0e0e0 !important;
			color: #1a1a1a !important;
			border: 1px solid #ccc !important;
		}
	}
</style>
