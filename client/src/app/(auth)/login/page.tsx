import Link from 'next/link'
import Routes from '@/utils/constants/routes.const'
import LoginForm from './components/Form'
import { TextElement } from '@/components'
import Base from '../components/BaseLayout'

const Login = () => (
  <Base image='https://images.unsplash.com/photo-1516558781830-2c603b601b59?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1600&q=100'>
    <div className='flex h-full  flex-col justify-between'>
      <div className='flex h-full flex-col justify-center gap-5'>
        <div>
          <TextElement type='t2' as='h1' className='text-center'>
            Bienvenido <b>de nuevo</b>
          </TextElement>
          <TextElement type='base' as='p' className='text-center'>
            Ingresa tus credenciales
          </TextElement>
        </div>
        <div>
          <LoginForm />
        </div>
      </div>
      <p className='mt-6 w-full text-center font-light'>
        ¿No tienes una cuenta?{' '}
        <Link href={Routes.REGISTER} className='font-medium text-emerald-800'>
          Regístrate
        </Link>
      </p>
    </div>
  </Base>
)

export default Login
