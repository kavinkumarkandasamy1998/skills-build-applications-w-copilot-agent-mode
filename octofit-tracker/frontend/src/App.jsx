import React, {useEffect, useState} from 'react'

export default function App() {
  const [status, setStatus] = useState('loading')

  useEffect(() => {
    const fetchHealth = async () => {
      try {
        const res = await fetch('http://localhost:8000/api/health/')
        if (!res.ok) throw new Error(`HTTP ${res.status}`)
        const data = await res.json()
        setStatus(data.status || 'ok')
      } catch (err) {
        setStatus('error')
      }
    }
    fetchHealth()
  }, [])

  return (
    <div style={{fontFamily: 'sans-serif', padding: 24}}>
      <h1>OctoFit Tracker</h1>
      <p>Backend status: <strong>{status}</strong></p>
      <p>Frontend scaffold — run <code>npm install</code> then <code>npm run dev</code>.</p>
    </div>
  )
}
