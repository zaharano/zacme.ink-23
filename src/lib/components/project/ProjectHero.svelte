<script lang="ts">
	import { onMount } from 'svelte';
	import { gsap } from 'gsap';

	export let title: string;
	export let subtitle: string | undefined = undefined;
	export let heroImage: string;

	let heroContainer: HTMLElement;

	onMount(() => {
		const tl = gsap.timeline();

		// Fade and scale in the hero image
		tl.from('.hero-image-wrapper', {
			opacity: 0,
			scale: 0.95,
			duration: 1,
			ease: 'power2.out'
		});

		// Slide up the text overlay with delay
		tl.from(
			'.hero-title',
			{
				opacity: 0,
				y: 40,
				duration: 0.8,
				ease: 'power2.out'
			},
			'-=0.5'
		);

		if (subtitle) {
			tl.from(
				'.hero-subtitle',
				{
					opacity: 0,
					y: 30,
					duration: 0.7,
					ease: 'power2.out'
				},
				'-=0.6'
			);
		}
	});
</script>

<div class="project-hero" bind:this={heroContainer}>
	<div class="hero-image-wrapper">
		<img src={heroImage} alt={title} class="hero-image" />
		<div class="hero-overlay"></div>
	</div>
	<div class="hero-text">
		<h1 class="hero-title">{title}</h1>
		{#if subtitle}
			<p class="hero-subtitle">{subtitle}</p>
		{/if}
	</div>
</div>

<style>
	.project-hero {
		position: relative;
		width: 100%;
		min-height: 60vh;
		display: flex;
		align-items: center;
		justify-content: center;
		margin-bottom: 4rem;
		overflow: hidden;
	}

	.hero-image-wrapper {
		position: absolute;
		inset: 0;
		border: var(--border);
		border-bottom: 6px solid var(--gray);
		border-radius: 12px;
		overflow: hidden;
		box-shadow: 0 10px 50px 0 rgba(0, 0, 0, 0.15);
	}

	.hero-image {
		width: 100%;
		height: 100%;
		object-fit: cover;
		display: block;
	}

	.hero-overlay {
		position: absolute;
		inset: 0;
		background: linear-gradient(
			to bottom,
			rgba(0, 0, 0, 0) 0%,
			rgba(0, 0, 0, 0.3) 50%,
			rgba(0, 0, 0, 0.7) 100%
		);
	}

	.hero-text {
		position: relative;
		z-index: 2;
		text-align: center;
		padding: 2rem;
		max-width: 900px;
		color: white;
		text-shadow: 0 2px 20px rgba(0, 0, 0, 0.5);
	}

	.hero-title {
		font-size: clamp(2.5rem, 5vw, 4rem);
		line-height: 1.1;
		margin-bottom: 1rem;
		font-weight: bold;
	}

	.hero-subtitle {
		font-size: clamp(1.2rem, 2.5vw, 1.8rem);
		line-height: 1.4;
		opacity: 0.95;
		font-weight: 300;
	}

	@media (max-width: 768px) {
		.project-hero {
			min-height: 50vh;
		}

		.hero-text {
			padding: 1.5rem;
		}
	}
</style>
