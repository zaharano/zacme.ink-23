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
					tools: ['TypeScript', 'React', 'Shopify', 'Node.js']
				}
			},
			{
				type: 'challenge',
				data: {
					challenge: {
						heading: 'The Challenge',
						text: '<p>Rent-A-Christmas needed a complete website overhaul to support their growing business. Their existing site was difficult to manage, lacked modern ecommerce features, and struggled to handle their extensive product catalog of holiday decorations and installations.</p><p>Key pain points included slow page loads, poor mobile experience, and a checkout process that led to high cart abandonment rates.</p>'
					},
					solution: {
						heading: 'The Solution',
						text: '<p>I designed and developed a modern, high-performance ecommerce platform built on Shopify with custom React components. The new site features an intuitive product browsing experience, streamlined checkout flow, and a robust content management system for their blog and seasonal updates.</p><p>The technical approach prioritized performance, accessibility, and scalability to support future growth.</p>'
					},
					layout: 'sideBySide'
				}
			},
			{
				type: 'textImage',
				data: {
					heading: 'Modern Product Catalog',
					text: '<p>The new product catalog system makes it easy for customers to browse hundreds of holiday decoration options. Advanced filtering by category, size, and style helps customers find exactly what they need.</p><p>Each product page includes high-quality imagery, detailed descriptions, and related product recommendations to increase average order value.</p>',
					image: {
						src: '/assets/gal-RACsite.png',
						alt: 'Rent-A-Christmas product catalog interface'
					},
					imagePosition: 'right'
				}
			},
			{
				type: 'textImage',
				data: {
					heading: 'What Changed',
					text: '<p>The new site dramatically improved both the customer experience and business metrics. Page loads became nearly instant, mobile checkout actually worked, and the product catalog could finally handle their full inventory without breaking.</p><p>More importantly, customers could actually find what they were looking for and complete purchases without frustration.</p>',
					image: {
						src: '/assets/gal-RACsite.png',
						alt: 'Rent-A-Christmas website improvements'
					},
					imagePosition: 'left'
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
					role: 'UX Designer',
					tools: ['Figma', 'HTML/CSS', 'User Research']
				}
			},
			{
				type: 'challenge',
				data: {
					challenge: {
						heading: 'The Challenge',
						text: '<p>PEX needed to redesign their customer onboarding experience. The existing flow was confusing, had high drop-off rates, and lacked clear guidance for new users navigating the corporate card management platform.</p><p>Research showed users were overwhelmed by too many options presented at once and unclear next steps throughout the process.</p>'
					},
					solution: {
						heading: 'The Solution',
						text: '<p>I redesigned the onboarding flow with a progressive disclosure approach, breaking complex steps into manageable chunks. A visual stepper component guides users through each phase while providing clear progress indicators.</p><p>The new design includes contextual help, inline validation, and celebratory moments to encourage completion.</p>'
					},
					layout: 'sideBySide'
				}
			},
			{
				type: 'textImage',
				data: {
					heading: 'Guided Step-by-Step Experience',
					text: '<p>The redesigned stepper component became the centerpiece of the onboarding flow, providing clear visual feedback on progress and what comes next.</p><p>Each step is carefully scoped to avoid overwhelming users, with optional advanced settings tucked away for power users.</p>',
					image: {
						src: '/assets/gal-PEXOnboarding.png',
						alt: 'PEX onboarding stepper component'
					},
					imagePosition: 'right'
				}
			},
			{
				type: 'textImage',
				data: {
					heading: 'What Changed',
					text: '<p>The redesigned flow turned a confusing maze into a clear path. New customers could actually complete setup without calling support, and the company saw fewer abandoned accounts.</p><p>The stepper component became a model for other parts of the platform—simple, clear progress indication that just works.</p>',
					image: {
						src: '/assets/gal-PEXOnboarding.png',
						alt: 'PEX onboarding improvements'
					},
					imagePosition: 'left'
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
					tools: ['InDesign', 'Illustrator', 'Photoshop', 'Data Visualization']
				}
			},
			{
				type: 'challenge',
				data: {
					challenge: {
						heading: 'The Challenge',
						text: '<p>The Life Science Foundation needed a quarterly print magazine to communicate complex biotechnology research and policy to diverse stakeholders including scientists, policymakers, and the general public.</p><p>The content ranged from dense scientific research to human interest stories, requiring a flexible design system that could handle both technical data visualization and compelling narrative layouts.</p>'
					},
					solution: {
						heading: 'The Solution',
						text: '<p>I designed and produced a 60+ page magazine each quarter, developing a modular layout system that balanced scientific rigor with visual appeal. Custom data visualizations made complex research accessible, while thoughtful typography and imagery created engaging stories.</p><p>The design established LSF as a credible voice in biotechnology communication.</p>'
					},
					layout: 'sideBySide'
				}
			},
			{
				type: 'textImage',
				data: {
					heading: 'Data-Driven Storytelling',
					text: '<p>Each issue featured custom infographics and data visualizations to make complex scientific concepts accessible to non-expert audiences.</p><p>Charts, diagrams, and illustrated explainers transformed dense research into engaging visual narratives while maintaining scientific accuracy.</p>',
					image: {
						src: '/assets/gal-LSFmag.png',
						alt: 'LSF Magazine data visualization spread'
					},
					imagePosition: 'left'
				}
			},
			{
				type: 'textImage',
				data: {
					heading: 'The Work',
					text: '<p>Over two years, I designed and produced 8 quarterly issues—each 60+ pages of dense scientific content that needed to be both accurate and engaging.</p><p>The challenge was always finding the right balance: make it visual enough to hold attention, but never sacrifice the integrity of the science. Custom data visualizations helped, but so did knowing when to just let good writing breathe on the page.</p>',
					image: {
						src: '/assets/gal-LSFmag.png',
						alt: 'LSF Magazine spreads'
					},
					imagePosition: 'left'
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
