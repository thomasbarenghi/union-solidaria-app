'use client'
import { Button, Input, SimpleSelect } from '@/components'
import { type RegisterFormValues, type Role } from '@/interfaces'
import { signupUser } from '@/services/auth/signup.service'
import {
  emailPattern,
  firstNamePattern,
  lastNamePattern,
  organizationNamePattern,
  passwordPattern,
  phonePattern,
  usernamePattern
} from '@/utils/constants/pattern.const'
import Routes from '@/utils/constants/routes.const'
import { useRouter } from 'next/navigation'
import { useRef, useState } from 'react'
import { Controller, useForm } from 'react-hook-form'
import { nextIsDisabled } from '../nextIsDisabled'
import { toast } from 'sonner'

export interface FormValues extends RegisterFormValues {
  repeatPassword: string
}

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
    formState: { errors, isSubmitting },
    handleSubmit,
    setValue,
    control,
    reset,
    getValues,
    watch
  } = useForm<FormValues>({
    mode: 'onChange'
  })

  const onSubmit = async (data: FormValues) => {
    try {
      if (data.role === 'volunteer') delete data.orgName
      const { repeatPassword, birthday, ...values } = data
      const formData = {
        ...values,
        birthday: new Date(birthday)
      }
      const { error } = await signupUser(formData)

      if (error !== null) throw new Error(error.message)
      reset()
      router.push(Routes.LOGIN)
    } catch (error) {
      console.log(error)
      toast.error('Error al crear usuario')
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
                pattern: {
                  value: firstNamePattern.value,
                  message: firstNamePattern.message
                },
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
                pattern: {
                  value: lastNamePattern.value,
                  message: lastNamePattern.message
                },
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
                },
                required: { value: true, message: 'Este campo es requerido' }
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
                  value: emailPattern.value,
                  message: emailPattern.message
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
                  value: phonePattern.value,
                  message: phonePattern.message
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
                  value: usernamePattern.value,
                  message: usernamePattern.message
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
                  value: passwordPattern.value,
                  message: passwordPattern.message
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
                  value: passwordPattern.value,
                  message: passwordPattern.message
                },
                required: { value: true, message: 'Este campo es requerido' },
                validate: (val: string) => {
                  if (getValues()?.password !== val) {
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
                selectedValue={[getValues('role')]}
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
                  pattern: {
                    value: organizationNamePattern.value,
                    message: organizationNamePattern.message
                  },
                  required: { value: true, message: 'Este campo es requerido' }
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
          <Button
            type='button'
            className='w-full'
            onClick={() => setStep(step + 1)}
            isDisabled={nextIsDisabled(step, watch, errors)}
          >
            Siguiente
          </Button>
        )}
        {step === 3 && (
          <Button type='submit' fullWidth isLoading={isSubmitting} isDisabled={nextIsDisabled(step, watch, errors)}>
            Crear usuario
          </Button>
        )}
      </div>
    </form>
  )
}

export default RegisterForm
