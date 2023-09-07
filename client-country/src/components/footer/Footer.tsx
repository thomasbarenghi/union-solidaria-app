'use client'
import Image from 'next/image'
import LogoWithTitle from '../../../public/assets/LogoWithTitle.png'
import { usePathname } from 'next/navigation'

function Footer() {
  const pathname = usePathname()
  if (pathname === '/login' || pathname === '/register') {
    return null
  }
  return (
    <footer className=' bg-pink-100'>
      <div className='space-y-1 text-center text-xs text-blue-600'>
        <h6 className='flex items-center justify-center'>
          Copyright © 2023
          <Image className='h-3 w-8 object-contain' src={LogoWithTitle} alt='Logo de Unión Solidaria' />
        </h6>
        <p>Todos los derechos reservados </p>
      </div>
    </footer>
  )
}

export default Footer
