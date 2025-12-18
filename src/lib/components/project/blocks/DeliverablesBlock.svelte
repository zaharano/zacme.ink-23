<script lang="ts">
	import { onMount } from 'svelte';
	import { gsap } from 'gsap';
	import { ScrollTrigger } from 'gsap/ScrollTrigger';

	export let data: {
		heading?: string;
		items: string[];
	};

	let container: HTMLElement;

	onMount(() => {
		gsap.registerPlugin(ScrollTrigger);

		// Staggered fade up animation for list items
		gsap.from('.deliverable-item', {
			opacity: 0,
			y: 20,
			stagger: 0.08,
			duration: 0.6,
			ease: 'power2.out',
			scrollTrigger: {
				trigger: container,
				start: 'top 70%',
				once: true
			}
		});
	});
</script>

<div class="deliverables-block" bind:this={container}>
	{#if data.heading}
		<h2>{data.heading}</h2>
	{/if}
	<ol>
		{#each data.items as item}
			<li class="deliverable-item">{item}</li>
		{/each}
	</ol>
</div>

<style>
	.deliverables-block {
		margin: 4rem auto;
		max-width: 800px;
		padding: 0 1rem;
	}

	h2 {
		margin-bottom: 1.5rem;
	}

	ol {
		list-style: none;
		counter-reset: item;
		padding: 0;
	}

	.deliverable-item {
		counter-increment: item;
		font-size: 0.95em;
		line-height: 1.6;
		margin-bottom: 0.6rem;
		opacity: 0.85;
		text-align: left;
		display: flex;
		gap: 1rem;
	}

	.deliverable-item::before {
		content: '0' counter(item) '.';
		font-weight: 600;
		flex-shrink: 0;
		width: 2rem;
	}

	.deliverable-item:nth-child(n + 10)::before {
		content: counter(item) '.';
	}

	@media (max-width: 768px) {
		.deliverables-block {
			margin: 3rem auto;
		}

		.deliverable-item {
			font-size: 0.9em;
		}
	}
</style>
