import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vitest/config';

export default defineConfig({
	plugins: [sveltekit()],
	test: {
		include: ['src/**/*.{test,spec}.{js,ts}']
	},
	ssr: {
		noExternal: ['gsap', '@gsap/shockingly', 'sharp']
	}
});


sharp -i ~/static/assets -o ~/static/assets/test -f webp -q 75