import Image from 'next/image'
import { Nav, TextElement } from '@/components'
import { itemsNav } from './lib/itemsNav'

const Footer = () => (
  <footer className='section-padding-1 flex w-full flex-col items-start justify-between gap-8  bg-green-800 lg:flex-row'>
    <div className='flex flex-col gap-2'>
      <Image src='/icon/logo-light.svg' alt='Vercel Logo' width={185} height={35} />
      <TextElement type='base' as='h3' className='text-white'>
        © 2023 Union Solidaria S.A. Todos los derechos reservados.
      </TextElement>
    </div>
    <div className='flex flex-col gap-1'>
      <TextElement type='base' as='h3' className='text-white !font-semibold'>
        Quizas te interese
      </TextElement>
      <Nav items={itemsNav} textStyles='text-white font-light' />
    </div>
  </footer>
)

export default Footer
