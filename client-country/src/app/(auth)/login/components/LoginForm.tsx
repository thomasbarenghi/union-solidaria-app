'use client'
//import { EyeCloseIcon, EyeOpenIcon, PrimaryButton, FormInput } from '@/components'
import { FormInput, PrimaryButton } from '@/components'
import { useState, useRef } from 'react'
import { useForm } from 'react-hook-form'
import { useRouter } from 'next/navigation'
import { useAppDispatch } from '@/redux/hooks'
import { login } from '@/redux/slices/authSession'

interface FormProps {
  email: string
  password: string
}

function LoginForm() {
  const router = useRouter()
  const dispatch = useAppDispatch()
  const [visibility, setVisibility] = useState(false)
  const close = () => setVisibility(false)
  const open = () => setVisibility(true)
  const [formValues, setFormValues] = useState<FormProps>({
    email: '',
    password: ''
  })
  const formRef = useRef<HTMLFormElement>(null)
  const {
    register,
    formState: { errors },
    handleSubmit
  } = useForm({
    mode: 'onChange'
  })

  const handleChange = (e: any) => {
    const { name, value, type } = e.target
    if (type === 'file') {
      return setFormValues({ ...formValues, [name]: e?.target?.files[0] })
    }
    setFormValues({ ...formValues, [name]: value })
  }

  const onSubmit = async (data: any) => {
    try {
      await dispatch(login(data))
      router.push('/')
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <form className='mx-auto flex max-w-sm flex-col items-center gap-4' onSubmit={handleSubmit(onSubmit)} ref={formRef}>
      <FormInput
        type='email'
        name='email'
        label='Email'
        onChange={handleChange}
        placeholder='Email'
        value={formValues.email}
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
          value={formValues.password}
          placeholder='Contraseña'
          onChange={handleChange}
          hookForm={{
            register: register,
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
