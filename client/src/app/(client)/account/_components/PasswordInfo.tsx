import { Input } from '@/components'
import { UpdatePasswordFormValues } from '@/interfaces'
import { passwordPattern } from '@/utils/constants/pattern.const'
import { UseFormGetValues, UseFormRegister } from 'react-hook-form'

interface GeneralInfoProps {
  errors: any
  register: UseFormRegister<any>
  getValues: UseFormGetValues<UpdatePasswordFormValues>
}

const SecurityInfo = ({ errors, register, getValues }: GeneralInfoProps) => (
  <div className='flex w-full grid-cols-2 flex-col gap-4 lg:grid'>
    <Input
      type='password'
      name='oldPassword'
      label='Contraseña actual'
      placeholder='Contraseña actual'
      hookForm={{
        register,
        validations: {
          pattern: {
            value: passwordPattern.value,
            message: passwordPattern.message
          },
          required: {
            value: getValues()?.oldPassword?.length > 0,
            message: 'Este campo es requerido'
          }
        }
      }}
      errorMessage={errors?.oldPassword?.message?.toString()}
    />
    <Input
      type='password'
      name='newPassword'
      label='Contraseña nueva'
      placeholder='Contraseña nueva'
      hookForm={{
        register,
        validations: {
          pattern: {
            value: passwordPattern.value,
            message: passwordPattern.message
          },
          required: {
            value: getValues()?.oldPassword?.length > 0,
            message: 'Este campo es requerido'
          }
        }
      }}
      errorMessage={errors?.newPassword?.message?.toString()}
    />
  </div>
)

export default SecurityInfo
