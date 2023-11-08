import { FieldErrors, UseFormRegister } from 'react-hook-form'
import { Input, TextElement } from '@/components'
import { InitiativeFormData } from '../form.interface'

interface LocationInfoProps {
  errors: FieldErrors<InitiativeFormData>
  register: UseFormRegister<InitiativeFormData>
}

const MultimediaInputs = ({ errors, register }: LocationInfoProps) => (
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

export default MultimediaInputs
