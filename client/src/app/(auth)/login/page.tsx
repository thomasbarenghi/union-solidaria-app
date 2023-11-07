import Link from 'next/link'
import Routes from '@/utils/constants/routes.const'
import LoginForm from './_components/Form'
import { TextElement } from '@/components'
import Base from '../_components/BaseLayout'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Ingresar | Union Solidaria'
}

const Login = () => (
  <Base image='https://images.unsplash.com/photo-1603826773225-dc71731b1c2d?auto=format&fit=crop&q=80&w=1374&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'>
    <div className='flex h-full flex-col items-center justify-between gap-5 '>
      <div>
        <TextElement type='t2' as='h1' className='text-center'>
          Inicio de <b>sesión</b>
        </TextElement>
        <p className='w-full text-center font-light'>
          ¿No tienes una cuenta?{' '}
          <Link href={Routes.REGISTER} className='font-medium text-emerald-800'>
            Regístrate
          </Link>
        </p>
      </div>
      <LoginForm />
      <p className='w-full text-center font-light'>
        ¿No puedes ingresar?
        <br />
        <Link href={Routes.HELP} className='font-medium text-emerald-800'>
          Ir a ayuda
        </Link>
      </p>
    </div>
  </Base>
)

export default Login
