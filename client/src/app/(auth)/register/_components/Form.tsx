'use client'
import { Button, Input, SimpleSelect } from '@/components'
import { useRef, useState } from 'react'
import { Controller, useForm } from 'react-hook-form'
import { useRouter } from 'next/navigation'
import Routes from '@/utils/constants/routes.const'
import { RegisterFormValues } from '@/interfaces/forms.interface'
import { Role } from '@/interfaces'
import { signupUser } from '@/services/auth/signup.service'

const roles: Array<{ value: Role; label: string }> = [
  {
    value: 'volunteer',
    label: 'Voluntario'
  },
  {
    value: 'organization',
    label: 'Organizacion'
  }
]

const RegisterForm = () => {
  const formRef = useRef<HTMLFormElement>(null)
  const router = useRouter()
  const [role, setRole] = useState<string>('volunteer')
  const [step, setStep] = useState<number>(0)
  const {
    register,
    formState: { errors, isSubmitting, isSubmitted },
    handleSubmit,
    setValue,
    control,
    watch,
    reset
  } = useForm<RegisterFormValues & { repeatPassword: string }>({
    mode: 'onChange'
  })

  const onSubmit = async (data: any) => {
    try {
      delete data.repeatPassword
      const birthday = new Date(data.birthday)
      const formData = {
        ...data,
        birthday
      }
      const { error } = await signupUser(formData)
      if (error !== null) throw new Error(error.message)
      reset()
      router.push(Routes.LOGIN)
    } catch (error) {
      console.log(error)
      alert('Error al crear usuario')
    }
  }

  return (
    <form className='grid grid-cols-1 justify-items-center gap-3 ' onSubmit={handleSubmit(onSubmit)} ref={formRef}>
      {step === 0 && (
        <>
          <Input
            type='text'
            name='firstName'
            label='Nombre'
            placeholder='Nombre'
            hookForm={{
              register,
              validations: {
                maxLength: { value: 60, message: 'Maximo 60 caracteres' },
                minLength: { value: 5, message: 'Minimo 5 caracteres' },
                required: { value: true, message: 'Este campo es requerido' }
              }
            }}
            errorMessage={errors?.firstName?.message?.toString()}
          />
          <Input
            type='text'
            name='lastName'
            label='Apellido'
            placeholder='Apellido'
            hookForm={{
              register,
              validations: {
                maxLength: { value: 60, message: 'Maximo 60 caracteres' },
                minLength: { value: 5, message: 'Minimo 5 caracteres' },
                required: { value: true, message: 'Este campo es requerido' }
              }
            }}
            errorMessage={errors?.lastName?.message?.toString()}
          />
          <Input
            type='date'
            name='birthday'
            label='Fecha de nacimiento'
            placeholder='Fecha de nacimiento'
            hookForm={{
              register,
              validations: {
                required: { value: true, message: 'Este campo es requerido' },
                validate: (value: string) => {
                  const date = new Date(value)
                  const minDate = new Date()
                  const currentDate = new Date()
                  minDate.setFullYear(minDate.getFullYear() - 18)
                  if (date > minDate) {
                    return 'Debes ser mayor de edad'
                  }
                  if (date.getFullYear() <= currentDate.getFullYear() - 100) {
                    return 'La fecha debe ser maximo 100 años antes de hoy'
                  }
                  return true
                }
              }
            }}
            errorMessage={errors?.birthday?.message?.toString()}
          />
        </>
      )}
      {step === 1 && (
        <>
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
          <Input
            type='text'
            name='phone'
            label='Telefono'
            placeholder='Telefono'
            hookForm={{
              register,
              validations: {
                pattern: {
                  value: /^\+[0-9]{1,3} [0-9]{1,3} [0-9]{4,12}$/i,
                  message: 'Debe ser un telefono valido, con codigo de pais y codigo de area. Ejemplo: +54 11 33338888'
                },
                required: { value: true, message: 'Este campo es requerido' }
              }
            }}
            errorMessage={errors?.phone?.message?.toString()}
          />
          <Input
            type='text'
            name='username'
            label='Nombre de usuario'
            placeholder='Nombre de usuario'
            hookForm={{
              register,
              validations: {
                pattern: {
                  value: /^[a-zA-Z0-9 ]{5,30}$/,
                  message: 'Debe ser de 5 a 30 caracteres, solo numeros y letras'
                },
                required: { value: true, message: 'Este campo es requerido' }
              }
            }}
            errorMessage={errors?.username?.message?.toString()}
          />
        </>
      )}
      {step === 2 && (
        <>
          <Input
            type='password'
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
          <Input
            type='password'
            name='repeatPassword'
            label='Repite la contraseña'
            placeholder='Repite la contraseña'
            hookForm={{
              register,
              validations: {
                pattern: {
                  value: /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d).{8,}$/,
                  message: 'La contraseña debe tener al menos 8 caracteres, una mayuscula, una minuscula y un numero'
                },
                required: { value: true, message: 'Este campo es requerido' },
                validate: (val: string) => {
                  if (watch('password') !== val) {
                    return 'Las contraseñas no coinciden'
                  }
                }
              }
            }}
            errorMessage={errors?.repeatPassword?.message?.toString()}
          />
        </>
      )}
      {step === 3 && (
        <>
          <Controller
            name='role'
            control={control}
            rules={{ required: { value: true, message: 'Este campo es requerido' } }}
            render={({ field }: any) => (
              <SimpleSelect
                name='role'
                field={field}
                label='¿Que tipo de usuario eres?'
                setSelected={(selected) => {
                  setValue('role', selected as Role)
                  setRole(selected)
                }}
                names={roles}
                placeholder='Selecciona una opcion'
                errorMessage={errors?.role?.message?.toString()}
              />
            )}
          />
          {role === 'organization' && (
            <Input
              type='text'
              name='orgName'
              label='Nombre de la organizacion'
              placeholder='Nombre de la organizacion'
              hookForm={{
                register,
                validations: {
                  required: { value: true, message: 'Este campo es requerido' },
                  maxLength: { value: 60, message: 'Maximo 60 caracteres' }
                }
              }}
              errorMessage={errors?.orgName?.message?.toString()}
            />
          )}
        </>
      )}
      <div className='mt-1 flex w-full justify-stretch gap-1'>
        {step > 0 && (
          <Button type='button' variant='flat' onClick={() => setStep(step - 1)}>
            Atras
          </Button>
        )}
        {step < 3 && (
          <Button type='button' className='w-full' onClick={() => setStep(step + 1)}>
            Siguiente
          </Button>
        )}
        {step === 3 && (
          <Button type='submit' fullWidth isLoading={isSubmitting || isSubmitted}>
            Crear usuario
          </Button>
        )}
      </div>
    </form>
  )
}

export default RegisterForm