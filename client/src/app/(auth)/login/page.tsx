import Link from 'next/link'
import Routes from '@/utils/constants/routes.const'
import LoginForm from './components/loginForm'

const Login = () => (
  <div>
    <h1 className='titulo-3 mb-6 font-normal'>
      Hola, bienvenido <b>de nuevo</b>
    </h1>
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
