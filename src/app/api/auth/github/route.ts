import { NextResponse } from 'next/server'
import { OAuthApp } from '@octokit/oauth-app'

const clientId = process.env.GITHUB_CLIENT_ID!
const clientSecret = process.env.GITHUB_CLIENT_SECRET!

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const code = searchParams.get('code')
  
  if (!code) {
    return NextResponse.redirect(
      `https://github.com/login/oauth/authorize?client_id=${clientId}`
    )
  }

  const app = new OAuthApp({ clientId, clientSecret })
  
  try {
    const { authentication } = await app.createToken({ code })
    // Store token securely (consider using cookies)
    const response = NextResponse.redirect('/dashboard')
    response.cookies.set('github_token', authentication.token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'strict'
    })
    return response
  } catch (error) {
    console.error('GitHub OAuth error:', error)
    return NextResponse.redirect('/auth-error')
  }
} 