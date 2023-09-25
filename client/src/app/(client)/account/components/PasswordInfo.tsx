import { Input } from '@/components'
import { FieldValues, UseFormGetValues, UseFormRegister } from 'react-hook-form'

interface GeneralInfoProps {
  errors: any
  register: UseFormRegister<any>
  getValues: UseFormGetValues<FieldValues>
}

const SecurityInfo = ({ errors, register, getValues }: GeneralInfoProps) => (
  <div className='flex grid-cols-2 flex-col gap-4 w-full lg:grid'>
    <Input
      type='text'
      name='oldPassword'
      label='Contraseña actual'
      placeholder='Contraseña actual'
      hookForm={{
        register,
        validations: {
          pattern: {
            value: /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d).{8,}$/,
            message: 'La contraseña debe tener al menos 8 caracteres, una mayuscula, una minuscula y un numero'
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
      type='text'
      name='newPassword'
      label='Contraseña nueva'
      placeholder='Contraseña nueva'
      hookForm={{
        register,
        validations: {
          pattern: {
            value: /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d).{8,}$/,
            message: 'La contraseña debe tener al menos 8 caracteres, una mayuscula, una minuscula y un numero'
          },
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
