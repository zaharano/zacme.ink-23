<script>
	import Hero from '../lib/sections/Hero.svelte';
	import FigSection from '../lib/sections/FigSection.svelte';
	import ProjectSection from '../lib/sections/ProjectSection.svelte';
	import AboutSection from '../lib/sections/AboutSection.svelte';
	import ContactSection from '../lib/sections/ContactSection.svelte';
</script>

<svelte:head>
	<link
		href="https://fonts.googleapis.com/css2?family=Vollkorn+SC:wght@600&family=Vollkorn:ital,wght@0,400;0,600;1,400&display=swap"
		rel="stylesheet"
	/>
	<link rel="stylesheet" href="https://use.typekit.net/plt5xkx.css" />
	<title>Zach's Portfolio</title>
	<meta name="description" content="Zach brags about doing things" />
</svelte:head>

<main id="main">
	<Hero />
	<FigSection />
	<ProjectSection />
	<AboutSection />
	<ContactSection />
</main>
