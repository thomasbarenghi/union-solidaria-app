import Image from 'next/image'
import { HomeIcon, InitiativesIcon, InstitutionalIcon, HelpIcon } from '@/components'
import Link from 'next/link'

const links = [
  {
    to: '/',
    icon: <HomeIcon className='fill-blue-700 h-7 w-auto' />,
    title: 'Inicio'
  },
  {
    to: '/initiatives',
    icon: <InitiativesIcon className='fill-blue-700 h-7 w-auto' />,
    title: 'Iniciativas'
  },
  {
    to: '/about',
    icon: <Image src='Logo.svg' width={27} height={27} alt='Logo Uninón Solidaria' />,
    title: 'Acerca de nosotros'
  },
  {
    to: '/institutional',
    icon: <InstitutionalIcon className='fill-blue-700 h-9 w-auto' />,
    title: 'Institucional'
  },
  {
    to: '/help',
    icon: <HelpIcon className='fill-blue-700 h-7 w-auto' />,
    title: 'Ayuda'
  }
]

interface Props {
  setMenuOpen: () => void
}

function MenuLinks({ setMenuOpen }: Props) {
  const handleClick = () => {
    setTimeout(() => {
      setMenuOpen()
    }, 800)
  }

  return (
    <ul className='flex flex-col gap-6 border-b-2 border-gray-400 p-6'>
      {
        links.map(link => (
          <Link href={link.to} key={link.title} onClick={handleClick}>
            <li className='flex gap-2 items-center text-blue-700'>
              {link.icon}
              <span>{link.title}</span>
            </li>
          </Link>
        ))
      }

    </ul>
  )
}

export default MenuLinks
