/* eslint-disable @typescript-eslint/indent */
'use client'
import Image from 'next/image'
import { itemsNav } from './lib/itemsNav'
import { TextElement } from '..'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { createPortal } from 'react-dom'

interface Props {
  isOpen: boolean
  toggle: () => void
  theme: 'light' | 'transparent'
  isScrolled: boolean
}

const ToggleBtn = ({ isOpen, toggle, theme, isScrolled }: Props) => {
  const logo = isScrolled
    ? '/icon/menu-black.svg'
    : theme === 'transparent'
    ? '/icon/menu-white.svg'
    : '/icon/menu-black.svg'
  return (
    <Image
      src={isOpen ? '/icon/cross.svg' : logo}
      className='cursor-pointer lg:hidden'
      alt='toggle'
      width={24}
      height={24}
      onClick={toggle}
    />
  )
}

const MobileMenu = ({ isOpen, toggle, theme, isScrolled }: Props) => {
  const pathname = usePathname()
  const activeClass = (href: string) => (pathname === href ? '!font-semibold' : '!font-light')

  return (
    <>
      {!isOpen && <ToggleBtn isOpen={isOpen} toggle={toggle} theme={theme} isScrolled={isScrolled} />}
      {createPortal(
        <>
          {isOpen && (
            <div className='section-padding-x-1 fixed left-0 top-0 z-50 flex h-screen w-screen flex-col gap-14 bg-white py-8'>
              <div className='flex w-full items-center justify-between'>
                <Image src='/icon/mobile-logo-dark.svg' alt='logo' width={66} height={35} />
                <div className='flex cursor-pointer items-center gap-1' onClick={toggle}>
                  <p className='text-black'>Cerrar</p>
                  <Image src='/icon/cross-black.svg' alt='logo' width={40} height={40} />
                </div>
              </div>
              <div className='flex  w-full flex-col gap-6'>
                {itemsNav(true).map((item, index) => (
                  <div key={index} className='flex h-full flex-col items-start justify-center' onClick={toggle}>
                    <Link href={item.href}>
                      <TextElement as='p' type='t1' className={`text-black ${activeClass(item.href)}`}>
                        {item.name}
                      </TextElement>
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          )}
        </>,
        document.body
      )}
    </>
  )
}

export default MobileMenu
