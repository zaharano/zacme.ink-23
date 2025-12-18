import { error } from '@sveltejs/kit';
import { clientDetails } from '$lib/content/clientDetails.js';

export const prerender = true;

export function load({ params }) {
	const { slug } = params;

	const client = clientDetails[slug as keyof typeof clientDetails];

	if (!client) {
		throw error(404, 'Client not found');
	}

	return {
		client
	};
}

// Tell SvelteKit which slugs to prerender
export function entries() {
	return Object.keys(clientDetails).map((slug) => ({ slug }));
}
