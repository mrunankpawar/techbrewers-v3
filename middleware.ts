import { NextResponse } from 'next/server'
import { authMiddleware } from '@descope/nextjs-sdk/server'

const descopeMiddleware = authMiddleware({
  // The Descope project ID to use for authentication
  // Defaults to process.env.NEXT_PUBLIC_DESCOPE_PROJECT_ID
  projectId: process.env.NEXT_PUBLIC_DESCOPE_PROJECT_ID,

  // The URL to redirect to if the user is not authenticated
  redirectUrl: '/sign-up',

  // Only these routes require a signed-in user; everything else is public.
  // (Listing protected routes rather than public ones means unknown URLs show
  // the 404 page instead of redirecting logged-out visitors to sign-up.)
  privateRoutes: ['/profile', '/profile/*', '/admin', '/admin/*'],
})

// Local development only: DEV_AUTH_USER_ID signs you in as a fake user (see
// lib/auth.ts). NODE_ENV is always "production" on Vercel, so this never applies there.
const devBypass = process.env.NODE_ENV === 'development' && Boolean(process.env.DEV_AUTH_USER_ID)

export default devBypass ? () => NextResponse.next() : descopeMiddleware

export const config = {
  matcher: ['/((?!.+\\.[\\w]+$|_next).*)', '/', '/(api|trpc)(.*)']
}
