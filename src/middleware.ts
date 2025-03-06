import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  const url = request.nextUrl.clone()
  
  // List of valid paths
  const validPaths = ['/', '/contact', '/services', '/website-planning']
  
  // Check if the path is valid
  if (!validPaths.includes(url.pathname)) {
    // Check if the path is not a static file or API route
    if (!url.pathname.startsWith('/_next') && 
        !url.pathname.startsWith('/api') && 
        !url.pathname.includes('.')) {
      return NextResponse.rewrite(new URL('/not-found', url))
    }
  }

  return NextResponse.next()
} 