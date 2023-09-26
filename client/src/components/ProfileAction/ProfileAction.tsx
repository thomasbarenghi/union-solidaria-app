'use client'
import Routes from '@/utils/constants/routes.const'
import { useAppSelector } from '@/redux/hooks'
import { currentAuthSelector, loggedUserSelector } from '@/redux/selectors/users'
import { NavbarItem } from '@nextui-org/react'
import { Button, DynamicPopover } from '..'
import Image from 'next/image'
import Menu from './Menu'

const ProfileAction = () => {
  const currentUser = useAppSelector(loggedUserSelector)
  const auth = useAppSelector(currentAuthSelector)

  const childrenTrigger = (
    <Image
      alt='Profile image'
      width={50}
      height={50}
      className='aspect-square h-[50px] min-w-[50px] cursor-pointer  rounded-full border border-white object-cover p-1'
      src={currentUser?.profileImage}
    />
  )

  return (
    <>
      {auth.isLogged ? (
        <DynamicPopover childrenTrigger={childrenTrigger} backdrop='transparent'>
          <Menu />
        </DynamicPopover>
      ) : (
        <NavbarItem>
          <Button title='Iniciar sesión' href={Routes.LOGIN} />
        </NavbarItem>
      )}
    </>
  )
}

export default ProfileAction
