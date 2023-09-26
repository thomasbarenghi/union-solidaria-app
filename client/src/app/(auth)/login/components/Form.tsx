/* eslint-disable @typescript-eslint/no-misused-promises */
'use client'
import { Input, Button } from '@/components'
import { useState, useRef } from 'react'
import { useForm } from 'react-hook-form'
import { useRouter } from 'next/navigation'
import { usePostLocalLoginMutation } from '@/redux/services/authSession.service'
import Routes from '@/utils/constants/routes.const'

const LoginForm = () => {
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
      alert('Error al iniciar sesión')
    }
  }

  return (
    <form className='mx-auto flex max-w-sm flex-col items-center gap-4' onSubmit={handleSubmit(onSubmit)} ref={formRef}>
      <Input
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
        errorMessage={errors?.email?.message?.toString()}
      />
      <div className='relative flex w-full items-center'>
        <Input
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
          errorMessage={errors?.password?.message?.toString()}
        />
      </div>
      <Button type='submit' title='Iniciar sesion' fullWidth />
    </form>
  )
}

export default LoginForm
