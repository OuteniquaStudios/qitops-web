'use client'

import { useUser } from '@clerk/nextjs'
import { useEffect, useState } from 'react'
import GitHubOAuthButton from '@/components/github/OAuthButton'
import RepoSelector from '@/components/github/RepoSelector'
import TestCaseForm from '@/components/test-case/TestCaseForm'
import TestCaseList from '@/components/test-case/TestCaseList'

interface TestCase {
  id: string
  title: string
  steps: string
  expected: string
}

interface TestCaseFormData {
  title: string
  steps: string
  expected: string
}

export default function TestManagementPage() {
  const { user } = useUser()
  const [selectedRepo, setSelectedRepo] = useState('')
  const [tests, setTests] = useState<TestCase[]>([])
  const [githubToken, setGithubToken] = useState('')

  useEffect(() => {
    const fetchToken = async () => {
      if (user?.id) {
        const response = await fetch(`/api/users/${user.id}/github-token`)
        const data = await response.json()
        setGithubToken(data.token || '')
      }
    }
    fetchToken()
  }, [user])

  const handleSubmit = async (data: TestCaseFormData) => {
    try {
      const response = await fetch('/api/test-cases', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...data,
          repo: selectedRepo,
          token: githubToken
        })
      })

      if (!response.ok) {
        throw new Error('Failed to save test case')
      }

      const result = await response.json()
      setTests([...tests, result.test])
    } catch (error) {
      throw error instanceof Error ? error : new Error('API Error')
    }
  }

  return (
    <main className="min-h-screen py-16 px-4 max-w-4xl mx-auto">
      <h1 className="text-4xl font-header font-bold text-primary mb-8">
        Test Case Management
      </h1>
      
      {!githubToken ? (
        <div className="bg-secondary p-6 rounded-lg">
          <h2 className="text-xl font-semibold mb-4">
            Connect GitHub to access repositories
          </h2>
          <GitHubOAuthButton />
        </div>
      ) : (
        <div className="space-y-12">
          <div className="bg-secondary p-6 rounded-lg">
            <RepoSelector 
              token={githubToken} 
              onSelect={setSelectedRepo} 
            />
          </div>

          {selectedRepo && (
            <>
              <div className="bg-secondary p-6 rounded-lg">
                <h2 className="text-2xl font-header font-semibold mb-4 text-primary">
                  Create New Test Case for {selectedRepo}
                </h2>
                <TestCaseForm onSubmit={handleSubmit} />
              </div>

              <div className="bg-secondary p-6 rounded-lg">
                <h2 className="text-2xl font-header font-semibold mb-4 text-primary">
                  Existing Test Cases
                </h2>
                <TestCaseList tests={tests} />
              </div>
            </>
          )}
        </div>
      )}
    </main>
  )
}
