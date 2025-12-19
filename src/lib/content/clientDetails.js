// Client portfolio details
// Each page showcases all work done for a specific client

export const clientDetails = {
	tribeca: {
		slug: 'tribeca',
		title: 'Tribeca Aesthetics',
		subtitle: 'Comprehensive branding and digital presence',
		heroImage: './assets/ph.svg',
		// Gallery card data
		cardData: {
			src: './assets/ph.svg',
			alt: 'Tribeca Aesthetics Logo',
			tags: ['branding', 'webdev', 'marketing'],
			body: 'A comprehensive branding and digital presence for a premier center for regenerative aesthetics.',
			button: {
				txt: 'Read more',
				href: '#'
			}
		},
		blocks: [
			{
				type: 'stats',
				data: {
					domain: 'Medical Aesthetics',
					year: '2024',
					role: 'Designer & Developer',
					skills: ['Brand Strategy', 'Web Design', 'Marketing']
				}
			},
			{
				type: 'comingSoon'
			}
		]
	},

	rac: {
		slug: 'rac',
		title: 'Rent-A-Christmas',
		subtitle: 'Ecommerce platform and brand development',
		heroImage: '/assets/gal-RACsite.png',
		// Gallery card data
		cardData: {
			src: './assets/gal-RACsite.png',
			alt: 'A thumbnail of the Rent-A-Christmas website',
			tags: ['illustration', 'branding', 'webdev'],
			body: 'A years-long partnership developing brand identity, a playful illustration library, and marketing collateral for this full-service Christmas decoration rental company. Capped off with a modern headless e-commerce website build that weaves the whimsical brand throughout a professional and modern rental experience.',
		},
		blocks: [
			{
				type: 'stats',
				data: {
					domain: 'Consumer & Commercial Rentals',
					year: '2020-2025',
					role: 'Full-stack Developer & Brand Designer',
					skills: ['Full-stack Development', 'Illustration', 'Brand Design', 'E-commerce']
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
						'Headless e-commerce website (Shopify + Sanity CMS)',	
						'Product catalog system for 500+ holiday decoration items',
						'Blog and sales funnel content system',
						'Streamlined checkout and cart experience for rental business',
						'Content management system for blog and seasonal updates',
						'Signature illustration style development',
						'Brand style guide and illustration system and library',
						'Custom iconography and graphic elements'		
							],
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
						text: 'Vis',
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

	pex: {
		slug: 'pex',
		title: 'PEX',
		subtitle: 'Digital product design and development',
		heroImage: '/assets/gal-PEXOnboarding.png',
		// Gallery card data
		cardData: {
			src: './assets/gal-PEXOnboarding.png',
			alt: 'A thumbnail showing the stepper component of PEX onboarding',
			tags: ['emails', 'documentation', 'branding'],
			body: 'Improving the user experience of onboarding and platform usage at PEX.',
			button: {
				txt: 'welcome aboard',
				href: 'https://www.behance.net/gallery/130217977/PEX-Onboarding'
			}
		},
		blocks: [
			{
				type: 'stats',
				data: {
					domain: 'B2B Fintech',
					year: '2020-2021',
					role: 'UX Designer & Developer',
					skills: ['UX Design', 'Front-end Development', 'User Research', 'Design Systems']
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
		// Gallery card data
		cardData: {
			src: './assets/gal-LSFmag.png',
			alt: 'A thumbnail showing off LSF magazine pages',
			tags: ['print', 'editorial design', 'data viz'],
			body: 'Telling the story of biotechnology in a quarterly print magazine.',
			button: {
				txt: "let's see",
				href: 'https://www.behance.net/gallery/40207321/LSF-Magazine'
			}
		},
		blocks: [
			{
				type: 'stats',
				data: {
					domain: 'Science Communication',
					year: '2016-2018',
					role: 'Designer & Production Lead',
					skills: ['Editorial Design', 'Data Visualization', 'Illustration', 'Print Production']
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

// Export arrays for use in gallery components
export const clients = Object.values(clientDetails)
	.filter((client) => client.cardData) // Only include clients with card data
	.map((client) => ({
		...client.cardData,
		slug: client.slug,
		title: client.title,
		hasOnsitePage: true
	}));
