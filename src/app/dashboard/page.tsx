'use client'

import { useUser } from '@clerk/nextjs'
import { redirect } from 'next/navigation'

export default function DashboardPage() {
  const { isLoaded, isSignedIn } = useUser()

  if (!isLoaded) return null
  if (!isSignedIn) redirect('/')

  return (
    <main className="min-h-screen py-16 px-4 max-w-4xl mx-auto">
      <h1 className="text-4xl font-header font-bold text-primary mb-8">
        Quality Dashboard
      </h1>
      <div className="bg-secondary p-6 rounded-lg">
        <p className="text-gray-700">Coming soon - Quality metrics and insights</p>
      </div>
    </main>
  )
} 