<script>
	import ClientCard from '../components/ClientCard.svelte';
	import ProjectCard from '../components/ProjectCard.svelte';
	import SectionHead from '../components/SectionHead.svelte';
	import { clients, personalProjects } from '../content/projectContent.js';
</script>

<section>
	<SectionHead id="clients" text="Selected Work" />
	<div class="client-list">
		{#each clients as client, i}
			<ClientCard {...client} index={i} />
		{/each}
	</div>

	<SectionHead id="projects" text="Personal Projects" />
	<div class="gallery">
		{#each personalProjects as project}
			<ProjectCard {...project} />
		{/each}
	</div>
</section>

<style>
	.client-list {
		display: flex;
		flex-direction: column;
		width: 100%;
		max-width: 1600px;
		margin: 0 auto 6rem auto;
		padding: 0 5vw;
		box-sizing: border-box;
	}

	/* grid version for personal projects */
	.gallery {
		--colsize: minmax(90vw, 1fr);
		display: grid;
		grid-gap: 2.5vw;
		grid-template-columns: repeat(auto-fill, var(--colsize));
		font-size: 20px;
		width: 100%;
		padding: 0 2.5vw; /* Little padding */
		box-sizing: border-box;
	}

	@media (min-width: 480px) {
		.gallery {
			--colsize: minmax(375px, 1fr);
		}
	}

	@media (min-width: 1000px) {
		.client-list {
			padding: 0 4rem;
		}
	}
</style>