import { Input } from '@/components'
import { UseFormRegister } from 'react-hook-form'

interface LocationInfoProps {
  errors: any
  register: UseFormRegister<any>
}

const Multimedia = ({ errors, register }: LocationInfoProps) => (
  <div className='flex w-full flex-col gap-4'>
    <div className='flex flex-col gap-2'>
      <h1 className='titulo3 font-semibold'>Multimedia</h1>
      <hr />
    </div>
    <div className='flex grid-cols-2 flex-col gap-4 lg:grid'>
      <Input
        type='file'
        name='profileImage'
        label='Imagen de perfil'
        placeholder='Selecciona una imagen'
        hookForm={{
          register,
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
      <Input
        type='file'
        name='bannerImage'
        label='Imagen de portada'
        placeholder='Selecciona una imagen'
        hookForm={{
          register,
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

export default Multimedia
