'use client'

import { useUser } from '@clerk/nextjs'
import { Button } from '@/components/ui/button'

export default function GitHubOAuthButton() {
  const { user } = useUser()

  const handleConnect = async () => {
    if (!user) return
    
    // Generate random state for CSRF protection
    const state = crypto.randomUUID()
    
    // Store state in cookie with 5-minute expiration
    document.cookie = `github_oauth_state=${state}; Path=/; Max-Age=300; SameSite=Lax`
    
    window.location.href = `https://github.com/login/oauth/authorize?client_id=${
      process.env.NEXT_PUBLIC_GITHUB_CLIENT_ID
    }&redirect_uri=${
      encodeURIComponent(window.location.origin + '/api/auth/github/callback')
    }&state=${state}&scope=repo`
  }

  return (
    <Button onClick={handleConnect} variant="secondary">
      Connect GitHub Account
    </Button>
  )
}
