'use client'
import { FormInput, Submit, UnstyledSelect, VisibilityOffIcon, VisibilityOnIcon } from '@/components'
import { useRef, useState } from 'react'
import { Controller, useForm } from 'react-hook-form'
import { usePostUsersMutation } from '@/redux/services/users.service'
import { useRouter } from 'next/navigation'
import Routes from '@/utils/constants/routes.const'

const roles = [
  {
    value: 'volunteer',
    label: 'Voluntario'
  },
  {
    value: 'organization',
    label: 'Organizacion'
  }
]

export default function Form() {
  const formRef = useRef<HTMLFormElement>(null)
  const router = useRouter()
  const [addUser] = usePostUsersMutation()
  const [role, setRole] = useState<string>('volunteer')
  const [visibility, setPwdVisibility] = useState(false)
  const [visibility2, setPwdVisibility2] = useState(false)
  const {
    register,
    formState: { errors },
    handleSubmit,
    setValue,
    control,
    watch
  } = useForm({
    mode: 'onChange'
  })

  const cleanForm = () => {
    formRef.current?.reset()
  }

  const onSubmit = async (data: any) => {
    try {
      delete data.repeatPassword
      const formData = {
        ...data,
        birthday: new Date(data.birthday).toISOString()
      }
      console.log(errors, formData)
      await addUser(formData).unwrap()
      router.push(Routes.LOGIN)
      cleanForm()
    } catch (error) {
      console.log(error)
      alert('Error al crear usuario')
    }
  }

  return (
    <form
      className=' mx-auto my-0 grid max-w-lg grid-cols-1 justify-items-center gap-3 p-6 md:justify-items-start md:py-20'
      onSubmit={handleSubmit(onSubmit)}
      ref={formRef}
    >
      <h1 className='col-span-full mb-5 self-start justify-self-start text-2xl font-bold text-pink-500 md:justify-self-center'>
        ¡Registrate!
      </h1>
      <FormInput
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
        error={errors?.firstName?.message}
      />
      <FormInput
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
        error={errors?.lastName?.message}
      />
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
      <FormInput
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
        error={errors?.phone?.message}
      />
      <FormInput
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
        error={errors?.username?.message}
      />
      <FormInput
        type='date'
        name='birthday'
        label='Fecha de nacimiento'
        placeholder='Fecha de nacimiento'
        required={false}
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
        error={errors?.birthday?.message}
      />
      <Controller
        name='role'
        control={control}
        rules={{ required: { value: true, message: 'Este campo es requerido' } }}
        render={({ field }) => (
          <UnstyledSelect
            field={field}
            name='role'
            label='¿Que tipo de usuario eres?'
            setSelected={(selected) => {
              setValue('role', selected)
              setRole(selected)
            }}
            names={roles}
            placeholder='Selecciona una opcion'
            error={errors?.role?.message}
          />
        )}
      />
      {role === 'organization' && (
        <FormInput
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
          error={errors?.orgName?.message}
        />
      )}
      <FormInput
        type={visibility ? 'text' : 'password'}
        name='password'
        label='Contraseña'
        placeholder='Contraseña'
        setIconVisibility={setPwdVisibility}
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
        icon_1={<VisibilityOffIcon />}
        icon_2={<VisibilityOnIcon />}
      />
      <FormInput
        type={visibility2 ? 'text' : 'password'}
        name='repeatPassword'
        label='Repite la contraseña'
        placeholder='Repite la contraseña'
        setIconVisibility={setPwdVisibility2}
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
        error={errors?.repeatPassword?.message}
        icon_1={<VisibilityOffIcon />}
        icon_2={<VisibilityOnIcon />}
      />
      <Submit content='Crear cuenta' />
    </form>
  )
}
