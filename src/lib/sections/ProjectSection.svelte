<script>
	import ProjectCard from '../components/ProjectCard.svelte';
	import SectionHead from '../components/SectionHead.svelte';
	import contentStream from '../content/projectContent.js';
	export let projects = [
		{
			src: './assets/Enterprise_HD.jpg',
			alt: 'The Starship Enterprise',
			tags: ['these', 'are', 'voyages'],
			title: 'Shakar, when the walls fell',
			body: 'Communication is not possible. The shuttle has no power. Using the gravitational pull of a star to slingshot back in time?',
			button: {
				txt: 'Make it so',
				href: 'http://www.startrek.com'
			}
		},
		{
			src: './assets/Enterprise_HD.jpg',
			alt: 'The Starship Enterprise',
			tags: ['these', 'are'],
			title: 'Shakar',
			body: 'Thee gravitational pull of a star to slingshot back in time?',
			button: {
				txt: 'Make it so',
				href: 'http://www.startrek.com'
			}
		}
	];

	if (contentStream) {
		projects = contentStream;
	}
</script>

<section>
	<SectionHead id="projects" text="Projects" />
	<div class="gallery">
		{#each projects as project, i}
			<ProjectCard {...project} />
		{/each}
	</div>
</section>

<style>
	/* flexbox version */
	/* .gallery {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    margin: auto; minmax(300px, 627px)
  } */

	/* @media (min-width: 1000px) {
    .gallery {
      grid-template-columns: var(--colsize) var(--colsize);
    }
  }

  @media (min-width: 1595px) {
    .gallery {
      grid-template-columns: var(--colsize) var(--colsize) var(--colsize);
    }
  } */
	/* 
  :global(.gallery > div) {
    width: 49%;
  } */

	/* @media (max-width: 1000px) {
    :global(.gallery > div) {
      width: 95%;
      margin-right: auto;
      margin-left: auto;
    }
  }

  @media (min-width: 1595px) {
    :global(.gallery > div) {
      width: 32.5%;
    }
  } */

	/* grid version */
	.gallery {
		--colsize: minmax(90vw, 1fr);
		display: grid;
		grid-gap: 2.5vw;
		grid-template-columns: repeat(auto-fill, var(--colsize));
		font-size: 20px;
	}

	@media (min-width: 480px) {
		.gallery {
			--colsize: minmax(375px, 1fr);
		}
	}
</style>
