import type { BaseTranslation } from '../i18n-types';

const en = {
	home: {
		title: 'Tuomas Rinne - Software Developer',
		description: 'CV including work experience, skills and education'
	},
	projects: {
		client: 'Work Projects',
		hobby: 'Hobby Projects',
		projects: 'Projects',
		description: 'Personal and professional projects I have been part of during my career.'
	},
	publications: {
		publications: 'Publications',
		description: 'Papers written by me or by a team I have been part of.'
	},
	presentations: {
		presentations: 'Presentations',
		descriptions: 'Presentations I have given at different events'
	},
	blogs: {
		blogs: 'Blogs',
		description: 'Blogs I have written',
		professional: 'Professional blogs',
		hobby: 'Personal blogs',
		europe: {
			name: 'European Services and Digital Sovereignty',
			url: 'https://kvanttori.fi/en/blogi/eurooppalaiset-palvelut'
		},
		techChoices: {
			name: 'Technology choices in software development and development tools',
			url: 'https://kvanttori.fi/en/blogi/teknologiavalinnat'
		},
		rust: {
			name: 'Unsafe Mode in Rust Programming Language',
			url: 'https://kvanttori.fi/en/blogi/unsafe-rust'
		},
		energy: {
			name: 'Introduction to Software Energy Efficiency',
			url: 'https://kvanttori.fi/en/blogi/johdatus-ohjelmien-energiatehokkuuteen'
		},
		digitalSovereignty: {
			title: 'European Services and Digital Sovereignty',
			description: 'Blog post about European services and digital sovereignty',
			content:
				"Digital sovereignty refers to a nation or entity's ability to control its own data, digital infrastructure, and technological choices without being dependent on foreign corporations or governments. In this blog post, I explore the importance of European services and the need for digital sovereignty in the modern world."
		}
	},
	cv: {
		downloadPDF: 'Download PDF',
		title: 'Software Engineer',
		website: 'Website',
		github: 'Github',
		linkedin: 'LinkedIn',
		summary: 'Summary',
		summaryText:
			'I have been working as a software engineer for over 5 years in multitude of project from firmware development on embedded systems to complex web applications with multiple different services. I have worked as part of a team and as a team leader and while my strengths are on the technical side, I also often work directly with clients to understand requirements and communicate progress.',
		summaryText2:
			'Outside work I develop personal projects and run most of the different software and services I use on my personal server including a Nextcloud instance and a Matrix-server.',
		summaryText3:
			'I am motivated by a desire to grow as a software developer and to build sustainable and high-quality solutions. I am also interested in promoting the use of open source solutions and European technology.',
		experience: 'Experience',
		experienceTitle1: 'Back End Developer',
		experienceCompany1: 'Mad Booster',
		experienceDesc1_1:
			'Developing Evelia ERP-system.',
		experienceTitle2: 'Full Stack Developer, Co-founder',
		experienceCompany2: 'Kvanttori Ltd',
		experienceDesc2_1_1:
			'I worked as a team leader or otherwise responsible developer in three different projects, where I was responsible for technical implementation and client communication. In the first project, we implemented an energy management interface for the City of Turku using Next.js, TypeScript, and a PostgreSQL database.The project involved close collaboration with the client to iterate the user interface.',
		experienceDesc2_1_2:
			'In the second project, I designed and implemented a hackathon challenge for Boost Turku. The challenge simulated household energy consumption, production, and storage. Participants had to manage home energy storage and usage to balance consumption. I implemented a real-time simulation using Rust and PostgreSQL database, along with an API for competitors to fetch data.',
		experienceDesc2_1_3:
			"In the third project, I was responsible for fixing and improving a previous vendor's application to meet the client's needs. The application was built with Python, FastAPI, and Azure.",
		experienceDesc2_2_1:
			"I worked as part of the development team on two different projects. In the first, I was part of the client's approximately 20-person development team. I implemented several improvements and features for an existing CRM/ERP product, including a microservice for user management and form processing, as well as an SDK for building applications on top of the product. The microservices were implemented using the Express.js framework with TypeScript. The product also used Angular and MongoDB database. ",
		experienceDesc2_2_2:
			"In the second project, we fixed and added features to a previous vendor's ERP system for a manufacturing industry client.The project used React, TypeScript, Express.js framework, and PostgreSQL database.",
		experienceDesc2_3:
			'I was responsible for company tools and systems. This included deployment and maintenance of servers, developer computers and software used for time tracking, wiki and uptime monitoring as well as ensuring their availability.',
		experienceTitle3: 'Trainee (Technology)',
		experienceCompany3: 'Oras Ltd',
		experienceDesc3_1:
			'I was responsible for developing sensor firmware for products used by customers and for development and validation of prototypes for upcoming products with C as the primary programming language. I also implemented a water fixture usage simulation program in Rust and a visualization for the simulation in JavaScript. The work also included a prototype built for controlling sensors using Raspberry Pi and Python.',
		trust: 'Positions of Trust',
		trustTitle1: 'Board Member',
		trustCompany1: 'Kvanttori Ltd',
		trustTitle2: 'Chariman of the Board',
		trustCompany2: 'Kvanttori Ltd',
		education: 'Education',
		educationDegree1: 'Master of Science (Technology)',
		major: 'Major',
		minor: 'Minor',
		educationMajor: 'Software Engineering',
		educationMinor: 'Cyber Security',
		educationInstitution1: 'University of Turku',
		languages: 'Languages',
		language1: 'Finnish',
		language1Proficiency: 'Native',
		language2: 'English',
		language2Proficiency: 'Proficient',
		skills: 'Skills',
		programmingLanguages: 'Programming Languages',
		frameworks: 'Frameworks',
		databases: 'Databases',
		hosting: 'Hosting'
	}
} satisfies BaseTranslation;

export default en;
