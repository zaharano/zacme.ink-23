# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a personal portfolio website built with SvelteKit showcasing design, animation, and development work. The site features extensive GSAP animations and is deployed via Vercel.

## Development Commands

**Development server:**

```bash
npm run dev
# or with browser auto-open
npm run dev -- --open
```

**Build:**

```bash
npm run build
```

**Preview production build:**

```bash
npm run preview
```

**Type checking:**

```bash
npm run check
# or in watch mode
npm run check:watch
```

**Linting and formatting:**

```bash
npm run lint
npm run format
```

**Testing:**

```bash
npm run test              # runs both integration and unit tests
npm run test:integration  # Playwright tests
npm run test:unit         # Vitest tests
```

## Critical Setup Requirements

**GSAP Premium License:** This site uses Club Greensock premium features (DrawSVGPlugin, Physics2DPlugin, GSDevTools). A valid GSAP license key is required in `.npmrc` for installation and builds:

```
//npm.greensock.com/:_authToken=YOUR_TOKEN_HERE
@gsap:registry=https://npm.greensock.com
```

## Architecture

**Framework:** SvelteKit with TypeScript, adapter configured for Vercel deployment (svelte.config.js:3)

**Route structure:**

- `/` (src/routes/+page.svelte) - Main landing page composed of section components
- `/projects/[slug]/+page.svelte` - Individual project pages (currently being added)

**Component organization:**

- `src/lib/components/` - Reusable UI components (Button, SectionHead, IntersectionObserver, etc.)
- `src/lib/sections/` - Page sections (Hero, AboutSection, ProjectSection, FigSection, ContactSection)
- Components are composed on the main page in a specific order: Hero → FigSection → ProjectSection → AboutSection → ContactSection

**Content management:**

- Project data lives in `src/lib/content/projectContent.js` as an exportable array
- Each project object contains: src, alt, tags, title, body, button (with txt/href), and optional secondButton
- Projects link to external Behance case studies and live sites

**Animation approach:**

- Heavy use of GSAP timelines with ScrollTrigger for scroll-based animations
- Premium plugins: DrawSVGPlugin (SVG stroke animations), Physics2DPlugin (particle effects), GSDevTools (development)
- Animations initialized in `onMount()` lifecycle hooks
- Key animated sections: Hero speech bubble sequence (src/lib/sections/Hero.svelte:11-426), Venn diagram with interactive icons (src/lib/components/VennAnimation.svelte)

**Styling:**

- Global styles in `src/routes/styles.css`
- Component-scoped styles using Svelte's `<style>` blocks
- CSS custom properties (--pagewidth, --border, --gray, --acct) for theming
- Typography: Vollkorn (serif), Shackleton (decorative), Adobe Typekit fonts

**SSR configuration:**

- GSAP and sharp are marked as `noExternal` in vite.config.ts:10 to prevent SSR issues
- IntersectionObserver component handles lazy loading with SSR compatibility

**Static assets:**

- All images and SVGs in `/static/assets/`
- Referenced in components as `./assets/filename.ext`

## Important Patterns

**GSAP timeline pattern:**

```javascript
onMount(() => {
	gsap.registerPlugin(ScrollTrigger, DrawSVGPlugin);

	const tl = gsap.timeline({ onComplete: callback });
	ScrollTrigger.create({
		trigger: '#element',
		animation: tl,
		start: 'top 60%'
	});
	// Build timeline...
});
```

**Intersection Observer lazy loading:**
Wrap content with `<IntersectionObserver once={true} let:intersecting>` and conditionally render expensive content when `{#if intersecting}`.

**Section spacing:**
All `<section>` elements get automatic margin-top: 13vh via global styles (src/routes/+layout.svelte:40).

## Deployment

- Production deployment: Auto-deploy from `main` branch to Vercel
- No manual deployment necessary
- Build adapter: `@sveltejs/adapter-vercel`
