// src: "./assets/Enterprise_HD.jpg", dimensions:
// alt: "The alt tag"
// tags: ["an array", "like", "this"], text ends up allcaps
// title: "A string", keep under 30ch
// body: "A string", keep under 120ch
// button:
//   txt: "check it out", no caps
//   href: "http://www.startrek.com"

export const clients = [
	{
		src: './assets/ph.svg',
		alt: 'Tribeca Aesthetics Logo',
		tags: ['branding', 'webdev', 'marketing'],
		title: 'Tribeca Aesthetics',
		body: 'A comprehensive branding and digital presence for a premier aesthetics clinic.',
		button: {
			txt: 'coming soon',
			href: '#'
		}
	},
	{
		slug: 'rac',
		hasOnsitePage: true,
		src: './assets/' + 'gal-RACsite.png',
		alt: 'A thumbnail of the Rent-A-Christmas website',
		tags: ['ts', 'react', 'webdev'],
		title: 'Rent-A-Christmas',
		body: 'A robust website with ecommerce, large product catalog, blog, and more',
		button: {
			txt: 'case study',
			href: 'https://www.behance.net/gallery/179954055/Rent-A-Christmas-Website'
		},
		secondButton: {
			icon: 'www',
			txt: 'visit the site',
			href: 'https://www.rent-a-christmas.com'
		}
	},
	{
		slug: 'pex',
		hasOnsitePage: true,
		src: './assets/' + 'gal-PEXOnboarding.png',
		alt: 'A thumbnail showing the stepper component of PEX onboarding',
		tags: ['emails', 'documentation', 'branding'],
		title: 'PEX',
		body: 'Improving the user experience of onboarding and platform usage at PEX.',
		button: {
			txt: 'welcome aboard',
			href: 'https://www.behance.net/gallery/130217977/PEX-Onboarding'
		}
	},
	{
		src: './assets/' + 'gal-Ghosh2.png',
		alt: 'A thumbnail of the Tiger Hill Capital website',
		tags: ['webdesign', 'webflow'],
		title: 'Tiger Hill Capital',
		body: 'Homepage for an Investment Management firm–and a place to collect their thoughts.',
		button: {
			txt: 'check it out',
			href: 'https://www.behance.net/gallery/111400489/Tiger-Hill-Capital-Websites'
		}
	},
	{
		slug: 'lsf',
		hasOnsitePage: true,
		src: './assets/gal-LSFmag.png',
		alt: 'A thumbnail showing off LSF magazine pages',
		tags: ['print', 'editorial design', 'data viz'],
		title: 'Life Science Foundation',
		body: 'Telling the story of biotechnology in a quarterly print magazine.',
		button: {
			txt: "let's see",
			href: 'https://www.behance.net/gallery/40207321/LSF-Magazine'
		}
	}
];

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