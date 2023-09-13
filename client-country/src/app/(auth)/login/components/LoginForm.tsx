'use client'
import { FormInput, PrimaryButton } from '@/components'
import { useState, useRef } from 'react'
import { useForm } from 'react-hook-form'
import { useRouter } from 'next/navigation'
import { usePostLocalLoginMutation } from '@/redux/services/authSession.service'
import Routes from '@/utils/constants/routes.const'

function LoginForm() {
  const router = useRouter()
  const [visibility] = useState(false)
  const [login] = usePostLocalLoginMutation()
  const formRef = useRef<HTMLFormElement>(null)
  const {
    register,
    formState: { errors },
    handleSubmit
  } = useForm({
    mode: 'onChange'
  })

  const onSubmit = async (data: any) => {
    console.log(data)
    try {
      await login(data).unwrap()
      router.push(Routes.HOME)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <form className='mx-auto flex max-w-sm flex-col items-center gap-4' onSubmit={handleSubmit(onSubmit)} ref={formRef}>
      <FormInput
        type='email'
        name='email'
        label='Email'
        placeholder='Email'
        hookForm={{
          register,
          validations: {
            pattern: {
              value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
              message: 'Debe ser un email valido'
            },
            required: { value: true, message: 'Este campo es requerido' }
          }
        }}
        error={errors?.email?.message}
      />
      <div className='relative flex w-full items-center'>
        <FormInput
          type={visibility ? 'text' : 'password'}
          name='password'
          label='Contraseña'
          placeholder='Contraseña'
          hookForm={{
            register,
            validations: {
              pattern: {
                value: /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d).{8,}$/,
                message: 'La contraseña debe tener al menos 8 caracteres, una mayuscula, una minuscula y un numero'
              },
              required: { value: true, message: 'Este campo es requerido' }
            }
          }}
          error={errors?.password?.message}
        />
      </div>
      <PrimaryButton>Iniciar sesión</PrimaryButton>
    </form>
  )
}

export default LoginForm

/* <div className='absolute bottom-0 right-0 top-[28px] flex items-center justify-center'>
          {visibility ? (
            <span onClick={close} className='  cursor-pointer'>
              <EyeOpenIcon className='h-6' />
            </span>
          ) : (
            <span onClick={open} className=' cursor-pointer'>
              <EyeCloseIcon className=' h-6' />
            </span>
          )}
        </div> */
