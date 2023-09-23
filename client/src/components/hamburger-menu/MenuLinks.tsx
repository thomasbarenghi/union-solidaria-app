import Routes from '@/utils/constants/routes.const'
import Image from 'next/image'
import Link from 'next/link'
import HelpIcon from '../icons/HelpIcon'
import HomeIcon from '../icons/HomeIcon'
import InitiativesIcon from '../icons/InitiativesIcon'
import InstitutionalIcon from '../icons/InstitutionalIcon'

const links = [
  {
    to: Routes.HOME,
    icon: <HomeIcon className='h-6 w-6 fill-blue-700' />,
    title: 'Inicio'
  },
  {
    to: Routes.INITIATIVES,
    icon: <InitiativesIcon className='h-6 w-6 fill-blue-700' />,
    title: 'Iniciativas'
  },
  {
    to: Routes.ABOUT,
    icon: <Image src='/assets/logo.webp' width={24} height={24} alt='Logo Uninón Solidaria' />,
    title: 'Acerca de nosotros'
  },
  {
    to: Routes.INSTITUTIONAL,
    icon: <InstitutionalIcon className='h-6 w-6 fill-blue-700' />,
    title: 'Institucional'
  },
  {
    to: Routes.HELP,
    icon: <HelpIcon className='h-6 w-6 fill-blue-700' />,
    title: 'Ayuda'
  }
]

interface Props {
  menuOpen: () => void
}

function MenuLinks({ menuOpen }: Props) {
  return (
    <ul className='flex flex-col gap-6 border-b-2 border-gray-400 p-6'>
      {links.map((link) => (
        <Link href={link.to} key={link.title} onClick={menuOpen}>
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
