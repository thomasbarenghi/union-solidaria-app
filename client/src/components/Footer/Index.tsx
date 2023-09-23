import Image from 'next/image'
import { Nav } from '@/components'
import { itemsNav } from './lib/itemsNav'

const Footer = () => (
  <footer className='section-padding-1 flex w-full flex-col items-start justify-between gap-8  bg-green-800 lg:flex-row'>
    <div className='flex flex-col gap-2'>
      <Image src='/icon/logo-light.svg' alt='Vercel Logo' width={185} height={35} />
      <p className='smallText font-light text-white'>© 2023 Union Solidaria S.A. Todos los derechos reservados.</p>
    </div>
    <div className='flex flex-col gap-1'>
      <h3 className='bodyText font-medium text-white'>Quizas te interese</h3>
      <Nav items={itemsNav} textStyles='text-white font-light' />
    </div>
  </footer>
)

export default Footer
