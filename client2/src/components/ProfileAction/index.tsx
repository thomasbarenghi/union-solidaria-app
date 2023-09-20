'use client'
import Link from 'next/link'
import Routes from '@/utils/constants/routes.const'
import { useAppSelector } from '@/redux/hooks'
import { currentUserSelector } from '@/redux/selectors/users'
import { itemsNavBuilder, ItemNavInterface } from './lib/itemsNav'
import { Avatar, Dropdown, DropdownItem, DropdownMenu, DropdownTrigger, NavbarItem } from '@nextui-org/react'

const DropdownItems = ({ items }: { items: ItemNavInterface[] }) => (
  <DropdownMenu aria-label='Profile Actions' variant='flat'>
    {items?.map((item: ItemNavInterface, index: number) => (
      <DropdownItem key={index} color={item.color ?? 'default'}>
        <Link href={item.href}>{item.name}</Link>
      </DropdownItem>
    ))}
  </DropdownMenu>
)

const ProfileAction = () => {
  const currentUser = useAppSelector(currentUserSelector)
  const items = itemsNavBuilder(currentUser)
  return (
    <>
      {currentUser.id !== '' ? (
        <Dropdown placement='bottom-end'>
          <DropdownTrigger>
            <Avatar
              isBordered
              as='button'
              className='transition-transform'
              color='default'
              name={currentUser.firstName}
              size='md'
              src={currentUser.profileImage}
            />
          </DropdownTrigger>
          <DropdownItems items={items} />
        </Dropdown>
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
