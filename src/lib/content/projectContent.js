// Personal projects and other non-client work
// Note: Client data has been moved to clientDetails.js

// src: "./assets/Enterprise_HD.jpg", dimensions:
// alt: "The alt tag"
// tags: ["an array", "like", "this"], text ends up allcaps
// title: "A string", keep under 30ch
// body: "A string", keep under 120ch
// button:
//   txt: "check it out", no caps
//   href: "http://www.startrek.com"

export const personalProjects = [
	{
		src: './assets/' + 'gal-Megacorp.png',
		alt: 'A thumbnail of the Megacorp website',
		tags: ['js', 'svelte', 'gamedesign'],
		title: 'Corpo Adventure',
		body: 'A silly game about climbing the ladder at a megacorporation.',
		button: {
			txt: 'play the demo',
			href: 'https://corpomega.vercel.app/'
		}
	},
	{
		src: './assets/ph.svg',
		alt: 'Mirepoix App',
		tags: ['react native', 'mobile', 'cooking'],
		title: 'Mirepoix',
		body: 'A culinary companion app for managing recipes and meal prep.',
		button: {
			txt: 'coming soon',
			href: '#'
		}
	},
	{
		src: './assets/ph.svg',
		alt: 'Stolen Antiquities App',
		tags: ['game', 'mobile', 'mystery'],
		title: 'Stolen Antiquities',
		body: 'An interactive mystery game about recovering lost artifacts.',
		button: {
			txt: 'coming soon',
			href: '#'
		}
	}
];