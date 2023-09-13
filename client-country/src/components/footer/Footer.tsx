'use client'
import { usePathname } from 'next/navigation'
import DesktopFooter from './DesktopFooter'
import MobileFooter from './MobileFooter'

function Footer() {
  const pathname = usePathname()

  if (pathname === '/login' || pathname === '/register') {
    return null
  }

  return (
    <footer className='bg-pink-100'>
      <MobileFooter />
      <DesktopFooter />
    </footer>
  )
}

export default Footer
