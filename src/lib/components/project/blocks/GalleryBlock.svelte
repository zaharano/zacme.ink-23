<script lang="ts">
	import { onMount } from 'svelte';
	import { gsap } from 'gsap';
	import { ScrollTrigger } from 'gsap/ScrollTrigger';

	export let data: {
		images: Array<{ src: string; alt: string }>;
		columns?: number;
	};

	const columns = data.columns || 3;
	let container: HTMLElement;

	onMount(() => {
		gsap.registerPlugin(ScrollTrigger);

		// Staggered fade up on scroll
		ScrollTrigger.batch('.gallery-item', {
			onEnter: (elements) => {
				gsap.from(elements, {
					opacity: 0,
					y: 60,
					stagger: 0.15,
					duration: 0.8,
					ease: 'power2.out'
				});
			},
			start: 'top 80%',
			once: true
		});
	});
</script>

<div class="gallery-block" bind:this={container}>
	<div class="gallery" style="--columns: {columns}">
		{#each data.images as image}
			<div class="gallery-item">
				<img src={image.src} alt={image.alt} />
			</div>
		{/each}
	</div>
</div>

<style>
	.gallery-block {
		margin: 3rem auto;
		max-width: 1400px;
		padding: 0 1rem;
	}

	.gallery {
		display: grid;
		grid-template-columns: repeat(var(--columns), 1fr);
		gap: 1.5rem;
	}

	.gallery-item {
		border: var(--border);
		border-bottom: 4px solid var(--gray);
		border-radius: 10px;
		overflow: hidden;
		box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.1);
		background: white;
	}

	.gallery-item img {
		width: 100%;
		height: auto;
		display: block;
		transition: transform 0.3s ease;
	}

	.gallery-item:hover img {
		transform: scale(1.05);
	}

	@media (max-width: 900px) {
		.gallery {
			grid-template-columns: repeat(2, 1fr);
		}
	}

	@media (max-width: 600px) {
		.gallery {
			grid-template-columns: 1fr;
		}
	}
</style>
