'use client'
import Routes from '@/utils/constants/routes.const'
import { useAppSelector } from '@/redux/hooks'
import { currentUserSelector } from '@/redux/selectors/users'
import { NavbarItem } from '@nextui-org/react'
import { DynamicPopover } from '..'
import Image from 'next/image'
import Menu from './Menu'
import Link from 'next/link'

const ProfileAction = () => {
  const currentUser = useAppSelector(currentUserSelector)

  const childrenTrigger = (
    <Image
      alt='Profile image'
      width={50}
      height={50}
      className='aspect-square h-[50px] min-w-[50px]  rounded-full border border-white object-cover p-1'
      src={currentUser.profileImage}
    />
  )

  return (
    <>
      {currentUser.id !== '' ? (
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
