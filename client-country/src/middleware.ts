import { checkLoginQueryParams, handleLoginRedirect } from '@/utils/middleware/login.middle'
import { NextRequest } from 'next/server'

export function middleware(req: NextRequest) {
  const { hasLoginQueryParams, sid, uid } = checkLoginQueryParams(req.nextUrl.searchParams)

  // if the query params are found, it's assumed that the login is through google
  if (hasLoginQueryParams) {
    return handleLoginRedirect(req.nextUrl, sid, uid)
  }
}

export const config = {
  matcher: ['/account', '/dashboard', '/feed', '/login', '/register']
}
