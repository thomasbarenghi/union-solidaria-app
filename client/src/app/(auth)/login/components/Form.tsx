'use client'
import { Input, Button } from '@/components'
import { useState, useRef } from 'react'
import { useForm, type SubmitHandler } from 'react-hook-form'
import { signIn } from 'next-auth/react'
import { type LoginFormValues } from '@/interfaces/forms.interface'
import { useRouter } from 'next/navigation'
import Routes from '@/utils/constants/routes.const'
import { FetchError } from '@/interfaces/error.interface'
import { FetchLoginStatus } from '@/types/fetch-status'
// import GoogleButton from './google'

const LoginForm = () => {
  const [visibility] = useState(false)
  const formRef = useRef<HTMLFormElement>(null)
  const router = useRouter()
  const {
    register,
    formState: { errors, isSubmitting, isSubmitted },
    handleSubmit,
    setError
  } = useForm<LoginFormValues>({
    mode: 'onChange'
  })

  const onSubmit: SubmitHandler<LoginFormValues> = async (data) => {
    try {
      // 'status' and 'ok' properties of signIn method return does not work correctly
      // docs about signIn() https://next-auth.js.org/getting-started/client#using-the-redirect-false-option
      // docs about open issue https://github.com/nextauthjs/next-auth/issues/7638
      const responseNextAuth = await signIn('credentials', {
        email: data.email,
        password: data.password,
        redirect: false
      })

      if (responseNextAuth?.error !== null) {
        const error: FetchError<FetchLoginStatus> = JSON.parse(responseNextAuth?.error as string)
        const { status, message } = error

        if (status === 401) {
          console.error(message)
          setError('root', { type: 'custom', message: 'Credenciales inválidas' })
          return
        }
        if (status === 500) {
          console.error(message)
          setError('root', { type: 'custom', message: 'No se pudo lograr la conexión con el servidor' })
          return
        }
        if (status === 'unhandled') {
          console.error(message)
          setError('root', { type: 'custom', message: 'Error inesperado, intentelo de nuevo' })
          return
        }
      }

      router.push(Routes.HOME)
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <div className=' flex flex-col items-center gap-4 w-full'>
      <form className='w-full flex flex-col items-center gap-4' onSubmit={handleSubmit(onSubmit)} ref={formRef}>
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
                required: { value: true, message: 'Este campo es requerido' }
              }
            }}
            errorMessage={errors?.password?.message?.toString()}
          />
        </div>
        <Button type='submit' fullWidth isLoading={isSubmitting || isSubmitted}>
          Iniciar sesion
        </Button>
      </form>
      {/* <GoogleButton /> */}
      {errors.root !== undefined ? (
        <p className='rounded-xl border border-red-600 bg-red-600 bg-opacity-40 px-3 py-1 text-sm text-red-800'>
          {errors.root?.message}
        </p>
      ) : null}
    </div>
  )
}

export default LoginForm
