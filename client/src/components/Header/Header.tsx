'use client'
import Image from 'next/image'
import { Button, ProfileAction } from '@/components'
import { itemsNav } from './lib/itemsNav'
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Link } from '@nextui-org/react'
import NextLink from 'next/link'
import clsx from 'clsx'
import { useState } from 'react'
import Routes from '@/utils/constants/routes.const'
import { useAppSelector } from '@/redux/hooks'

interface Props {
  theme?: 'light' | 'transparent'
  layout?: 'simple' | 'full'
}

const Header = ({ theme = 'transparent', layout = 'full' }: Props) => {
  const auth = useAppSelector((state) => state.authSession.auth)
  const [isScrolled, setIsScrolled] = useState(false)
  const bgColor = isScrolled ? 'bg-[#FFFFFFF1]' : 'bg-transparent'
  const textColor = isScrolled ? 'text-black' : theme === 'transparent' ? 'text-white' : 'text-black'

  const logo = isScrolled
    ? '/icon/logo-dark.svg'
    : theme === 'transparent'
      ? '/icon/logo-light.svg'
      : '/icon/logo-dark.svg'

  const blur = isScrolled
  const stylesNavbar = clsx('section-padding-1 fixed py-6', bgColor)

  const handleScroll = (position: number) => {
    setIsScrolled(position > 0)
  }

  return (
    <Navbar
      className={stylesNavbar}
      classNames={{
        wrapper: 'p-0 h-auto w-full max-w-full flex justify-between  2xl:container',
        base: 'bg-transparent',
        menuItem: 'text-white ',
        content: 'w-auto !grow-0',
        brand: 'max-w-[185px] '
      }}
      isBlurred={blur}
      shouldHideOnScroll={false}
      onScrollPositionChange={(position) => handleScroll(position)}
    >
      <NavbarBrand>
        <Image src={logo} alt='Logo' width={165} height={35} />
      </NavbarBrand>
      {layout === 'full' && (
        <>
          <NavbarContent
            className='absolute left-1/2 top-1/2 hidden -translate-x-1/2 -translate-y-1/2 transform gap-4 p-0 sm:flex'
            justify='center'
          >
            {itemsNav.map((item, index) => (
              <NavbarItem key={index}>
                <Link color='foreground' className={textColor} href={item.href} as={NextLink}>
                  {item.name}
                </Link>
              </NavbarItem>
            ))}
          </NavbarContent>
          <NavbarContent>
            <NavbarItem className='flex items-center gap-2'>
              {auth.isLogged && <Button title='Donar' size='md' href={Routes.DONATION} />}
              <ProfileAction />
            </NavbarItem>
          </NavbarContent>
        </>
      )}
    </Navbar>
  )
}

export default Header
