<script lang="ts">
	import StatsBlock from './blocks/StatsBlock.svelte';
	import ComingSoonBlock from './blocks/ComingSoonBlock.svelte';
	import GalleryBlock from './blocks/GalleryBlock.svelte';
	import LinkBlock from './blocks/LinkBlock.svelte';
	import TextImageBlock from './blocks/TextImageBlock.svelte';
	import FullBleedBlock from './blocks/FullBleedBlock.svelte';
	import VideoBlock from './blocks/VideoBlock.svelte';
	import OutcomesBlock from './blocks/OutcomesBlock.svelte';
	import ChallengeBlock from './blocks/ChallengeBlock.svelte';
	import ProcessBlock from './blocks/ProcessBlock.svelte';
	import DeliverablesBlock from './blocks/DeliverablesBlock.svelte';

	export let block: {
		type: string;
		// eslint-disable-next-line @typescript-eslint/no-explicit-any
		data?: any;
	};
</script>

{#if block.type === 'stats'}
	<StatsBlock data={block.data} />
{:else if block.type === 'gallery'}
	<GalleryBlock data={block.data} />
{:else if block.type === 'link'}
	<LinkBlock data={block.data} />
{:else if block.type === 'textImage'}
	<TextImageBlock data={block.data} />
{:else if block.type === 'fullBleed'}
	<FullBleedBlock data={block.data} />
{:else if block.type === 'video'}
	<VideoBlock data={block.data} />
{:else if block.type === 'outcomes'}
	<OutcomesBlock data={block.data} />
{:else if block.type === 'challenge'}
	<ChallengeBlock data={block.data} />
{:else if block.type === 'process'}
	<ProcessBlock data={block.data} />
{:else if block.type === 'deliverables'}
	<DeliverablesBlock data={block.data} />
{:else if block.type === 'comingSoon'}
	<ComingSoonBlock />
{:else}
	<!-- Unknown block type -->
	<div class="unknown-block">
		<p>Unknown block type: {block.type}</p>
	</div>
{/if}

<style>
	.unknown-block {
		padding: 2rem;
		text-align: center;
		opacity: 0.5;
	}
</style>
