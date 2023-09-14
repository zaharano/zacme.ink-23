<script>
	import Header from './Header.svelte';
	import Footer from '../lib/components/Footer.svelte';
	import './styles.css';
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

<div class="app">
	<Header />

	<main>
		<slot />
	</main>

	<Footer />
</div>

<style>
	main {
		text-align: center;
		margin: auto;
	}

	:global(section) {
		width: var(--pagewidth);
		max-width: 1400px;
		margin-left: auto;
		margin-right: auto;
		padding-left: 1em;
		padding-right: 1em;
		margin-top: 13vh;
	}
</style>
