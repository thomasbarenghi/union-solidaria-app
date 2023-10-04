'use client'

import { signIn, useSession } from 'next-auth/react'
import { Button, DynamicPopover } from '..'
import Image from 'next/image'
import Menu from './Menu'

const ProfileAction = () => {
  const { data: session, status } = useSession()

  console.log({ session, status })

  const childrenTrigger = (
    <Image
      alt='Profile image'
      width={50}
      height={50}
      className='aspect-square h-[50px] min-w-[50px] cursor-pointer  rounded-full border border-white object-cover p-1'
      src={session?.user.image}
    />
  )
  console.log(status === 'authenticated')

  return (
    <>
      {status === 'authenticated' ? (
        <DynamicPopover childrenTrigger={childrenTrigger} backdrop='transparent'>
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
