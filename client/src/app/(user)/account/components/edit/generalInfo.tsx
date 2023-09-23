import { FormInput, Heading } from '@/components'
import { UseFormRegister } from 'react-hook-form'

interface GeneralInfoProps {
  errors: any
  register: UseFormRegister<any>
  currentUser: any
}

export default function GeneralInfo({ errors, register, currentUser }: GeneralInfoProps) {
  return (
    <div className='flex w-full flex-col gap-4'>
      <div className='flex flex-col gap-2'>
        <Heading as='h2'>Información general</Heading>
        <hr />
      </div>
      <div className='flex grid-cols-2 flex-col gap-4 lg:grid'>
        <FormInput
          type='text'
          name='firstName'
          defaultValue={currentUser?.firstName}
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
          defaultValue={currentUser?.lastName}
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
          defaultValue={currentUser?.email}
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
          name='username'
          label='Nombre de usuario'
          defaultValue={currentUser?.username}
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
      </div>
    </div>
  )
}
