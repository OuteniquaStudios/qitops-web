import { NextRequest, NextResponse } from 'next/server';
import { tempDb } from '@/lib/github-tokens';

type RouteParams = {
  params: {
    userId: string
  }
}

export async function GET(
  request: NextRequest,
  context: RouteParams & { params: Promise<RouteParams['params']> }
) {
  try {
    // Resolve the Promise wrapper that Next.js adds internally
    const params = await context.params;
    const token = await tempDb.getToken(params.userId);
    
    return NextResponse.json({ token: token || '' });
  } catch {
    return NextResponse.json(
      { message: 'Failed to fetch GitHub token' },
      { status: 500 }
    );
  }
} 