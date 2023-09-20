'use client'
import Link from 'next/link'
import Image from 'next/image'
import Routes from '@/utils/constants/routes.const'
import { useAppSelector } from '@/redux/hooks'
import { currentUserSelector } from '@/redux/selectors/users'
import { DynamicPopover, Nav } from '@/components'
import { itemsNavBuilder } from './lib/itemsNav'

const ProfileAction = () => {
  const currentUser = useAppSelector(currentUserSelector)

  const childrenTrigger = (
    <div>
      <Image
        alt='Vercel Logo'
        width={50}
        height={50}
        className='aspect-square rounded-full border border-white object-cover p-1'
        src={currentUser.profileImage}
      />
    </div>
  )

  return (
    <>
      {currentUser.id !== undefined ? (
        <DynamicPopover childrenTrigger={childrenTrigger} backdrop='opaque'>
          <Nav items={itemsNavBuilder(currentUser)} />
        </DynamicPopover>
      ) : (
        <Link className='button primaryButton hidden lg:flex' href={Routes.LOGIN}>
          Iniciar sesión
        </Link>
      )}
    </>
  )
}

export default ProfileAction
