import { FormInput, Heading } from '@/components'
import { UseFormRegister } from 'react-hook-form'

interface LocationInfoProps {
  errors: any
  register: UseFormRegister<any>
}

export default function LocationInfo({ errors, register }: LocationInfoProps) {
  return (
    <div className='flex w-full flex-col gap-4'>
      <div className='flex flex-col gap-2'>
        <Heading as='h2'>Ubicacion</Heading>
        <hr />
      </div>
      <div className='flex grid-cols-2 flex-col gap-4 lg:grid'>
        <FormInput
          type='text'
          name='locations'
          label='Direccion'
          placeholder='Direccion'
          required={false}
          hookForm={{
            register,
            validations: {
              pattern: {
                value: /^[a-zA-Z0-9 ]{5,80}$/,
                message: 'Debe ser de 5 a 80 caracteres, solo numeros y letras'
              },
              required: { value: true, message: 'Este campo es requerido' }
            }
          }}
          error={errors?.locations?.message}
        />
      </div>
    </div>
  )
}
