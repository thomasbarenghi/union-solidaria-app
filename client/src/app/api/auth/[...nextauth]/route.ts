import { nextauthOptions } from '@/utils/constants/auth.const'
import NextAuth from 'next-auth'

const handler = NextAuth(nextauthOptions)

export { handler as GET, handler as POST }
