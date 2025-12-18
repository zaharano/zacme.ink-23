// Client portfolio details
// Each page showcases all work done for a specific client

export const clientDetails = {
	rac: {
		slug: 'rac',
		title: 'Rent-A-Christmas',
		subtitle: 'Ecommerce platform and brand development',
		heroImage: '/assets/gal-RACsite.png',
		blocks: [
			{
				type: 'stats',
				data: {
					client: 'Rent-A-Christmas',
					year: '2022-2023',
					role: 'Full-stack Developer & Designer',
					tools: ['TypeScript', 'React', 'Shopify', 'Illustrator']
				}
			},
			{
				type: 'textImage',
				data: {
					heading: 'About the Client',
					text: '<p>Rent-A-Christmas is a holiday decoration company that transforms homes and businesses for the season. They needed a modern ecommerce platform to handle their extensive product catalog and a cohesive visual identity for their brand.</p>'
				}
			},
			{
				type: 'deliverables',
				data: {
					heading: 'What I Built',
					items: [
						'Custom Shopify ecommerce platform with React components',
						'Product catalog system for 500+ holiday decoration items',
						'Streamlined checkout and cart experience',
						'Content management system for blog and seasonal updates',
						'Brand style guide and illustration system',
						'Custom iconography and graphic elements',
						'Responsive mobile experience'
					]
				}
			},
			{
				type: 'gallery',
				data: {
					images: [
						{ src: '/assets/gal-RACsite.png', alt: 'Rent-A-Christmas website' },
						{ src: '/assets/gal-RACStyleGuide.png', alt: 'Brand style guide' }
					],
					columns: 2
				}
			},
			{
				type: 'link',
				data: {
					primary: {
						text: 'Visit the Site',
						href: 'https://www.rent-a-christmas.com'
					},
					secondary: {
						text: 'View on Behance',
						href: 'https://www.behance.net/gallery/179954055/Rent-A-Christmas-Website'
					}
				}
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

	pex: {
		slug: 'pex',
		title: 'PEX',
		subtitle: 'Digital product design and development',
		heroImage: '/assets/gal-PEXOnboarding.png',
		blocks: [
			{
				type: 'stats',
				data: {
					client: 'PEX',
					year: '2020-2021',
					role: 'UX Designer & Developer',
					tools: ['Figma', 'React', 'HTML/CSS', 'User Research']
				}
			},
			{
				type: 'textImage',
				data: {
					heading: 'About the Client',
					text: '<p>PEX provides corporate card and spend management software for businesses. I worked on multiple initiatives to improve their digital product experience, from onboarding flows to design system development.</p>'
				}
			},
			{
				type: 'deliverables',
				data: {
					heading: 'What I Built',
					items: [
						'Redesigned customer onboarding flow with progressive disclosure',
						'Visual stepper component for multi-step processes',
						'User research and usability testing',
						'Design system components and documentation',
						'Prototypes for user testing and stakeholder buy-in',
						'Production-ready React components',
						'Accessibility improvements across the platform'
					]
				}
			},
			{
				type: 'gallery',
				data: {
					images: [
						{ src: '/assets/gal-PEXOnboarding.png', alt: 'PEX onboarding flow' },
						{ src: '/assets/gal-PEXSpaces.jpg', alt: 'PEX brand work' }
					],
					columns: 2
				}
			},
			{
				type: 'link',
				data: {
					primary: {
						text: 'View on Behance',
						href: 'https://www.behance.net/gallery/130217977/PEX-Onboarding'
					}
				}
			}
		]
	},

	lsf: {
		slug: 'lsf',
		title: 'Life Science Foundation',
		subtitle: 'Editorial design and data visualization',
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
				type: 'textImage',
				data: {
					heading: 'About the Client',
					text: '<p>Life Science Foundation is a biotechnology research and policy organization. I designed their quarterly print magazine, translating complex scientific research into accessible visual narratives for diverse audiences including scientists, policymakers, and the public.</p>'
				}
			},
			{
				type: 'deliverables',
				data: {
					heading: 'What I Built',
					items: [
						'8 quarterly magazine issues (60+ pages each)',
						'Custom data visualizations and infographics',
						'Modular layout system for diverse content types',
						'Editorial illustration and iconography',
						'Typography and grid systems for scientific content',
						'Photo direction and image selection',
						'Print production and prepress management'
					]
				}
			},
			{
				type: 'gallery',
				data: {
					images: [
						{ src: '/assets/gal-LSFmag.png', alt: 'LSF Magazine spread' }
					],
					columns: 1
				}
			},
			{
				type: 'link',
				data: {
					primary: {
						text: 'View on Behance',
						href: 'https://www.behance.net/gallery/40207321/LSF-Magazine'
					}
				}
			}
		]
	}
};
