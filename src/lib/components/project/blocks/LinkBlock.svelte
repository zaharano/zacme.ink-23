<script lang="ts">
	import Button from '../../Button.svelte';

	export let data: {
		primary?: { text: string; href: string };
		secondary?: { text: string; href: string };
	};
</script>

<div class="link-block">
	<div class="buttons">
		{#if data.primary}
			<Button txt={data.primary.text} href={data.primary.href} />
		{/if}
		{#if data.secondary}
			<Button txt={data.secondary.text} href={data.secondary.href} />
		{/if}
	</div>
</div>

<style>
	.link-block {
		margin: 6rem auto;
		max-width: 800px;
		padding: 0 1rem;
	}

	.buttons {
		display: flex;
		gap: 1rem;
		justify-content: center;
		flex-wrap: wrap;
	}
</style>
