# ZHRN Portfolio 2023

Ported my portfolio to SvelteKit (for nor real reason other than wanting to use it, this site isn't even a good use case for it!)

Lots of fun GSAP bits.

Live at http://www.zacme.ink

## Developing

Install with `npm install` (or `pnpm install` or `yarn`)

This site uses some Club Greensock premium features so install and build will require a valid key provided via .npmrc (local or global), or via another method of environment variable.

Start a development server:

```bash
npm run dev

# or start the server and open the app in a new browser tab
npm run dev -- --open
```

## Building

To build you can

```bash
npm run build
```

You can preview the production build with `npm run preview`.

But this is set up with the netlify-adapter and is set to auto-deploy from the `main` branch on Github.
