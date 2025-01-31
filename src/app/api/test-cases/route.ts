import { NextResponse } from 'next/server'
import { RateLimiterMemory } from 'rate-limiter-flexible'
import { Octokit } from '@octokit/rest'

const rateLimiter = new RateLimiterMemory({
  points: 5,
  duration: 60
})

export async function POST(request: Request) {
  const ip = request.headers.get('x-forwarded-for')?.split(',')[0]?.trim() || '127.0.0.1'
  
  try {
    await rateLimiter.consume(ip)
  } catch {
    return NextResponse.json(
      { message: 'Too many requests. Please slow down.' },
      { status: 429 }
    )
  }

  try {
    const { title, steps, expected, repo, token } = await request.json()
    
    const octokit = new Octokit({ auth: token })
    const path = `tests/qitops/${Date.now()}-${title.replace(/ /g, '_')}.yaml`
    
    const { data } = await octokit.repos.createOrUpdateFileContents({
      owner: repo.split('/')[0],
      repo: repo.split('/')[1],
      path,
      message: `Add test case: ${title}`,
      content: Buffer.from(
        `title: ${title}\nsteps: ${steps}\nexpected: ${expected}`
      ).toString('base64')
    })

    if (!data.content) {
      throw new Error('Failed to create test case file')
    }

    return NextResponse.json({ 
      message: 'Test case saved successfully',
      test: { 
        title, 
        steps, 
        expected, 
        url: data.content.html_url 
      }
    })
  } catch (error) {
    console.error('API Error:', error)
    return NextResponse.json(
      { message: error instanceof Error ? error.message : 'Failed to save test case' },
      { status: 500 }
    )
  }
}
