# ZHRN Portfolio 2023

Ported my portfolio to SvelteKit (for nor real reason other than wanting to use it, this site isn't even a good use case for it!) Also doing random refactors because there's always room for improvement (and better Typescript)

Lots of fun GSAP bits.

Live at http://www.zacme.ink

## Developing

Install with `npm install`

This site uses some Club Greensock premium features so install and build will require a valid key provided via .npmrc (local or global), or via another method of environment variable.

Start a development server:

```bash
npm run dev

# or start the server and open the app in a new browser tab
npm run dev -- --open
```

## Building

This repo is set up in Vercel to auto-deploy from main to production. 

To manually build you can

```bash
npm run build
```

You can preview the production build with `npm run preview`.
