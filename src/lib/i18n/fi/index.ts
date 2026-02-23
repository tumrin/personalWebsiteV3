import type { BaseTranslation } from '../i18n-types';

const fi = {
	home: {
		title: 'Tuomas Rinne - Ohjelmistokehittäjä',
		description: 'Osaamiseni, työkokemukseni ja koulutukseni'
	},
	projects: {
		client: 'Työprojektit',
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
		title: 'Ohjelmistokehittäjä',
		website: 'Verkkosivu',
		github: 'Github',
		linkedin: 'LinkedIn',
		summary: 'Yhteenveto',
		summaryText:
			'Olen työskennellyt ohjelmistokehittäjänä yli 5 vuotta monenlaisissa projekteissa sulautettujen järjestelmien laiteohjelmistokehityksestä monimutkaisiin verkkosovelluksiin, joihin sisältyy monia eri palveluita. Olen työskennellyt sekä tiimin jäsenenä että pääkehittäjänä, ja vaikka vahvuuteni ovat teknisellä puolella, työskentelen usein myös suoraan asiakkaiden kanssa vaatimusten ymmärtämiseksi ja projektin edistymisen viestimiseksi.',
		summaryText2:
			'Vapaa-ajalla kehittelen omia projektejani. Ajan myös suurinta osaa käyttämistäni työkaluista ja palveluista omalla Linux-palvelinkoneellani. Näihin työkaluihin lukeutuvat esimerkiksi Nextcloud ja Matrix-palvelin.',
		summaryText3:
			'Minua motivoi halu kehittyä ohjelmistokehittäjänä ja rakentaa kestäviä ja laadukkaita ratkaisuja. Olen lisäksi kiinnostunut avoimen lähdekoodin ratkaisujen sekä eurooppalaisen teknologian käytön edistämisestä.',
		experience: 'Työkokemus',
		experienceTitle1: 'Full Stack -kehittäjä, perustaja, hallituksen jäsen',
		experienceCompany1: 'Kvanttori Oy',
		experienceDate1: '2021 -',
		experienceDesc1_1_1:
			'Toimin pääkehittäjänä kolmessa eri projektissa, joissa olin vastuussa teknisestä toteutuksesta sekä kommunikoinnista asiakkaan kanssa. Ensimmäisessä näistä projekteista toteutimme Turun kaupungille energianhallintakäyttöliittymän Next.js:llä, Typescriptilla ja PostgreSQL-tietokannalla. Projektissa oltiin tiiviissä yhteistyössä asiakkaan kanssa käyttöliittymän iteroimiseksi.',
		experienceDesc1_1_2:
			'Toisessa projektissa suunnittelin ja toteutin hackathon-haasteen Boost Turulle. Haasteessa simuloitiin talouksien energiankäyttöä, tuottoa ja varastointia. Haasteen ottajien tehtävä oli ohjata talon energian varastointia ja varastojen käyttöä kulutuksen tasaamiseksi. Toteutin haastetta varten reaaliaikaisen simulaation Rustilla ja PostgreSQL-tietokannalla ja API:n, jonka kautta kilpailijat hakivat datan. ',
		experienceDesc1_1_3:
			' Kolmannessa projektissa vastasin aiemman toimittajan tekemän sovelluksen korjauksesta ja parannuksesta vastaamaan asiakkaan tarpeita. Sovellus oltiin toteutettu Pythonilla, FastAPI:lla ja Azurella.',
		experienceDesc1_2_1:
			'Toimin osana kehitystiimiä kahdessa eri projektissa. Ensimmäisessä toimin osana asiakkaan noin 20 hengen kehitystiimiä. Toteutin useita parannuksia ja ominaisuuksia olemassa olevaan CRM / ERP tuotteeseen mukaan lukien mikropalvelun käyttäjien hallintaan ja lomakkeiden käsittelyyn sekä tuotteen päälle rakennettavien sovellusten tekoon tarkoitetun SDK:n. Mikropalvelut toteutettiin Express.js frameworkilla, Typescriptilla. Tuotteessa käytettiin lisäksi Angularia ja MongoDB-tietokantaa. ',
		experienceDesc1_2_2:
			'Toisessa projektissa korjasimme ja lisäsimme ominaisuuksia aiemman toimittajan rakentamaan ERP-järjestelmään valmistavan teollisuuden asiakkaalle. Projektissa käytettiin Reactia, Typescriptia, Express.js frameworkia ja PostgreSQL-tietokantaa.',
		experienceDesc1_3:
			'Vastasin yrityksen työkaluista ja järjestelmistä vuodesta 2025 alkaen. Työhön kuuluu palvelinten sekä kehittäjien tietokoneiden ylläpito. Lisäksi työhön kuului tuntikirjaus, wiki ja saatavuusvalvontatyökalujen hallinnointi.',
		experienceDesc1_4:
			'Toimin perustajana ja hallituksen jäsenenä yrityksessä. Hoidin yhdessä muiden osakkaiden kanssa perustamiseen liittyviä toimintoja. Toimin hallituksen puheenjohtajana vuonna 2022.',
		experienceTitle2: 'Harjoittelija, Teknologia',
		experienceCompany2: 'Oras Oy',
		experienceDate2: '2020 - 2021',
		experienceDesc2_1:
			'Olin vastuussa sensoriohjelmistojen kehittämisestä asiakkaiden käyttämissä tuotteissa sekä tulevien tuotteiden prototyyppien kehityksestä ja validoinnista. Pääasiallisena ohjelmointikielenä toimi C. Lisäksi toteutin vesikalusteiden käytön simulaatioohjelman Rustilla sekä visualisaation simulaatiolle Javascriptilla. Työhön kuului myös sensorien ohjaamiseen rakennettu prototyyppi Raspberry Pi:lla ja Pythonilla.',
		education: 'Koulutus',
		educationDegree1: 'Diplomi-insinööri (Tietotekniikka)',
		major: 'Pääaine',
		minor: 'Sivuaine',
		educationMajor: 'Ohjelmistotekniikka',
		educationMinor: 'Kyberturvallisuus',
		educationInstitution1: 'Turun yliopisto',
		educationDate1: '2020 - 2024',
		languages: 'Kielet',
		language1: 'Suomi',
		language1Proficiency: 'Äidinkieli',
		language2: 'Englanti',
		language2Proficiency: 'Sujuva',
		skills: 'Taidot',
		programmingLanguages: 'Ohjelmointikielet',
		frameworks: 'Frameworkit',
		databases: 'Tietokannat',
		hosting: 'Hosting'
	}
} satisfies BaseTranslation;

export default fi;
