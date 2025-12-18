<script lang="ts">
	import { onMount } from 'svelte';
	import { gsap } from 'gsap';
	import { ScrollTrigger } from 'gsap/ScrollTrigger';

	export let data: {
		heading?: string;
		text: string;
		image: { src: string; alt: string };
		imagePosition?: 'left' | 'right';
	};

	const imagePosition = data.imagePosition || 'right';
	let container: HTMLElement;

	onMount(() => {
		gsap.registerPlugin(ScrollTrigger);

		// Fade in on scroll
		gsap.from(container, {
			opacity: 0,
			y: 40,
			duration: 0.8,
			ease: 'power2.out',
			scrollTrigger: {
				trigger: container,
				start: 'top 75%',
				once: true
			}
		});
	});
</script>

<div class="text-image-block" class:reverse={imagePosition === 'left'} bind:this={container}>
	<div class="text-content">
		{#if data.heading}
			<h2>{data.heading}</h2>
		{/if}
		<div class="text">
			<!-- eslint-disable-next-line svelte/no-at-html-tags -->
			{@html data.text}
		</div>
	</div>
	<div class="image-content">
		<img src={data.image.src} alt={data.image.alt} />
	</div>
</div>

<style>
	.text-image-block {
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: 3rem;
		align-items: center;
		margin: 6rem auto;
		max-width: 1200px;
		padding: 0 1rem;
	}

	.text-image-block.reverse {
		direction: rtl;
	}

	.text-image-block.reverse > * {
		direction: ltr;
	}

	.text-content h2 {
		font-size: 1.5em;
		margin-bottom: 1rem;
		line-height: 1.3;
	}

	.text-content .text {
		line-height: 1.7;
		opacity: 0.9;
		text-align: left;
	}

	.text-content :global(p) {
		margin-bottom: 1rem;
	}

	.text-content :global(p:last-child) {
		margin-bottom: 0;
	}

	.image-content {
		border: var(--border);
		border-bottom: 4px solid var(--gray);
		border-radius: 10px;
		overflow: hidden;
		box-shadow: 0 0 30px 0 rgba(0, 0, 0, 0.1);
	}

	.image-content img {
		width: 100%;
		height: auto;
		display: block;
	}

	@media (max-width: 900px) {
		.text-image-block {
			grid-template-columns: 1fr;
			gap: 2rem;
		}

		.text-image-block.reverse {
			direction: ltr;
		}
	}
</style>
