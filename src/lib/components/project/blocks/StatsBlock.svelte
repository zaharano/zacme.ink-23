<script lang="ts">
	import { onMount } from 'svelte';
	import { gsap } from 'gsap';
	import { ScrollTrigger } from 'gsap/ScrollTrigger';

	export let data: {
		client?: string;
		year?: string;
		role?: string;
		tools?: string[];
	};

	let container: HTMLElement;

	onMount(() => {
		gsap.registerPlugin(ScrollTrigger);

		// Staggered elastic bounce animation
		gsap.from('.stat-card', {
			scale: 0,
			opacity: 0,
			stagger: 0.1,
			duration: 0.8,
			ease: 'elastic.out(1, 0.5)',
			scrollTrigger: {
				trigger: container,
				start: 'top 70%',
				once: true
			}
		});
	});
</script>

<div class="stats-block" bind:this={container}>
	{#if data.client}
		<div class="stat-card">
			<div class="stat-label">Client</div>
			<div class="stat-value">{data.client}</div>
		</div>
	{/if}

	{#if data.year}
		<div class="stat-card">
			<div class="stat-label">Year</div>
			<div class="stat-value">{data.year}</div>
		</div>
	{/if}

	{#if data.role}
		<div class="stat-card">
			<div class="stat-label">Role</div>
			<div class="stat-value">{data.role}</div>
		</div>
	{/if}

	{#if data.tools}
		<div class="stat-card">
			<div class="stat-label">Tools</div>
			<div class="stat-value">{data.tools.join(', ')}</div>
		</div>
	{/if}
</div>

<style>
	.stats-block {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
		gap: 1.5rem;
		margin: 3rem auto;
		max-width: 1200px;
		padding: 0 1rem;
	}

	.stat-card {
		background: white;
		border: var(--border);
		border-bottom: 4px solid var(--gray);
		border-radius: 10px;
		padding: 1.5rem;
		text-align: center;
		box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.05);
	}

	.stat-label {
		font-family: 'Vollkorn SC', serif;
		font-variant-caps: small-caps;
		font-size: 0.9em;
		opacity: 0.6;
		margin-bottom: 0.5rem;
	}

	.stat-value {
		font-weight: 600;
		font-size: 1.1em;
		line-height: 1.4;
	}

	@media (max-width: 600px) {
		.stats-block {
			grid-template-columns: 1fr;
		}
	}
</style>
