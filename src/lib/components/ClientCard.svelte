<script lang="ts">
	import Button from './Button.svelte';
	import IntersectionObserver from './IntersectionObserver.svelte';

	export let src = '';
	export let alt = '';
	export let tags: string[] = [];
	export let title = '';
	export let body = '';
	export let button = { txt: '', href: '' };
	export let slug = '';
	export let hasOnsitePage = false;
	export let secondButton: { txt: string; href: string } | undefined = undefined;
	export let index = 0;

	const primaryButton = hasOnsitePage ? { txt: 'view work', href: `/work/${slug}` } : button;

	let imgLoaded = false;
</script>

<IntersectionObserver once={true} let:intersecting>
	<div class="client-card" class:reverse={index % 2 !== 0} class:imgLoaded>
		<div class="image-container">
			{#if intersecting}
				<img
					{src}
					{alt}
					on:load={() => (imgLoaded = true)}
					class:loaded={imgLoaded}
				/>
			{:else}
				<div class="placeholder" />
			{/if}
		</div>
		<div class="content-container">
			<div class="tags">
				{#each tags as tag, i}
					<span class="sc">
						{tag}{#if i < tags.length - 1}&nbsp;//&nbsp;{/if}
					</span>
				{/each}
			</div>
			<h2>{title}</h2>
			<p>{body}</p>
			<div class="actions">
				<Button {...primaryButton} />
				{#if secondButton}
					<Button {...secondButton} />
				{/if}
			</div>
		</div>
	</div>
</IntersectionObserver>

<style>
	.client-card {
		display: grid;
		grid-template-columns: 1fr;
		width: 100%;
		margin-bottom: 4rem;
		border: var(--border);
		border-bottom: 4px solid var(--gray);
		border-radius: 12px;
		overflow: hidden;
		background: #fff; /* Explicit white background against the cream body */
		box-shadow: 0 4px 20px rgba(0, 0, 0, 0.05);
		opacity: 0;
		transform: translateY(30px);
		transition:
			opacity 0.6s ease-out,
			transform 0.6s ease-out;
	}

	.client-card.imgLoaded {
		opacity: 1;
		transform: translateY(0);
	}

	.image-container {
		height: 250px;
		width: 100%;
		overflow: hidden;
		position: relative;
		background-color: var(--gray-glass);
	}

	.image-container img {
		width: 100%;
		height: 100%;
		object-fit: cover;
		transition:
			transform 0.8s ease,
			opacity 0.5s ease;
		opacity: 0;
	}

	.image-container img.loaded {
		opacity: 1;
	}

	.client-card:hover .image-container img {
		transform: scale(1.03);
	}

	.content-container {
		padding: 2rem;
		display: flex;
		flex-direction: column;
		justify-content: center;
	}

	.tags {
		color: var(--acct);
		font-size: 0.9rem;
		margin-bottom: 0.8rem;
		display: block;
	}

	h2 {
		font-family: Shackleton, serif;
		font-size: 2.2rem;
		margin-bottom: 1rem;
		color: var(--gray);
		line-height: 1.1;
	}

	p {
		font-size: 1.1rem;
		line-height: 1.6;
		margin-bottom: 2rem;
		opacity: 0.9;
	}

	.actions {
		display: flex;
		flex-wrap: wrap;
		gap: 1rem;
		margin-top: auto;
	}

	@media (min-width: 1000px) {
		.client-card {
			grid-template-columns: 1fr 600px;
			grid-template-areas: 'image content';
			min-height: 450px;
		}

		.image-container {
			grid-area: image;
			height: 100%;
			border-right: var(--border);
		}

		.content-container {
			grid-area: content;
			padding: 4rem;
		}

		.client-card.reverse {
			grid-template-columns: 600px 1fr;
			grid-template-areas: 'content image';
		}

		.client-card.reverse .image-container {
			border-right: none;
			border-left: var(--border);
		}

		h2 {
			font-size: 3rem;
		}
	}
</style>
