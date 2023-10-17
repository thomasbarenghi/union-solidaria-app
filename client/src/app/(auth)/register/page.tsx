import Link from 'next/link'
import Routes from '@/utils/constants/routes.const'
import RegisterForm from './components/Form'
import { TextElement } from '@/components'
import Base from '../components/BaseLayout'

const Register = () => (
  <Base image='https://images.unsplash.com/photo-1485309086598-f9d010ad3972?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=100'>
    <div className='flex h-full  flex-col justify-between'>
      <div className='flex h-full flex-col justify-center gap-5'>
        <div>
          <TextElement type='t2' as='h1' className='text-center'>
            Te damos la <b>bienvenida</b>
          </TextElement>
          <TextElement type='base' as='p' className='text-center'>
            Ingresa tus datos
          </TextElement>
        </div>
        <div>
          <RegisterForm />
        </div>
      </div>
      <p className='mt-6 w-full text-center font-light'>
        ¿Ya tienes una cuenta?{' '}
        <Link href={Routes.LOGIN} className='font-medium text-emerald-800'>
          Ingresar
        </Link>
      </p>
    </div>
  </Base>
)

export default Register
