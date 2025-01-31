import { NextResponse } from 'next/server'
import { OAuthApp } from '@octokit/oauth-app'
import { tempDb } from '@/lib/github-tokens'
import { getCurrentUserId } from '@/lib/auth'
import { cookies } from 'next/headers'

const clientId = process.env.GITHUB_CLIENT_ID!
const clientSecret = process.env.GITHUB_CLIENT_SECRET!

export async function GET(request: Request) {
  const cookieStore = cookies()
  const storedState = (await cookieStore).get('github_oauth_state')?.value

  const { searchParams } = new URL(request.url)
  const code = searchParams.get('code')
  const state = searchParams.get('state')

  if (!code || !state || state !== storedState) {
    return NextResponse.redirect(new URL('/auth-error?error=invalid_state', request.url))
  }

  // Clear state cookie
  (await cookieStore).delete('github_oauth_state')

  try {
    const userId = await getCurrentUserId()
    const app = new OAuthApp({ clientId, clientSecret })
    const { authentication } = await app.createToken({ code })
    
    await tempDb.saveToken(userId, authentication.token)
    
    return NextResponse.redirect(new URL('/test-management', request.url))
  } catch (error) {
    console.error('GitHub OAuth error:', error)
    return NextResponse.redirect(new URL('/auth-error', request.url))
  }
} 