<script lang="ts">
	import { onMount } from 'svelte';
	import { gsap } from 'gsap';
	import { ScrollTrigger } from 'gsap/ScrollTrigger';
	import ContentBlock from '$lib/components/project/ContentBlock.svelte';
	import ProjectHero from '$lib/components/project/ProjectHero.svelte';
	import BackButton from '$lib/components/project/BackButton.svelte';

	export let data;
	const { project } = data;

	onMount(() => {
		gsap.registerPlugin(ScrollTrigger);

		// Refresh ScrollTrigger after content loads to fix animation positioning
		setTimeout(() => {
			ScrollTrigger.refresh();
		}, 100);
	});
</script>

<svelte:head>
	<title>{project.title} - Zach's Portfolio</title>
	<meta name="description" content={project.subtitle} />
</svelte:head>

<div class="project-page">
	<div class="back-button-container">
		<BackButton />
	</div>

	<ProjectHero title={project.title} subtitle={project.subtitle} heroImage={project.heroImage} />

	<div class="content">
		{#each project.blocks as block}
			<ContentBlock {block} />
		{/each}
	</div>
</div>

<style>
	.project-page {
		min-height: 100vh;
		max-width: 1400px;
		margin: 0 auto;
		padding: 0 1rem;
	}

	.back-button-container {
		padding-top: 2rem;
	}

	.content {
		margin-top: 2rem;
		margin-bottom: 4rem;
	}

	@media (max-width: 768px) {
		.back-button-container {
			padding-top: 1.5rem;
		}
	}
</style>
