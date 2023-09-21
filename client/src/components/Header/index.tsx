'use client'
import Image from 'next/image'
import { ProfileAction } from '@/components'
import { itemsNav } from './lib/itemsNav'
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Link } from '@nextui-org/react'
import NextLink from 'next/link'
import clsx from 'clsx'
import { useState } from 'react'

interface Props {
  theme?: 'dark' | 'light'
  layout?: 'simple' | 'full'
}

const Header = ({ theme = 'light', layout = 'full' }: Props) => {
  const [bgColor, setBgColor] = useState('bg-none')
  const [logo, setLogo] = useState(theme === 'dark' ? '/icon/logo-dark.svg' : '/icon/logo-light.svg')
  const [textColor, setTextColor] = useState('text-white')
  const [blur, setBlur] = useState(false)
  const stylesNavbar = clsx('section-padding-1 fixed py-6', bgColor)

  const handleScroll = (position: number) => {
    const isScrolled = position > 0
    setBgColor(isScrolled ? 'bg-[#FFFFFFF1]' : 'bg-transparent')
    setTextColor(isScrolled ? 'text-black' : 'text-white')
    setLogo(isScrolled ? '/icon/logo-dark.svg' : '/icon/logo-light.svg')
    setBlur(isScrolled)
  }

  const renderNavItems = () =>
    itemsNav.map((item, index) => (
      <NavbarItem key={index}>
        <Link color='foreground' className={textColor} href={item.href} as={NextLink}>
          {item.name}
        </Link>
      </NavbarItem>
    ))

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
            {renderNavItems()}
          </NavbarContent>
          <NavbarContent>
            <NavbarItem>
              <ProfileAction />
            </NavbarItem>
          </NavbarContent>
        </>
      )}
    </Navbar>
  )
}

export default Header
