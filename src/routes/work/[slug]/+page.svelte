<script lang="ts">
	import { onMount } from 'svelte';
	import { gsap } from 'gsap';
	import { ScrollTrigger } from 'gsap/ScrollTrigger';
	import ContentBlock from '$lib/components/project/ContentBlock.svelte';
	import BackButton from '$lib/components/project/BackButton.svelte';

	export let data;
	const { client } = data;

	onMount(() => {
		gsap.registerPlugin(ScrollTrigger);

		// Refresh ScrollTrigger after content loads to fix animation positioning
		setTimeout(() => {
			ScrollTrigger.refresh();
		}, 100);
	});
</script>

<svelte:head>
	<title>{client.title} - Zach's Portfolio</title>
	<meta name="description" content={client.subtitle} />
</svelte:head>

<div class="client-page">
	<div class="back-button-container">
		<BackButton />
	</div>

	<header class="client-header">
		<h1>{client.title}</h1>
		{#if client.subtitle}
			<p class="subtitle">{client.subtitle}</p>
		{/if}
	</header>

	<div class="content">
		{#each client.blocks as block}
			<ContentBlock {block} />
		{/each}
	</div>
</div>

<style>
	.client-page {
		min-height: 100vh;
		max-width: 1400px;
		margin: 0 auto;
		padding: 0 1rem;
	}

	.back-button-container {
		padding-top: 2rem;
	}

	.client-header {
		margin-top: 3rem;
		margin-bottom: 3rem;
	}

	.client-header h1 {
		margin-bottom: 0.5rem;
	}

	.client-header .subtitle {
		font-size: 1.2em;
		opacity: 0.8;
		line-height: 1.5;
	}

	.content {
		margin-bottom: 4rem;
	}

	@media (max-width: 768px) {
		.back-button-container {
			padding-top: 1.5rem;
		}

		.client-header {
			margin-top: 2rem;
			margin-bottom: 2rem;
		}
	}
</style>
