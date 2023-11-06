import { Input, TextElement } from '@/components'
import { UseFormRegister } from 'react-hook-form'

interface LocationInfoProps {
  errors: any
  register: UseFormRegister<any>
}

const Multimedia = ({ errors, register }: LocationInfoProps) => (
  <div className='flex w-full flex-col gap-4'>
    <div className='flex flex-col gap-2'>
      <TextElement type='subtitle' as='h2'>
        Multimedia
      </TextElement>
      <hr />
    </div>
    <div className='flex grid-cols-2 flex-col gap-4 lg:grid'>
      <Input
        type='file'
        name='thumbnail'
        label='Imagen de portada'
        placeholder='Selecciona una imagen'
        hookForm={{
          register,
          validations: {
            required: { value: true, message: 'Este campo es requerido' },
            validate: (value: FileList) => {
              if (value.length > 0) {
                if (value[0].size > 5000000) {
                  return 'La imagen no debe pesar mas de 5MB'
                }
              }
            }
          }
        }}
        errorMessage={errors?.thumbnail?.message}
      />
    </div>
  </div>
)

export default Multimedia
