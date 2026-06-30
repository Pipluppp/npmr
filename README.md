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

- React, TypeScript, Vite
- TanStack Router and TanStack Query
- Tailwind, shadcn, Radix
- Jotai when shared client state is useful
- Hono on Cloudflare Workers
- Zod for request validation
- Workers Cache API and KV for caching

## Data

- npm registry for search and package metadata
- npm downloads API for weekly downloads
- jsDelivr data API for package file trees
- jsDelivr CDN for file contents