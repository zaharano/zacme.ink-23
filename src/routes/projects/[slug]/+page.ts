import { error } from '@sveltejs/kit';
import { projectDetails } from '$lib/content/projectDetails.js';

export const prerender = true;

export function load({ params }) {
	const { slug } = params;

	const project = projectDetails[slug as keyof typeof projectDetails];

	if (!project) {
		throw error(404, 'Project not found');
	}

	return {
		project
	};
}

// Tell SvelteKit which slugs to prerender
export function entries() {
	return Object.keys(projectDetails).map((slug) => ({ slug }));
}
