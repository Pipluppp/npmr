import { Hono } from 'hono'

// Bindings come from wrangler.jsonc and are typed in worker-configuration.d.ts
// (regenerate with `npm run cf-typegen`). None are defined yet.
const app = new Hono<{ Bindings: Env }>()

app.get('/api/health', (c) => {
  return c.json({ ok: true })
})

// Keep API 404s as JSON so an unknown /api/* route never falls through to the
// SPA's index.html.
app.notFound((c) => {
  return c.json({ error: 'Not found' }, 404)
})

export default app
