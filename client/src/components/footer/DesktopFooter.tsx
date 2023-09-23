import { Button, HeartIcon } from '@/components'
import Routes from '@/utils/constants/routes.const'
import Image from 'next/image'
import Link from 'next/link'

function DesktopFooter() {
  return (
    <div className='mx-auto hidden max-w-screen-lg items-center justify-between px-4 py-6 text-center text-gray-500 2lg:flex'>
      <div className='grid gap-y-2 text-sm'>
        <Image
          className='h-20 w-52 object-contain'
          width={208}
          height={80}
          src='/assets/logo-with-title.png'
          alt='Logo de Unión Solidaria'
        />
        <h6>Copyright © 2023</h6>
        <p>Todos los derechos reservados </p>
        <ul className='flex items-center justify-center gap-x-9'>
          <li>
            <Link href='#'>
              <Image src='/assets/facebook.png' width={36} height={36} alt='Icono de la red social de facebook' />
            </Link>
          </li>
          <li>
            <Link href='#'>
              <Image src='/assets/instagram.png' width={36} height={36} alt='Icono de la red social de instagram' />
            </Link>
          </li>
          <li>
            <Link href='#'>
              <Image src='/assets/linkedin.png' width={36} height={36} alt='Icono de la red social de linkedin' />
            </Link>
          </li>
        </ul>
      </div>
      <div className='grid max-w-[182px] place-items-center gap-y-4'>
        <p className='text-center text-base'>¿Estás listo/a para hacer la diferencia?</p>
        <Link href={Routes.DONATION}>
          <Button variant='secondary' iconLeft={<HeartIcon className='h-3 w-3 fill-blue-700' />}>
            Donar
          </Button>
        </Link>
      </div>
      <ul className='space-y-5 text-left text-base font-bold text-blue-500'>
        <li className='text-xl'>Institucional</li>
        <li>
          <Link href={Routes.INSTITUTIONAL_TYC}>Términos y condiciones</Link>
        </li>
        <li>
          <Link href={Routes.INSTITUTIONAL_PDP}>Política de privacidad</Link>
        </li>
      </ul>
    </div>
  )
}

export default DesktopFooter
