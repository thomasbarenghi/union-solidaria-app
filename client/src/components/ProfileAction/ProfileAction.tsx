'use client'

import { signIn, useSession } from 'next-auth/react'
import { Button, DynamicPopover } from '..'
import Menu from './Menu'

const ProfileAction = () => {
  const { data: session, status } = useSession()

  return (
    <>
      {status === 'authenticated' ? (
        <DynamicPopover image={session.user.profileImage} backdrop='transparent'>
          <Menu />
        </DynamicPopover>
      ) : (
        <Button
          title='Iniciar sesión'
          href=''
          onClick={() => {
            signIn()
          }}
        />
      )}
    </>
  )
}

export default ProfileAction
