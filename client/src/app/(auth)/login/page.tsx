import Link from 'next/link'
import { LoginForm } from './components'
import Routes from '@/utils/constants/routes.const'
import Image from 'next/image'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Ingresar | Unión Solidaria'
}

export default function LoginPage() {
  return (
    <main className='p-section flex min-h-screen flex-col items-center justify-center'>
      <div className='mb-5 flex items-center justify-center '>
        <Image src='Logo.svg' width={130} height={130} alt='Logo Unión Solidaria' />
        <h1 className='text-3xl'>
          <span className='text-pink-500'>Unión</span>
          <br />
          <span className='text-blue-500'>Solidaria</span>
        </h1>
      </div>
      <LoginForm />
      {/* <GoogleButton /> */}
      <div className='mt-6 text-center'>
        <p>¿No tenés cuenta?</p>
        <Link href={Routes.REGISTER} className='mt-2 font-bold text-blue-500'>
          Registrate
        </Link>
      </div>
    </main>
  )
}
