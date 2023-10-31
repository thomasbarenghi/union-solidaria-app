import { Input } from '@/components'
import { UpdatePasswordFormValues } from '@/interfaces'
import { UseFormGetValues, UseFormRegister } from 'react-hook-form'

interface GeneralInfoProps {
  errors: any
  register: UseFormRegister<any>
  getValues: UseFormGetValues<UpdatePasswordFormValues>
}

const SecurityInfo = ({ errors, register, getValues }: GeneralInfoProps) => (
  <div className='flex w-full grid-cols-2 flex-col gap-4 lg:grid'>
    <Input
      type='text'
      name='oldPassword'
      label='Contraseña actual'
      placeholder='Contraseña actual'
      hookForm={{
        register,
        validations: {
          required: {
            value: getValues()?.oldPassword?.length > 0,
            message: 'Este campo es requerido'
          }
        }
      }}
      errorMessage={errors?.oldPassword?.message?.toString()}
    />
    <Input
      type='text'
      name='newPassword'
      label='Contraseña nueva'
      placeholder='Contraseña nueva'
      hookForm={{
        register,
        validations: {
          required: {
            value: getValues()?.oldPassword?.length > 0,
            message: 'Este campo es requerido'
          }
        }
      }}
      errorMessage={errors?.oldPassword?.message?.toString()}
    />
  </div>
)

export default SecurityInfo
