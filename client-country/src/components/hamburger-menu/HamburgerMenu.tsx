'use client'
import useActionStore from '@/store/actionsStore'
import { Backdrop, PrimaryButton, HeartIcon } from '@/components'
import { motion, AnimatePresence } from 'framer-motion'
import { usePathname, useRouter } from 'next/navigation'
import HamburgerMenuBtn from './HamburgerMenuBtn'
import Image from 'next/image'
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
  const menuOpened = useActionStore(state => state.menuOpened)
  const setMenuOpen = useActionStore(state => state.setMenuOpen)
  const router = useRouter()

  const pathname = usePathname()
  if (pathname === '/login' || pathname === '/register') {
    return null
  }
  return (
    <>
      <HamburgerMenuBtn menuOpened={menuOpened} setMenuOpen={setMenuOpen} />
      <AnimatePresence
        initial={false}
        mode='wait'
        onExitComplete={() => null}
      >
        {menuOpened &&
          <Backdrop onClick={() => setMenuOpen()}>
            <motion.div
              onClick={(e) => e.stopPropagation()}
              variants={menuAnimation}
              initial='hidden'
              animate='visible'
              exit='exit'
              className={`z-10 fixed top-0 right-0 bottom-0 bg-pink-100 
                 flex flex-col w-80
              `}
            >
              <div className='h-14 border-b-2 border-gray-400 flex items-center gap-4 px-4'>
                <Image src='Logo.svg' width={27} height={27} alt='Logo Uninón Solidaria' />
                <h2 className='text-xl text-blue-700 font-semibold'>Unión Solidaria</h2>
              </div>
              <MenuLinks setMenuOpen={setMenuOpen} />
              <div className='flex flex-col items-center p-6'>
                <PrimaryButton onClick={() => router.push('/login', { scroll: false })}>
                  Iniciar sesión
                </PrimaryButton>
                <button className='font-bold text-blue-500 mt-6'>Registrate</button>
                <button className='border-2 border-blue-600  rounded-full px-6 py-1.5 flex font-semibold items-center mt-[20vh]'>
                  <HeartIcon className='fill-blue-700 h-4' />
                  <span className='text-blue-700'>Donar</span>
                </button>
              </div>
            </motion.div>

          </Backdrop>}
      </AnimatePresence>
    </>
  )
}

export default HamburgerMenu
