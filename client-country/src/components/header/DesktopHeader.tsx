'use client'
import { Backdrop, ButtonLink, LogoutIcon, ProfileIcon, SettingIcon } from '@/components'
import { useAppSelector } from '@/redux/hooks'
import { currentAuthSelector } from '@/redux/selectors/users'
import Routes from '@/utils/constants/routes.const'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
import { createPortal } from 'react-dom'

function DesktopHeader() {
  const [openOptions, setOpenOptions] = useState(false)
  const user = useAppSelector(currentAuthSelector)
  const pathname = usePathname()

  if (pathname === '/login' || pathname === '/register') {
    return null
  }

  return (
    <header className='sticky top-0 z-40 hidden bg-pink-100 py-3 2lg:block'>
      <div className='mx-auto flex max-w-screen-xl items-center justify-between px-4'>
        <Link href={Routes.HOME}>
          <Image
            width={148}
            height={48}
            className='h-12 w-36 object-contain'
            src='/assets/logo-with-title.png'
            alt='Logo y nombre de union solidaria'
          />
        </Link>
        <nav>
          <ul className='flex items-center'>
            <li>
              <ButtonLink href={Routes.INITIATIVES}>Iniciativas</ButtonLink>
            </li>
            <li>
              <ButtonLink href={Routes.ABOUT}>Acerca de Unión Solidaria</ButtonLink>
            </li>
            <li>
              <ButtonLink href={Routes.DONATION}>Donaciones</ButtonLink>
            </li>
            <li>
              <ButtonLink href={Routes.HELP}>Ayuda</ButtonLink>
            </li>
          </ul>
        </nav>
        {!user.isLogged && (
          <div>
            <ButtonLink variant='primary' href={Routes.LOGIN}>
              Inicia sesión
            </ButtonLink>
            <ButtonLink href={Routes.REGISTER}>Registrate</ButtonLink>
          </div>
        )}
        {user.isLogged && (
          <button onClick={() => setOpenOptions(true)}>
            <ProfileIcon className='h-10 w-10 fill-blue-500' />
          </button>
        )}
        {openOptions &&
          createPortal(
            <Backdrop onClick={() => setOpenOptions(false)}>
              <div className='fixed right-16 top-20 rounded bg-pink-100 shadow-md shadow-gray-500'>
                <div className='px-8 py-4 text-xl font-bold'>
                  ¡Hola, <span className='text-blue-500'>Usuario</span>!
                </div>
                <hr className='h-[1px] w-full bg-gray-500' />
                <ul className='text-lg text-blue-700'>
                  <li>
                    <Link href='/initiatives/@username' className='flex items-center gap-x-3 px-3 py-4'>
                      <ProfileIcon className='h-6 w-6 fill-current' /> Perfil
                    </Link>
                  </li>
                  <li>
                    <Link href={Routes.ACCOUNT} className='flex items-center gap-x-3 px-3 py-4'>
                      <SettingIcon className='h-6 w-6 fill-current' /> Configuración
                    </Link>
                  </li>
                  <li>
                    <Link className='flex items-center gap-x-3 px-3 py-4 font-bold text-blue-500' href={Routes.LOGOUT}>
                      <LogoutIcon className='h-6 w-6 fill-current' /> Cerrar sesión
                    </Link>
                  </li>
                </ul>
              </div>
            </Backdrop>,
            document.body,
            'user-options'
          )}
      </div>
    </header>
  )
}

export default DesktopHeader
