// Extended project details for on-site project pages
// Uses a flexible "content blocks" system for visual storytelling

export const projectDetails = {
	racsite: {
		slug: 'racsite',
		title: 'A New Rent-A-Christmas Website',
		subtitle: 'Building a robust ecommerce experience for a festive brand',
		heroImage: '/assets/gal-RACsite.png',
		blocks: [
			{
				type: 'stats',
				data: {
					client: 'Rent-A-Christmas',
					year: '2023',
					role: 'Full-stack Developer & Designer',
					tools: ['TypeScript', 'React', 'Shopify']
				}
			},
			{
				type: 'comingSoon'
			}
		]
	},

	racstyle: {
		slug: 'racstyle',
		title: 'Rent-A-Christmas Style Guide',
		subtitle: 'Festive illustration work and brand guidelines',
		heroImage: '/assets/gal-RACStyleGuide.png',
		blocks: [
			{
				type: 'stats',
				data: {
					client: 'Rent-A-Christmas',
					year: '2022',
					role: 'Designer & Illustrator',
					tools: ['Illustrator', 'Photoshop']
				}
			},
			{
				type: 'comingSoon'
			}
		]
	},

	pexvis: {
		slug: 'pexvis',
		title: 'PEX Spaces',
		subtitle: 'Bringing the PEX brand to physical spaces',
		heroImage: '/assets/gal-PEXSpaces.jpg',
		blocks: [
			{
				type: 'stats',
				data: {
					client: 'PEX',
					year: '2021',
					role: 'Designer',
					tools: ['Illustrator', 'Photoshop']
				}
			},
			{
				type: 'comingSoon'
			}
		]
	},

	pexdigital: {
		slug: 'pexdigital',
		title: 'PEX Onboarding',
		subtitle: 'Improving the user experience of onboarding at PEX',
		heroImage: '/assets/gal-PEXOnboarding.png',
		blocks: [
			{
				type: 'stats',
				data: {
					client: 'PEX',
					year: '2021',
					role: 'Designer',
					tools: ['Figma', 'HTML/CSS']
				}
			},
			{
				type: 'comingSoon'
			}
		]
	},

	lsf: {
		slug: 'lsf',
		title: 'LSF Magazine',
		subtitle: 'Telling the story of biotechnology in a quarterly print magazine',
		heroImage: '/assets/gal-LSFmag.png',
		blocks: [
			{
				type: 'stats',
				data: {
					client: 'Life Science Foundation',
					year: '2016-2018',
					role: 'Designer & Production Lead',
					tools: ['InDesign', 'Illustrator', 'Photoshop']
				}
			},
			{
				type: 'comingSoon'
			}
		]
	}
};
