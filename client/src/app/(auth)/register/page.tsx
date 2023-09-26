import Link from 'next/link'
import Routes from '@/utils/constants/routes.const'
import RegisterForm from './components/Form'
import { TextElement } from '@/components'

const Register = () => (
  <div>
    <TextElement type='t3' as='h1' className='mb-6'>
      Registrate en <span className='font-semibold'>U.S.</span>
    </TextElement>
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
