<script lang="ts">
	import { onMount } from 'svelte';
	import { gsap } from 'gsap';
	import { ScrollTrigger } from 'gsap/ScrollTrigger';

	export let data: {
		heading?: string;
		phases: Array<{
			title: string;
			description: string;
			icon?: string;
		}>;
		layout?: 'timeline' | 'steps';
	};

	const layout = data.layout || 'timeline';
	let container: HTMLElement;

	onMount(() => {
		gsap.registerPlugin(ScrollTrigger);

		// Animate heading
		gsap.from('.process-header', {
			opacity: 0,
			y: 30,
			duration: 0.6,
			ease: 'power2.out',
			scrollTrigger: {
				trigger: container,
				start: 'top 70%',
				once: true
			}
		});

		// Stagger phase cards
		gsap.from('.phase-card', {
			opacity: 0,
			y: 40,
			stagger: 0.15,
			duration: 0.7,
			ease: 'power2.out',
			scrollTrigger: {
				trigger: '.phases-container',
				start: 'top 75%',
				once: true
			}
		});

		// Animate connector lines for timeline layout
		if (layout === 'timeline') {
			gsap.from('.connector', {
				scaleX: 0,
				stagger: 0.15,
				duration: 0.5,
				ease: 'power2.out',
				scrollTrigger: {
					trigger: '.phases-container',
					start: 'top 75%',
					once: true
				}
			});
		}
	});
</script>

<div class="process-block" class:timeline={layout === 'timeline'} bind:this={container}>
	<div class="process-header">
		<h2>{data.heading || 'Process'}</h2>
	</div>

	<div class="phases-container">
		{#each data.phases as phase, index}
			<div class="phase-card">
				<div class="phase-number">{index + 1}</div>
				<h3 class="phase-title">{phase.title}</h3>
				<p class="phase-description">{phase.description}</p>
			</div>
			{#if layout === 'timeline' && index < data.phases.length - 1}
				<div class="connector"></div>
			{/if}
		{/each}
	</div>
</div>

<style>
	.process-block {
		margin: 6rem auto;
		max-width: 1200px;
		padding: 0 1rem;
	}

	.process-header {
		text-align: center;
		margin-bottom: 3rem;
	}

	.process-header h2 {
		font-size: 1.8em;
		line-height: 1.3;
	}

	.phases-container {
		display: flex;
		flex-direction: column;
		gap: 2rem;
	}

	.timeline .phases-container {
		flex-direction: row;
		align-items: flex-start;
		gap: 0;
	}

	.phase-card {
		background: white;
		border: var(--border);
		border-bottom: 4px solid var(--gray);
		border-radius: 10px;
		padding: 2rem;
		box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.08);
		transition: transform 0.3s ease;
		position: relative;
	}

	.phase-card:hover {
		transform: translateY(-4px);
	}

	.timeline .phase-card {
		flex: 1;
		min-width: 0;
	}

	.phase-number {
		width: 36px;
		height: 36px;
		display: flex;
		align-items: center;
		justify-content: center;
		border-radius: 50%;
		margin: 0 0 1rem;
		font-size: 0.9em;
		font-weight: bold;
		background: var(--gray);
		color: white;
	}

	.phase-title {
		font-size: 1.2em;
		margin-bottom: 0.75rem;
		text-align: left;
		line-height: 1.3;
		font-weight: 600;
	}

	.phase-description {
		line-height: 1.6;
		opacity: 0.8;
		text-align: left;
		font-size: 0.95em;
	}

	.connector {
		flex-shrink: 0;
		width: 40px;
		height: 2px;
		background: var(--gray);
		align-self: center;
		margin-top: 30px;
		transform-origin: left center;
	}

	@media (max-width: 900px) {
		.timeline .phases-container {
			flex-direction: column;
			gap: 2rem;
		}

		.connector {
			display: none;
		}

		.process-header h2 {
			font-size: 2em;
		}

		.phase-card {
			padding: 1.5rem;
		}
	}
</style>
