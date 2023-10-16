'use client'

import { signIn, useSession } from 'next-auth/react'
import { Button, DynamicPopover } from '..'
import Menu from './Menu'
import Routes from '@/utils/constants/routes.const'

const ProfileAction = () => {
  const { data: session, status } = useSession()

  return (
    <>
      {status === 'authenticated' ? (
        <DynamicPopover image={session.user.profileImage} backdrop='transparent'>
          <Menu />
        </DynamicPopover>
      ) : (
        <div className='flex gap-2'>
          <Button
            variant='faded'
            className='border-0 bg-green-50 text-green-800'
            color='default'
            title='Donar'
            href={Routes.DONATION}
          />
          <Button
            title='Iniciar sesión'
            href=''
            onClick={() => {
              signIn()
            }}
          />
        </div>
      )}
    </>
  )
}

export default ProfileAction
