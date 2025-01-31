'use client'

import { useEffect, useState } from 'react'

interface Repo {
  id: number
  full_name: string
}

export default function RepoSelector({ token, onSelect }: {
  token: string
  onSelect: (repo: string) => void
}) {
  const [repos, setRepos] = useState<Repo[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    if (!token) {
      setError('No GitHub token found')
      setLoading(false)
      return
    }

    fetch('https://api.github.com/user/repos', {
      headers: {
        Authorization: `Bearer ${token}`,
        Accept: 'application/vnd.github+json'
      }
    })
    .then(res => {
      if (!res.ok) throw new Error('Failed to fetch repos')
      return res.json()
    })
    .then(data => {
      setRepos(data)
      setLoading(false)
    })
    .catch(err => {
      setError(err.message)
      setLoading(false)
    })
  }, [token])

  return (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold">Select Repository</h3>
      {loading ? (
        <div>Loading repositories...</div>
      ) : error ? (
        <div className="text-red-500">{error}</div>
      ) : (
        <select 
          onChange={(e) => onSelect(e.target.value)}
          className="w-full p-2 rounded border border-gray-300"
        >
          <option value="">Choose a repository</option>
          {repos.map(repo => (
            <option key={repo.id} value={repo.full_name}>
              {repo.full_name}
            </option>
          ))}
        </select>
      )}
    </div>
  )
}
