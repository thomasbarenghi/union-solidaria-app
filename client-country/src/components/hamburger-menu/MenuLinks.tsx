import Image from 'next/image'
// import { InitiativesIcon, InstitutionalIcon, HelpIcon } from '@/components'
import Link from 'next/link'

const links = [
  {
    to: '/',
    icon: <Image src='Logo.svg' width={27} height={27} alt='Logo Uninón Solidaria' />,
    title: 'Inicio'
  },
  {
    to: '/initiatives',
    icon: <Image src='Logo.svg' width={27} height={27} alt='Logo Uninón Solidaria' />,
    title: 'Iniciativas'
  },
  {
    to: '/about',
    icon: <Image src='Logo.svg' width={27} height={27} alt='Logo Uninón Solidaria' />,
    title: 'Acerca de nosotros'
  },
  {
    to: '/institutional',
    icon: <Image src='Logo.svg' width={27} height={27} alt='Logo Uninón Solidaria' />,
    title: 'Institucional'
  },
  {
    to: '/help',
    icon: <Image src='Logo.svg' width={27} height={27} alt='Logo Uninón Solidaria' />,
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
      {links.map((link) => (
        <Link href={link.to} key={link.title} onClick={handleClick}>
          <li className='flex items-center gap-2 text-blue-700'>
            {link.icon}
            <span>{link.title}</span>
          </li>
        </Link>
      ))}
    </ul>
  )
}

export default MenuLinks
