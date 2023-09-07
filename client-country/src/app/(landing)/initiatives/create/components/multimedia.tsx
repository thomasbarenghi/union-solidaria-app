import { FormInput, Heading } from '@/components'
import { FormProps } from './form'
import { UseFormRegister } from 'react-hook-form'

type LocationInfoProps = {
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  formValues: FormProps
  errors: any
  register: UseFormRegister<any>
}

export default function Multimedia({ handleChange, formValues, errors, register }: LocationInfoProps) {
  return (
    <div className='flex w-full flex-col gap-4'>
      <div className='flex flex-col gap-2'>
        <Heading as='h2'>Multimedia</Heading>
        <hr />
      </div>
      <div className='flex grid-cols-2 flex-col gap-4 lg:grid'>
        <FormInput
          type='file'
          name='thumbnail'
          label='Imagen de portada'
          placeholder='Selecciona una imagen'
          required={false}
          onChange={handleChange}
          hookForm={{
            register: register,
            validations: {
              required: false,
              validate: (value: any) => {
                if (value.length > 0) {
                  if (value[0].size > 5000000) {
                    return 'La imagen no debe pesar mas de 5MB'
                  }
                }
              }
            }
          }}
          error={errors?.thumbnail?.message}
        />
      </div>
    </div>
  )
}
