import { useState, useEffect } from 'react'

export function Header() {
  const [backendOnline, setBackendOnline] = useState<boolean | null>(null)

  const apiBaseUrl = import.meta.env.VITE_API_BASE_URL || (import.meta.env.PROD ? '/api' : '')

  const checkBackendHealth = async () => {
    try {
      const controller = new AbortController()
      const timeoutId = setTimeout(() => controller.abort(), 5000) // 5s timeout

      const response = await fetch(`${apiBaseUrl}/api/health`, {
        signal: controller.signal,
      })

      clearTimeout(timeoutId)
      setBackendOnline(response.ok)
    } catch (error) {
      setBackendOnline(false)
    }
  }

  useEffect(() => {
    checkBackendHealth()
    const interval = setInterval(checkBackendHealth, 10000) // Poll every 10s
    return () => clearInterval(interval)
  }, [])

  return (
    <header className="border-b border-zinc-800/80 sticky top-0 z-10 bg-zinc-950/90 backdrop-blur">
      <div className="max-w-4xl mx-auto px-4 py-3 flex items-center justify-between">
        <a href="#" className="font-semibold text-zinc-100 hover:text-white transition-colors">
          Sneha R
        </a>
        <nav className="flex items-center gap-6">
          <a href="#experience" className="text-sm text-zinc-400 hover:text-white transition-colors">Experience</a>
          <a href="#projects" className="text-sm text-zinc-400 hover:text-white transition-colors">Projects</a>
          <div className="text-xs text-zinc-500 flex items-center gap-2">
            <span>Backend:</span>
            <span className={`px-2 py-0.5 rounded-full text-xs font-medium ${
              backendOnline === true ? 'bg-green-500/20 text-green-400' :
              backendOnline === false ? 'bg-red-500/20 text-red-400' :
              'bg-yellow-500/20 text-yellow-400'
            }`}>
              {backendOnline === true ? 'Online' : backendOnline === false ? 'Offline' : 'Checking...'}
            </span>
          </div>
        </nav>
      </div>
    </header>
  )
}
