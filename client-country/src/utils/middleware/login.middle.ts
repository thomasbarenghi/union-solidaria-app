import { googleLoginQueryParams } from '@/utils/constants/auth.const'
import { NextURL } from 'next/dist/server/web/next-url'
import { NextResponse } from 'next/server'

export const handleLoginRedirect = (nextUrl: NextURL, sessionId: string, userId: string) => {
  const { SESSION_ID, USER_ID } = googleLoginQueryParams
  const url = nextUrl.clone()
  url.searchParams.delete(SESSION_ID)
  url.searchParams.delete(USER_ID)

  const res = NextResponse.redirect(url)

  res.cookies.set({
    name: SESSION_ID,
    value: sessionId,
    path: '/'
  })
  res.cookies.set({
    name: USER_ID,
    value: userId,
    path: '/'
  })

  return res
}

export const checkLoginQueryParams = (searchParams: URLSearchParams) => {
  const { SESSION_ID, USER_ID } = googleLoginQueryParams
  const sid = searchParams.get(SESSION_ID) ?? ''
  const uid = searchParams.get(USER_ID) ?? ''
  const hasLoginQueryParams = sid !== '' && uid !== ''
  return { hasLoginQueryParams, sid, uid }
}
