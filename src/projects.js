import mytherapist from './assets/mytherapist.png';
import centro from './assets/centro.png';
import koyata from './assets/koyata.png';
import riskFree from './assets/risk-free.png';
import prackage from './assets/prackage.png';
import spotify from './assets/spotify.png'

const projects = [
    {
        id: 1,
        name: 'finding therapists',
        description: 'Connecting therapists to people who need them',
        tags: ['Live', 'Web', 'App', 'HealthTech', 'Case Study'],
        year: 2022, 
        image: mytherapist
    },
    {
        id: 2,
        name: 'improving DAOs',
        description: 'I made DAO onboarding easier for newbies to Web 3',
        tags: ['Web', 'Web3', 'Case Study'],
        year: 2022, 
        image: centro
    },
    {
        id: 3,
        name: 'improving language learning',
        description: 'Utilizing white hat gamification techniques',
        tags: ['App', 'Localization', 'EdTech', 'Case Study'],
        year: 2022, 
        image: koyata
    },
    {
        id: 4,
        name: 'curbing overthinking',
        description: 'Not the whole app, just the copy on the splash screen.',
        tags: ['App', 'HealthTech', 'Case Study'],
        year: 2021, 
        image: riskFree
    },
    {
        id: 5,
        name: 'designing prackage',
        description: 'Designed the website from ground up.',
        tags: ['Live', 'Web', 'Media', 'Case Study'],
        year: 2022, 
        image: prackage
    },
    {
        id: 6,
        name: 'lyrics and karaoke',
        description: 'This was before Spotify released theirs. Mafejopami.',
        tags: ['App', 'Media', 'Case Study'],
        year: 2021, 
        image: spotify
    },
]

export default projects;