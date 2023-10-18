/* eslint-disable @typescript-eslint/indent */
'use client'
import Image from 'next/image'
import { Button, ProfileAction } from '@/components'
import { itemsNav } from './lib/itemsNav'
import { Navbar, NavbarBrand, NavbarContent, NavbarItem } from '@nextui-org/react'
import NextLink from 'next/link'
import clsx from 'clsx'
import { useState } from 'react'
import Routes from '@/utils/constants/routes.const'
import { useAppSelector } from '@/redux/hooks'
import { usePathname } from 'next/navigation'
import MobileMenu from './MobileMenu'

interface Props {
  theme?: 'light' | 'transparent'
  layout?: 'simple' | 'full'
}

const Header = ({ theme = 'transparent', layout = 'full' }: Props) => {
  const pathname = usePathname()
  const auth = useAppSelector((state) => state.authSession.auth)
  const [isScrolled, setIsScrolled] = useState(false)
  const bgColor = isScrolled ? 'bg-[#FFFFFFF1]' : 'bg-transparent'
  const textColor = isScrolled ? 'text-black' : theme === 'transparent' ? 'text-white' : 'text-black'
  const isMobile = window.innerWidth < 768
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const logo = isMobile
    ? isScrolled
      ? '/icon/mobile-logo-dark.svg'
      : theme === 'transparent'
      ? '/icon/mobile-logo-light.svg'
      : '/icon/mobile-logo-dark.svg'
    : isScrolled
    ? '/icon/logo-dark.svg'
    : theme === 'transparent'
    ? '/icon/logo-light.svg'
    : '/icon/logo-dark.svg'

  const blur = isScrolled
  const stylesNavbar = clsx('section-padding-1 fixed py-6', bgColor)

  const handleScroll = (position: number) => {
    setIsScrolled(position > 0)
  }
  console.log('Header', pathname)
  return (
    <Navbar
      isMenuOpen={isMenuOpen}
      onMenuOpenChange={setIsMenuOpen}
      className={stylesNavbar}
      classNames={{
        wrapper: 'p-0 h-auto w-full max-w-full flex justify-between  2xl:container',
        base: 'bg-transparent min-h-[95px]',
        content: 'w-auto !grow-0',
        brand: 'max-w-[185px] ',
        item: `data-[active=true]:font-semibold font-light ${textColor}`
      }}
      //
      isBlurred={blur}
      shouldHideOnScroll={false}
      onScrollPositionChange={(position) => handleScroll(position)}
    >
      <div className='flex gap-3'>
        <MobileMenu
          isOpen={isMenuOpen}
          toggle={() => setIsMenuOpen(!isMenuOpen)}
          theme={theme}
          isScrolled={isScrolled}
        />
        <NextLink href={Routes.HOME}>
          <NavbarBrand>
            <Image src={logo} alt='Logo' width={isMobile ? 66 : 165} height={35} />
          </NavbarBrand>
        </NextLink>
      </div>
      {layout === 'full' && (
        <div className='flex items-center justify-end gap-10'>
          <NavbarContent className=' hidden gap-8 p-0 lg:flex' justify='center'>
            {itemsNav(false).map(
              (item, index) =>
                item.visible && (
                  <NextLink href={item.href} key={index}>
                    <NavbarItem isActive={pathname === item.href}>{item.name}</NavbarItem>
                  </NextLink>
                )
            )}
          </NavbarContent>
          <NavbarContent>
            <NavbarItem className='flex items-center gap-2'>
              {auth.isLogged && <Button title='Donar' size='md' href={Routes.DONATION} />}
              <Button
                variant='faded'
                className='hidden border-0 bg-green-50 text-green-800 lg:flex'
                color='default'
                title='Donar'
                href={Routes.DONATION}
              />
              <ProfileAction />
            </NavbarItem>
          </NavbarContent>
        </div>
      )}
    </Navbar>
  )
}

export default Header
