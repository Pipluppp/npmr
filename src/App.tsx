import { useEffect, useState } from 'react'

type Health = { ok: boolean }

export default function App() {
  const [health, setHealth] = useState<Health | null>(null)
  const [error, setError] = useState<string | null>(null)

  // Same-origin relative URL: works in dev, preview, and production.
  // The /api/* path is routed to the Hono Worker, not the SPA fallback.
  useEffect(() => {
    fetch('/api/health')
      .then((response) => response.json() as Promise<Health>)
      .then(setHealth)
      .catch((cause: unknown) => setError(String(cause)))
  }, [])

  return (
    <main>
      <h1>npmx-react</h1>
      <p>React SPA served by Vite, API served by Hono on Cloudflare Workers.</p>
      <p>
        <code>/api/health</code>:{' '}
        {error ? `error: ${error}` : health ? JSON.stringify(health) : 'loading...'}
      </p>
    </main>
  )
}
