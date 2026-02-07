<script lang="ts">
	interface Experience {
		title: string;
		company: string;
		location: string;
		date: string;
		description: string[];
	}

	interface Education {
		degree: string;
		institution: string;
		location: string;
		date: string;
	}

	interface CVData {
		experience: Experience[];
		education: Education[];
		languages: string[];
		programming: string[];
		frameworks: string[];
		databases: string[];
		cloud: string[];
	}

	let data: CVData = {
		experience: [
			{
				title: 'Full Stack Developer, Co-founder, Board member',
				company: 'Kvanttori Oy',
				location: 'Turku, Finland',
				date: '2021 - Present',
				description: [
					'Lead developer in multiple projects',
					'Working with multiple tech stacks on different customer projects'
				]
			},
			{
				title: 'Trainee, Technology',
				company: 'Oras Oy',
				location: 'Rauma, Finland',
				date: '2020 - 2021',
				description: [
					'Responsible for developing sensor firmware on products used by customers',
					'Building prototypes for upcoming products'
				]
			}
		],
		education: [
			{
				degree: 'Master of Science (Technology)',
				institution: 'University of Turku',
				location: 'Turku, Finland',
				date: '2020 - 2025'
			}
		],
		languages: ['Finnish', 'English'],
		programming: ['Rust', 'JavaScript', 'TypeScript', 'Python', 'C', 'Java'],
		frameworks: ['FastAPI', 'express.js', 'Svelte', 'SvelteKit', 'React', 'Next.js'],
		databases: ['PostgreSQL', 'Sqlite', 'MongoDB'],
		cloud: ['Azure', 'Docker', 'Hetzner', 'Linux', 'Terraform']
	};

	function printCV() {
		window.print();
	}
</script>

<div class="cv-container">
	<button class="download-btn" on:click={printCV}>Download PDF</button>
	<header class="cv-header">
		<h1 class="cv-name">Tuomas Rinne</h1>
		<p class="cv-title">Software Engineer</p>
		<div class="cv-contact">
			<span>tuomas.rin(at)protonmail.com</span>
			<span class="divider">|</span>
			<span>Turku, Finland</span>
			<span class="divider">|</span>
			<a href="https://tumrin.dev" target="_blank" rel="noopener">Website</a>
			<span class="divider">|</span>
			<a href="https://github.com/tumrin" target="_blank" rel="noopener">Github</a>
			<span class="divider">|</span>
			<a href="https://www.linkedin.com/in/tuomas-rinne-0840a6157/" target="_blank" rel="noopener"
				>LinkedIn</a
			>
		</div>
	</header>

	<section class="cv-section">
		<h2 class="section-title">Summary</h2>
		<p class="summary-text">
			I have been working as a software engineer for 6 years in multitude of project from firmware
			development on embedded systems to complex web applications with multiple different services.
			I have worked as part of a team and as a lead developer and while my strengths are on the
			technical side, I also often work directly with clients to understand requirements and
			communicate progress.
		</p>
	</section>

	<section class="cv-section">
		<h2 class="section-title">Experience</h2>
		{#each data.experience as job}
			<div class="experience-item">
				<div class="experience-header">
					<div class="experience-title-group">
						<h3 class="experience-title">{job.title}</h3>
						<span class="experience-company">{job.company}</span>
					</div>
					<div class="experience-meta">
						<span class="experience-location">{job.location}</span>
						<span class="experience-date">{job.date}</span>
					</div>
				</div>
				<ul class="experience-list">
					{#each job.description as item}
						<li>{item}</li>
					{/each}
				</ul>
			</div>
		{/each}
	</section>

	<section class="cv-section">
		<h2 class="section-title">Education</h2>
		{#each data.education as edu}
			<div class="education-item">
				<div class="education-header">
					<div class="education-title-group">
						<h3 class="education-degree">{edu.degree}</h3>
						<span class="education-institution">{edu.institution}</span>
					</div>
					<div class="education-meta">
						<span class="education-location">{edu.location}</span>
						<span class="education-date">{edu.date}</span>
					</div>
				</div>
			</div>
		{/each}
	</section>

	<section class="cv-section">
		<h2 class="section-title">Languages</h2>
		<ul>
			{#each data.languages as lang}
				<li>{lang}</li>
			{/each}
		</ul>
	</section>

	<section class="cv-section">
		<h2 class="section-title">Skills</h2>
		<h3>Programming Languages</h3>
		<div class="skills-container">
			{#each data.programming as skill}
				<span class="skill-tag">{skill}</span>
			{/each}
		</div>
		<h3>Frameworks</h3>
		<div class="skills-container">
			{#each data.frameworks as framework}
				<span class="skill-tag">{framework}</span>
			{/each}
		</div>
		<h3>Databases</h3>
		<div class="skills-container">
			{#each data.databases as database}
				<span class="skill-tag">{database}</span>
			{/each}
		</div>
		<h3>Hosting</h3>
		<div class="skills-container">
			{#each data.cloud as cloud}
				<span class="skill-tag">{cloud}</span>
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
	}

	.download-btn:hover {
		background-color: #8fbcbb;
	}

	.cv-header {
		text-align: center;
		padding-bottom: 1.5rem;
		border-bottom: 2px solid #88c0d0;
	}

	.cv-name {
		color: #88c0d0;
		margin: 0 0 0.5rem 0;
	}

	.cv-title {
		color: #8fbcbb;
		margin: 0 0 1rem 0;
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

	.section-title {
		color: #8fbcbb;
		font-size: 1.5rem;
		border-bottom: 1px solid #4c566a;
		padding-bottom: 0.5rem;
		margin-bottom: 1rem;
	}

	.summary-text {
		color: #eceff4;
		font-size: 1rem;
		line-height: 1.6;
		margin: 0;
	}

	.experience-item,
	.education-item {
		margin-bottom: 1.5rem;
	}

	.experience-header,
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

	.experience-meta,
	.education-meta {
		display: flex;
		flex-direction: column;
		align-items: flex-end;
		gap: 0.25rem;
	}

	.experience-location,
	.education-location {
		color: #eceff4;
		font-size: 0.9rem;
	}

	.experience-date,
	.education-date {
		color: #8fbcbb;
		font-size: 0.9rem;
	}

	.experience-list {
		color: #eceff4;
		margin: 0;
	}

	ul {
		padding-left: 1.5rem;
	}

	li {
		margin-bottom: 0.25rem;
		line-height: 1.5;
	}

	.skills-container {
		display: flex;
		flex-wrap: wrap;
		gap: 0.5rem;
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

		.experience-header,
		.education-header {
			flex-direction: column;
		}

		.experience-meta,
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

		.experience-location,
		.education-location {
			color: #555 !important;
		}

		.experience-date,
		.education-date {
			color: #666 !important;
		}

		.experience-list {
			color: #333 !important;
		}

		.skill-tag {
			background-color: #e0e0e0 !important;
			color: #1a1a1a !important;
			border: 1px solid #ccc !important;
		}
	}
</style>
