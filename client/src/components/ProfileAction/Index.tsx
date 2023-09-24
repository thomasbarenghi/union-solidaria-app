'use client'
import Routes from '@/utils/constants/routes.const'
import { useAppSelector } from '@/redux/hooks'
import { currentAuthSelector, loggedUserSelector } from '@/redux/selectors/users'
import { NavbarItem } from '@nextui-org/react'
import { DynamicPopover } from '..'
import Image from 'next/image'
import Menu from './Menu'
import Link from 'next/link'

const ProfileAction = () => {
  const currentUser = useAppSelector(loggedUserSelector)
  const auth = useAppSelector(currentAuthSelector)

  const childrenTrigger = (
    <Image
      alt='Profile image'
      width={50}
      height={50}
      className='aspect-square cursor-pointer h-[50px] min-w-[50px]  rounded-full border border-white object-cover p-1'
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
          <Link className='button primaryButton smalltext hidden lg:flex' href={Routes.LOGIN}>
            Iniciar sesión
          </Link>
        </NavbarItem>
      )}
    </>
  )
}

export default ProfileAction
