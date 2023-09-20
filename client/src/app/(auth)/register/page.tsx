import Link from 'next/link'
import Routes from '@/utils/constants/routes.const'
import RegisterForm from './components/registerForm'

const Register = () => (
  <div>
    <h1 className='titulo-3 mb-6 font-normal'>
      Registrate en <span className='font-semibold'>U.S.</span>
    </h1>
    <RegisterForm />
    <p className='mt-6 w-full text-center font-light'>
      ¿Ya tienes una cuenta?{' '}
      <Link href={Routes.LOGIN} className='font-medium text-emerald-800'>
        Ingresar
      </Link>
    </p>
  </div>
)

export default Register
