<script lang="ts">
	import { onMount } from 'svelte';
	import { gsap } from 'gsap';
	import { ScrollTrigger } from 'gsap/ScrollTrigger';

	export let data: {
		heading?: string;
		summary: string;
		metrics: Array<{
			label: string;
			value: string;
			icon?: string;
		}>;
		quote?: {
			text: string;
			author: string;
			role?: string;
		};
	};

	let container: HTMLElement;

	onMount(() => {
		gsap.registerPlugin(ScrollTrigger);

		// Animate heading and summary
		gsap.from('.outcomes-header', {
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

		// Stagger metrics cards with elastic bounce
		gsap.from('.metric-card', {
			scale: 0,
			opacity: 0,
			stagger: 0.1,
			duration: 0.8,
			ease: 'elastic.out(1, 0.5)',
			scrollTrigger: {
				trigger: '.metrics-grid',
				start: 'top 75%',
				once: true
			}
		});

		// Animate quote if present
		if (data.quote) {
			gsap.from('.outcome-quote', {
				opacity: 0,
				y: 40,
				duration: 0.8,
				ease: 'power2.out',
				scrollTrigger: {
					trigger: '.outcome-quote',
					start: 'top 80%',
					once: true
				}
			});
		}
	});
</script>

<div class="outcomes-block" bind:this={container}>
	<div class="outcomes-header">
		<h2>{data.heading || 'Outcomes & Impact'}</h2>
		<p class="summary">{data.summary}</p>
	</div>

	<div class="metrics-grid">
		{#each data.metrics as metric}
			<div class="metric-card">
				{#if metric.icon}
					<div class="metric-icon">{metric.icon}</div>
				{/if}
				<div class="metric-value">{metric.value}</div>
				<div class="metric-label">{metric.label}</div>
			</div>
		{/each}
	</div>

	{#if data.quote}
		<blockquote class="outcome-quote">
			<p class="quote-text">"{data.quote.text}"</p>
			<footer>
				<cite class="quote-author">{data.quote.author}</cite>
				{#if data.quote.role}
					<span class="quote-role">{data.quote.role}</span>
				{/if}
			</footer>
		</blockquote>
	{/if}
</div>

<style>
	.outcomes-block {
		margin: 6rem auto;
		max-width: 1200px;
		padding: 0 1rem;
	}

	.outcomes-header {
		text-align: center;
		margin-bottom: 3rem;
	}

	.outcomes-header h2 {
		font-size: 1.8em;
		margin-bottom: 1rem;
		line-height: 1.3;
	}

	.summary {
		font-size: 1em;
		line-height: 1.7;
		opacity: 0.9;
		max-width: 700px;
		margin: 0 auto;
		text-align: left;
	}

	.metrics-grid {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
		gap: 2rem;
		margin: 3rem 0;
	}

	.metric-card {
		background: white;
		border: var(--border);
		border-bottom: 4px solid var(--gray);
		border-radius: 10px;
		padding: 2rem 1.5rem;
		text-align: center;
		box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.08);
		transition: transform 0.3s ease;
	}

	.metric-card:hover {
		transform: translateY(-4px);
	}

	.metric-icon {
		font-size: 2em;
		margin-bottom: 0.5rem;
	}

	.metric-value {
		font-size: 3em;
		font-weight: bold;
		color: var(--acct);
		margin-bottom: 0.5rem;
		line-height: 1;
	}

	.metric-label {
		font-size: 1em;
		opacity: 0.7;
		text-transform: uppercase;
		letter-spacing: 0.05em;
		font-size: 0.9em;
	}

	.outcome-quote {
		background: rgba(0, 0, 0, 0.02);
		border-left: 4px solid var(--acct);
		padding: 2rem 2.5rem;
		margin: 3rem auto 0;
		max-width: 800px;
		border-radius: 4px;
	}

	.quote-text {
		font-size: 1.3em;
		font-style: italic;
		line-height: 1.6;
		margin-bottom: 1rem;
	}

	.outcome-quote footer {
		display: flex;
		flex-direction: column;
		gap: 0.25rem;
	}

	.quote-author {
		font-weight: bold;
		font-style: normal;
	}

	.quote-role {
		opacity: 0.6;
		font-size: 0.9em;
	}

	@media (max-width: 768px) {
		.outcomes-header h2 {
			font-size: 2em;
		}

		.metrics-grid {
			grid-template-columns: 1fr;
			gap: 1.5rem;
		}

		.metric-value {
			font-size: 2.5em;
		}

		.outcome-quote {
			padding: 1.5rem;
		}

		.quote-text {
			font-size: 1.1em;
		}
	}
</style>
