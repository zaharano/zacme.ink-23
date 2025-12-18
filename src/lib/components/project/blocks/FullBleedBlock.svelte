<script lang="ts">
	import { onMount } from 'svelte';
	import { gsap } from 'gsap';
	import { ScrollTrigger } from 'gsap/ScrollTrigger';

	export let data: {
		src: string;
		alt: string;
		caption?: string;
	};

	let container: HTMLElement;

	onMount(() => {
		gsap.registerPlugin(ScrollTrigger);

		// Fade in and slight scale on scroll
		gsap.from(container, {
			opacity: 0,
			scale: 0.98,
			duration: 1,
			ease: 'power2.out',
			scrollTrigger: {
				trigger: container,
				start: 'top 70%',
				once: true
			}
		});
	});
</script>

<div class="full-bleed-block" bind:this={container}>
	<img src={data.src} alt={data.alt} />
	{#if data.caption}
		<p class="caption">{data.caption}</p>
	{/if}
</div>

<style>
	.full-bleed-block {
		margin: 6rem 0;
		max-width: 100vw;
	}

	.full-bleed-block img {
		width: 100%;
		height: auto;
		display: block;
	}

	.caption {
		text-align: center;
		font-style: italic;
		opacity: 0.7;
		margin-top: 1rem;
		padding: 0 1rem;
	}
</style>
