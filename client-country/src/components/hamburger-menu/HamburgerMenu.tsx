'use client'
import { Backdrop, ButtonLink, HeartIcon } from '@/components'
import Routes from '@/utils/constants/routes.const'
import { AnimatePresence, motion } from 'framer-motion'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
import { createPortal } from 'react-dom'
import HamburgerMenuBtn from './HamburgerMenuBtn'
import MenuLinks from './MenuLinks'

const menuAnimation = {
  hidden: {
    x: '100%',
    opacity: 0
  },
  visible: {
    x: '0',
    opacity: 1,
    transition: {
      duration: 0.3,
      type: 'linear',
      damping: 25,
      stiffness: 500
    }
  },
  exit: {
    x: '100%',
    opacity: 0
  }
}

const HamburgerMenu = () => {
  const [menuOpened, setMenuOpen] = useState(false)

  const pathname = usePathname()
  if (pathname === '/login' || pathname === '/register') {
    return null
  }
  return (
    <>
      {createPortal(
        <div className='sticky top-0 z-50 flex w-full items-center justify-between bg-pink-100 px-4 py-3 2lg:hidden'>
          <Image src='/assets/logo.webp' width={32} height={32} alt='Logo Uninón Solidaria' />
          <HamburgerMenuBtn menuOpened={menuOpened} toggleMenu={() => setMenuOpen((state) => !state)} />
          <AnimatePresence initial={false} mode='wait' onExitComplete={() => null}>
            {menuOpened && (
              <Backdrop onClick={() => setMenuOpen(false)}>
                <motion.div
                  onClick={(e) => e.stopPropagation()}
                  variants={menuAnimation}
                  initial='hidden'
                  animate='visible'
                  exit='exit'
                  className={`fixed bottom-0 right-0 top-0 z-40 flex 
                 w-80 flex-col bg-pink-100
              `}
                >
                  <div className='flex h-14 items-center gap-4 border-b-2 border-gray-400 px-4'>
                    <Image src='/assets/logo.webp' width={24} height={24} alt='Logo Uninón Solidaria' />
                    <h2 className='text-xl font-semibold text-blue-700'>Unión Solidaria</h2>
                  </div>
                  <MenuLinks menuOpen={() => setMenuOpen(false)} />
                  <div className='flex grow flex-col items-center gap-y-4 pb-24 pt-6'>
                    <ButtonLink variant='primary' href={Routes.LOGIN}>
                      Iniciar sesión
                    </ButtonLink>
                    <ButtonLink href={Routes.REGISTER}>Registrate</ButtonLink>
                    <ButtonLink
                      variant='secondary'
                      iconLeft={<HeartIcon className='h-3 w-3 fill-blue-700' />}
                      href={Routes.DONATION}
                      onClick={() => setMenuOpen(false)}
                      align='bottom'
                    >
                      Donar
                    </ButtonLink>
                  </div>
                </motion.div>
              </Backdrop>
            )}
          </AnimatePresence>
        </div>,
        document.body
      )}
    </>
  )
}

export default HamburgerMenu
