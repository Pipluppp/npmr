# npm package browser

<p align="center">
  <a href="https://npmx.dev/">
    <img width="1090" alt="Screenshot of npmx.dev showing the nuxt package" src="https://github.com/user-attachments/assets/1a2a3205-0227-46dc-b1f9-48f9a65691d3">
  </a>
</p>

This project rebuilds the useful parts of an npm package page with React and a TypeScript backend.

The product shape is close to npmjs.com:

- top search
- package README
- code tab
- dependencies tab
- versions tab
- persistent package sidebar
- version diff

The package page uses npmjs-style tabs with a sidebar that stays visible across README, code, dependencies, and versions. The code tab and version diff use `@pierre/trees` and `@pierre/diffs`. npmx.dev is the reference for package API routes, caching, file browsing, diff behavior, and sidebar metadata.

## Stack

React SPA Vite + Hono worker, deployed in a single Cloudflare Worker (static assets for React SPA, worker for Hono) 

- TanStack Router and TanStack Query
- Tailwind, shadcn
- Hono on Cloudflare Workers
- Zod for request validation

## Data

- npm registry for search and package metadata
- npm downloads API for weekly downloads
- jsDelivr data API for package file trees
- jsDelivr CDN for file contents

## Design

> npmx.dev works really well and looks cool, but there's something in its components and design where it is sometimes a bit hard to differentiate sections of the UI #uidesigner #figma #creative

I'm going to use shadcn and tailwind. Before I tried exploring React Aria Components (headless) and doing the design from scratch and it's a pain. Will try to create some frontend UI where it doesn't feel as generic as the typical shadcn website (not quite sure what makes generic shadcn websites look like shadcn??? will explore until it looks different)

**Color**

I hate dark modes where it is insanely black and cold (bluish) like https://vercel.com/. Quite hard to read. I like the https://cursor.com/ "*brownish*" dark background (also kind of the look of https://aresluna.org/). For primary color I also like their "*bright orange*" tint. For another secondary color, just experimented with random colors and ended up with another "*bluish-greenish*" tint.

<img width="2430" height="2834" alt="file-da9d8a29fa0f2c95eb3f0da972bf04a9" src="https://github.com/user-attachments/assets/7dcff3e2-089d-4c19-a743-2dc1f472747b" />

**Logo**

Three rectangles in excalidraw #creative

<img width="1840" height="2073" alt="file-3ba6c195ee6377a1183488ca69148d86" src="https://github.com/user-attachments/assets/0cd7412a-699b-49bb-a99d-1ece7dfa7ae8" />

### Pages mockups

**Homepage**

Very plain barebones, just the logo and all. A huge search a the middle of the page.

<img width="4307" height="1697" alt="file-f7579b157402c7512778e840aed14e76" src="https://github.com/user-attachments/assets/bc174aff-c8e3-4a05-95f0-e2025f90c6b7" />

**Search page**

<img width="4307" height="1697" alt="file-f7579b157402c7512778e840aed14e76" src="https://github.com/user-attachments/assets/073b6cd4-6c77-4ccd-83a3-d641f7ff3b14" />


**Search behavior**

A search bar full width of the website's container, dynamically resizing the font to fit the width available.

<img width="3229" height="2319" alt="image" src="https://github.com/user-attachments/assets/0161f36b-52f9-4c47-8623-3648e6c93e59" />

**Package**

<img width="4494" height="1644" alt="file-7f1049b79b1795d0455b02e49beb90c5" src="https://github.com/user-attachments/assets/82d60a2d-2d23-4c0d-8b90-4f371336f5d0" />
