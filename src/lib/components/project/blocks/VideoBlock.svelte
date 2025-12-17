<script lang="ts">
	import { onMount } from 'svelte';
	import { gsap } from 'gsap';
	import { ScrollTrigger } from 'gsap/ScrollTrigger';

	export let data: {
		src: string;
		poster?: string;
		caption?: string;
		autoplay?: boolean;
		loop?: boolean;
	};

	const autoplay = data.autoplay !== false; // default true
	const loop = data.loop !== false; // default true
	let container: HTMLElement;

	onMount(() => {
		gsap.registerPlugin(ScrollTrigger);

		gsap.from(container, {
			opacity: 0,
			y: 40,
			duration: 0.8,
			ease: 'power2.out',
			scrollTrigger: {
				trigger: container,
				start: 'top 75%',
				once: true
			}
		});
	});
</script>

<div class="video-block" bind:this={container}>
	<div class="video-wrapper">
		<video
			src={data.src}
			poster={data.poster}
			{autoplay}
			{loop}
			muted
			playsinline
			controls={!autoplay}
		>
			<track kind="captions" />
		</video>
	</div>
	{#if data.caption}
		<p class="caption">{data.caption}</p>
	{/if}
</div>

<style>
	.video-block {
		margin: 3rem auto;
		max-width: 1200px;
		padding: 0 1rem;
	}

	.video-wrapper {
		border: var(--border);
		border-bottom: 4px solid var(--gray);
		border-radius: 10px;
		overflow: hidden;
		box-shadow: 0 0 30px 0 rgba(0, 0, 0, 0.1);
		background: white;
	}

	video {
		width: 100%;
		height: auto;
		display: block;
	}

	.caption {
		text-align: center;
		font-style: italic;
		opacity: 0.7;
		margin-top: 1rem;
	}
</style>
