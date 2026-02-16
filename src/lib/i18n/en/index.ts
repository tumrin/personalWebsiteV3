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
		hobby: 'Personal blogs'
	},
	cv: {
		downloadPDF: 'Download PDF',
		title: 'Software Engineer',
		website: 'Website',
		github: 'Github',
		linkedin: 'LinkedIn',
		summary: 'Summary',
		summaryText:
			'I have been working as a software engineer for over 5 years in multitude of project from firmware development on embedded systems to complex web applications with multiple different services. I have worked as part of a team and as a lead developer and while my strengths are on the technical side, I also often work directly with clients to understand requirements and communicate progress.',
		summaryText2:
			'Outside work I develop personal projects and run most of the different software and service I use on my personal server.',
		summaryText3:
			'I am motivated by a desire to grow as a software developer and to build sustainable and high-quality solutions. I am also interested in promoting the use of open source solutions and European technology.',
		experience: 'Experience',
		experienceTitle1: 'Full Stack Developer, Co-founder, Board member',
		experienceCompany1: 'Kvanttori Oy',
		experienceDate1: '2021 -',
		experienceDesc1_1:
			"I worked as the lead developer in three different projects, where I was responsible for technical implementation and client communication. In the first project, we implemented an energy management interface for the City of Turku using Next.js, TypeScript, and a PostgreSQL database. The project involved close collaboration with the client to iterate the user interface. In the second project, I designed and implemented a hackathon challenge for Boost Turku. The challenge simulated household energy consumption, production, and storage. Participants had to manage home energy storage and usage to balance consumption. I implemented a real-time simulation using Rust and PostgreSQL database, along with an API for competitors to fetch data. In the third project, I was responsible for fixing and improving a previous vendor's application to meet the client's needs. The application was built with Python, FastAPI, and Azure.",
		experienceDesc1_2:
			"I worked as part of the development team on two different projects. In the first, I was part of the client's approximately 20-person development team. I implemented several improvements and features for an existing CRM/ERP product, including a microservice for user management and form processing, as well as an SDK for building applications on top of the product. The microservices were implemented using the Express.js framework with TypeScript. The product also used Angular and MongoDB database. In the second project, we fixed and added features to a previous vendor's ERP system for a manufacturing industry client. The project used React, TypeScript, Express.js framework, and PostgreSQL database.",
		experienceDesc1_3:
			'I have been responsible for company tools and systems since 2025. The work includes deployment and maintenance of servers and tools.',
		experienceDesc1_4:
			'I served as a co-founder and board member of the company. I handled founding-related activities together with other partners. I served as chairman of the board in 2022.',
		experienceTitle2: 'Trainee, Technology',
		experienceCompany2: 'Oras Oy',
		experienceDate2: '2020 - 2021',
		experienceDesc2_1:
			'I was responsible for developing sensor firmware for products used by customers and for development and validation of prototypes for upcoming products with C as the primary programming language. I also implemented a water fixture usage simulation program in Rust and a visualization for the simulation in JavaScript. The work also included a prototype built for controlling sensors using Raspberry Pi and Python.',
		education: 'Education',
		educationDegree1: 'Master of Science (Technology)',
		major: 'Major',
		minor: 'Minor',
		educationMajor: 'Software Engineering',
		educationMinor: 'Cyber Security',
		educationInstitution1: 'University of Turku',
		educationDate1: '2020 - 2024',
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
