import Link from 'next/link'
import Routes from '@/utils/constants/routes.const'
import LoginForm from './components/loginForm'
import { TextElement } from '@/components'

const Login = () => (
  <div>
    <TextElement type='t3' as='h1' className='mb-6'>
      Hola, bienvenido <b>de nuevo</b>
    </TextElement>
    <LoginForm />
    <p className='mt-6 w-full text-center font-light'>
      ¿No tienes una cuenta?{' '}
      <Link href={Routes.REGISTER} className='font-medium text-emerald-800'>
        Regístrate
      </Link>
    </p>
  </div>
)

export default Login
