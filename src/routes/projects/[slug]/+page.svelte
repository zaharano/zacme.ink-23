<script lang="ts">
	import ContentBlock from '$lib/components/project/ContentBlock.svelte';

	export let data;
	const { project } = data;
</script>

<svelte:head>
	<title>{project.title} - Zach's Portfolio</title>
	<meta name="description" content={project.subtitle} />
</svelte:head>

<div class="project-page">
	<a href="/#projects" class="back-link">← Back to projects</a>

	<div class="hero">
		<img src={project.heroImage} alt={project.title} />
		<div class="hero-text">
			<h1>{project.title}</h1>
			{#if project.subtitle}
				<p class="subtitle">{project.subtitle}</p>
			{/if}
		</div>
	</div>

	<div class="content">
		{#each project.blocks as block}
			<ContentBlock {block} />
		{/each}
	</div>
</div>

<style>
	.project-page {
		min-height: 100vh;
	}

	.back-link {
		display: inline-block;
		margin: 2rem 0 0 2rem;
		color: var(--gray);
		text-decoration: none;
		border-bottom: 2px solid var(--acct);
		font-size: 1.1em;
		transition: border-bottom-color 0.2s;
	}

	.back-link:hover {
		border-bottom-color: var(--gray);
	}

	.hero {
		position: relative;
		max-width: 1400px;
		margin: 2rem auto 0;
		padding: 0 1rem;
	}

	.hero img {
		width: 100%;
		border: var(--border);
		border-bottom: 4px solid var(--gray);
		border-radius: 10px;
		box-shadow: 0 0 40px 0 rgba(0, 0, 0, 0.15);
	}

	.hero-text {
		text-align: center;
		margin-top: 2rem;
	}

	h1 {
		font-size: 2.5em;
		margin-bottom: 0.5rem;
		line-height: 1.2;
	}

	.subtitle {
		font-size: 1.3em;
		opacity: 0.7;
		font-style: italic;
		margin-bottom: 0;
	}

	.content {
		margin-top: 2rem;
		margin-bottom: 4rem;
	}

	@media (max-width: 768px) {
		h1 {
			font-size: 2em;
		}

		.subtitle {
			font-size: 1.1em;
		}

		.back-link {
			margin-left: 1rem;
		}
	}
</style>
