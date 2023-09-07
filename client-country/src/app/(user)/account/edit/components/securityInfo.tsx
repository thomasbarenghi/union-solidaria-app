import { FormInput, Heading } from '@/components'
import { UseFormRegister } from 'react-hook-form'

interface GeneralInfoProps {
  errors: any
  register: UseFormRegister<any>
}

export default function SecurityInfo({ errors, register }: GeneralInfoProps) {
  return (
    <div className='flex w-full flex-col gap-4'>
      <div className='flex flex-col gap-2'>
        <Heading as='h2'>Información general</Heading>
        <hr />
      </div>
      <div className='flex grid-cols-2 flex-col gap-4 lg:grid'>
        <FormInput
          type='text'
          name='oldPassword'
          label='Contraseña actual'
          placeholder='Contraseña actual'
          hookForm={{
            register,
            validations: {
              maxLength: { value: 60, message: 'Maximo 60 caracteres' },
              minLength: { value: 5, message: 'Minimo 5 caracteres' },
              required: { value: false, message: 'Este campo no es requerido' }
            }
          }}
          error={errors?.oldPassword?.message}
        />
        <FormInput
          type='text'
          name='newPassword'
          label='Contraseña nueva'
          placeholder='Contraseña nueva'
          hookForm={{
            register,
            validations: {
              maxLength: { value: 60, message: 'Maximo 60 caracteres' },
              minLength: { value: 5, message: 'Minimo 5 caracteres' },
              required: { value: false, message: 'Este campo no es requerido' }
            }
          }}
          error={errors?.oldPassword?.message}
        />
      </div>
    </div>
  )
}
