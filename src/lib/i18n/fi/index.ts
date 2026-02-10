import type { BaseTranslation } from '../i18n-types';

const fi = {
	projects: {
		client: 'Asiakasprojektit',
		hobby: 'Omat projektit',
		projects: 'Projektit',
		description: 'Projektit, joissa olen ollut mukana.'
	},
	publications: {
		publications: 'Julkaisut',
		description: 'Julkaisuja joiden kirjoittajana olen ollut joko yksin tai osana tiimiä.'
	},
	presentations: {
		presentations: 'Esitykset',
		descriptions: 'Eri tapahtumissa pitämiäni esityksiä.'
	},
	blogs: {
		blogs: 'Blogit',
		description: 'Kirjoittamani blogit',
		professional: 'Työnantajan blogit',
		hobby: 'Omat blogit'
	},
	cv: {
		downloadPDF: 'Lataa PDF',
		name: 'Tuomas Rinne',
		title: 'Ohjelmistokehittäjä',
		website: 'Verkkosivu',
		github: 'Github',
		linkedin: 'LinkedIn',
		summary: 'Yhteenveto',
		summaryText:
			'Olen työskennellyt ohjelmistokehittäjänä 6 vuotta monenlaisissa projekteissa sulautettujen järjestelmien laiteohjelmistokehityksestä monimutkaisiin verkkosovelluksiin, joihin sisältyy monia eri palveluita. Olen työskennellyt sekä tiimin jäsenenä että pääkehittäjänä, ja vaikka vahvuuteni ovat teknisellä puolella, työskentelen usein myös suoraan asiakkaiden kanssa vaatimusten ymmärtämiseksi ja projektin edistymisen viestimiseksi.',
		experience: 'Työkokemus',
		experienceTitle1: 'Full Stack -kehittäjä, perustaja, hallituksen jäsen',
		experienceCompany1: 'Kvanttori Oy',
		experienceLocation1: 'Turku, Suomi',
		experienceDate1: '2021 - Nykyhetki',
		experienceDesc1_1: 'Pääkehittäjä useissa projekteissa',
		experienceDesc1_2: 'Työskentely useiden teknologiapinojen kanssa eri asiakasprojekteissa',
		experienceTitle2: 'Harjoittelija, Teknologia',
		experienceCompany2: 'Oras Oy',
		experienceLocation2: 'Rauma, Suomi',
		experienceDate2: '2020 - 2021',
		experienceDesc2_1:
			'Vastuussa sensoriohjelmistojen kehittämisestä asiakkaiden käyttämissä tuotteissa',
		experienceDesc2_2: 'Prototyyppien rakentaminen tuleville tuotteille',
		education: 'Koulutus',
		educationDegree1: 'Diplomi-insinööri',
		educationInstitution1: 'Turun yliopisto',
		educationLocation1: 'Turku, Suomi',
		educationDate1: '2020 - 2025',
		languages: 'Kielet',
		language1: 'Suomi',
		language2: 'Englanti',
		skills: 'Taidot',
		programmingLanguages: 'Ohjelmointikielet',
		frameworks: 'Frameworkit',
		databases: 'Tietokannat',
		hosting: 'Hosting'
	},
	HI: 'Hi {name:string}! Please leave a star if you like this project: https://github.com/ivanhofer/typesafe-i18n'
} satisfies BaseTranslation;

export default fi;
