<script lang="ts">
	import { onMount } from 'svelte';
	import { gsap } from 'gsap';
	import { ScrollTrigger } from 'gsap/ScrollTrigger';

	export let data: {
		challenge: {
			heading?: string;
			text: string;
		};
		solution: {
			heading?: string;
			text: string;
		};
		layout?: 'stacked' | 'sideBySide';
	};

	const layout = data.layout || 'stacked';
	let container: HTMLElement;

	onMount(() => {
		gsap.registerPlugin(ScrollTrigger);

		// Animate challenge section
		gsap.from('.challenge-section', {
			opacity: 0,
			x: -40,
			duration: 0.8,
			ease: 'power2.out',
			scrollTrigger: {
				trigger: container,
				start: 'top 70%',
				once: true
			}
		});

		// Animate solution section with delay
		gsap.from('.solution-section', {
			opacity: 0,
			x: 40,
			duration: 0.8,
			delay: 0.2,
			ease: 'power2.out',
			scrollTrigger: {
				trigger: container,
				start: 'top 70%',
				once: true
			}
		});
	});
</script>

<div class="challenge-block" class:side-by-side={layout === 'sideBySide'} bind:this={container}>
	<div class="challenge-section">
		<div class="section-label">Challenge</div>
		<h3>{data.challenge.heading || 'The Problem'}</h3>
		<div class="section-text">
			<!-- eslint-disable-next-line svelte/no-at-html-tags -->
			{@html data.challenge.text}
		</div>
	</div>

	<div class="solution-section">
		<div class="section-label">Solution</div>
		<h3>{data.solution.heading || 'The Approach'}</h3>
		<div class="section-text">
			<!-- eslint-disable-next-line svelte/no-at-html-tags -->
			{@html data.solution.text}
		</div>
	</div>
</div>

<style>
	.challenge-block {
		margin: 6rem auto;
		max-width: 1200px;
		padding: 0 1rem;
		display: flex;
		flex-direction: column;
		gap: 3rem;
	}

	.challenge-block.side-by-side {
		flex-direction: row;
		gap: 4rem;
	}

	.challenge-section,
	.solution-section {
		flex: 1;
		background: var(--gray-glass);
		padding: 2rem;
	}

	.section-label {
		font-size: 0.8em;
		text-transform: uppercase;
		letter-spacing: 0.1em;
		font-weight: bold;
		margin-bottom: 1rem;
		opacity: 0.5;
	}

	h3 {
		font-size: 1.5em;
		margin-bottom: 1rem;
		line-height: 1.3;
	}

	.section-text {
		line-height: 1.7;
		opacity: 0.9;
		font-size: 1em;
		text-align: left;
	}

	.section-text :global(p) {
		margin-bottom: 1rem;
	}

	.section-text :global(p:last-child) {
		margin-bottom: 0;
	}

	.section-text :global(ul),
	.section-text :global(ol) {
		margin: 1rem 0;
		padding-left: 1.5rem;
	}

	.section-text :global(li) {
		margin-bottom: 0.5rem;
	}

	@media (max-width: 900px) {
		.challenge-block.side-by-side {
			flex-direction: column;
			gap: 3rem;
		}

		h3 {
			font-size: 1.5em;
		}
	}
</style>
