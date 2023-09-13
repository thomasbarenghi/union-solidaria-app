import { checkLoginQueryParams, handleLoginRedirect } from '@/utils/middleware/login.middle'
import { NextRequest, NextResponse } from 'next/server'
import Routes from './utils/constants/routes.const'
import { verifySession } from './services/verify-session.service'

export async function middleware(req: NextRequest) {
  const { hasLoginQueryParams, sid, uid } = checkLoginQueryParams(req.nextUrl.searchParams)
  const privateRoutes = [Routes.ACCOUNT, Routes.DASHBOARD, Routes.FEED]
  const isPathPrivate = privateRoutes.includes(req.nextUrl.pathname)
  const sessionId = req.cookies.get('sessionId')?.value || ''
  const isSessionValid = await verifySession(sessionId)

  if (hasLoginQueryParams) {
    return handleLoginRedirect(req.nextUrl, sid, uid)
  }

  if (!isSessionValid && isPathPrivate) return NextResponse.redirect(new URL(Routes.LOGIN, req.url))
  if (isSessionValid && !isPathPrivate) return NextResponse.redirect(new URL(Routes.ACCOUNT, req.url))

  return NextResponse.next()
}

export const config = {
  matcher: ['/account', '/dashboard', '/feed', '/login', '/register']
}
