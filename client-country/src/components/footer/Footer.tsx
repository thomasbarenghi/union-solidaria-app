'use client'
import Image from 'next/image'
import { usePathname } from 'next/navigation'

function Footer() {
  const pathname = usePathname()

  if (pathname === '/login' || pathname === '/register') {
    return null
  }
  return (
    <footer className='space-y-1 bg-pink-100 py-6 text-center text-xs text-blue-600'>
      <h6 className='flex items-center justify-center'>
        Copyright © 2023
        <Image
          className='h-3 w-8 object-contain'
          src='/assets/logoWithTitle.png'
          alt='Logo de Unión Solidaria'
          width={32}
          height={12}
        />
      </h6>
      <p>Todos los derechos reservados </p>
    </footer>
  )
}

export default Footer
