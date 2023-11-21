'use client'
import { type FC } from 'react'
import { SessionProvider } from 'next-auth/react'

interface Props {
  children: React.ReactNode
}

const AuthSessionProvider: FC<Props> = (props: Props) => {
  const { children } = props
  return <SessionProvider>{children}</SessionProvider>
}

export default AuthSessionProvider
