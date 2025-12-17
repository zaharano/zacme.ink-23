<script lang="ts">
	import { createEventDispatcher } from 'svelte';

	export let exclude: HTMLElement[] = [];

	let child: HTMLElement;

	const dispatch = createEventDispatcher();

	function isExcluded(target: Node | null) {
		let parent = target;

		while (parent) {
			if (exclude.indexOf(parent as HTMLElement) >= 0 || parent === child) {
				return true;
			}

			parent = parent.parentNode;
		}

		return false;
	}

	function onClickOutside(event: MouseEvent) {
		if (!isExcluded(event.target as Node)) {
			dispatch('clickoutside');
		}
	}
</script>

<svelte:body on:click={onClickOutside} />
<div bind:this={child}>
	<slot />
</div>
