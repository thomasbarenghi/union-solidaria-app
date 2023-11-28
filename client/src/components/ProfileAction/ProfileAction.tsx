'use client'
import { signIn, useSession } from 'next-auth/react'
import { Button, DynamicPopover } from '..'
import Menu from './Menu'
import Endpoints from '@/utils/constants/endpoints.const'
import useSWR from 'swr'

const ProfileAction = () => {
  const { data: session } = useSession()
  const { data: user } = useSWR(Endpoints.USER_BY_ID(session?.user?.username ?? ''))
  const status = session ? 'authenticated' : 'unauthenticated'
  return (
    <>
      {status === 'authenticated' ? (
        <DynamicPopover image={session?.user?.profileImage ?? '/image/placeholder.png'} backdrop='transparent'>
          <Menu user={user} />
        </DynamicPopover>
      ) : (
        <Button
          title='Iniciar sesión'
          onClick={() => {
            signIn()
          }}
        />
      )}
    </>
  )
}

export default ProfileAction
