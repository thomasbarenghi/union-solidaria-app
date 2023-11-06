import { Input } from '@/components'
import { emailPattern, firstNamePattern, lastNamePattern, usernamePattern } from '@/utils/constants/pattern.const'
import { UseFormRegister } from 'react-hook-form'

interface GeneralInfoProps {
  errors: any
  register: UseFormRegister<any>
  currentUser: any
}

const GeneralInfo = ({ errors, register, currentUser }: GeneralInfoProps) => (
  <div className='flex w-full flex-col gap-4'>
    <div className='flex grid-cols-2 flex-col gap-4 lg:grid'>
      <Input
        type='text'
        name='firstName'
        defaultValue={currentUser?.firstName}
        label='Nombre'
        placeholder='Nombre'
        hookForm={{
          register,
          validations: {
            pattern: {
              value: firstNamePattern.value,
              message: firstNamePattern.message
            },
            required: { value: true, message: 'Este campo es requerido' }
          }
        }}
        errorMessage={errors?.firstName?.message?.toString()}
      />
      <Input
        type='text'
        name='lastName'
        label='Apellido'
        defaultValue={currentUser?.lastName}
        placeholder='Apellido'
        hookForm={{
          register,
          validations: {
            pattern: {
              value: lastNamePattern.value,
              message: lastNamePattern.message
            },
            required: { value: true, message: 'Este campo es requerido' }
          }
        }}
        errorMessage={errors?.lastName?.message?.toString()}
      />
      <Input
        type='email'
        name='email'
        label='Email'
        placeholder='Email'
        defaultValue={currentUser?.email}
        hookForm={{
          register,
          validations: {
            pattern: {
              value: emailPattern.value,
              message: emailPattern.message
            },
            required: { value: true, message: 'Este campo es requerido' }
          }
        }}
        errorMessage={errors?.email?.message?.toString()}
      />
      <Input
        type='text'
        name='username'
        label='Nombre de usuario'
        defaultValue={currentUser?.username}
        placeholder='Nombre de usuario'
        hookForm={{
          register,
          validations: {
            pattern: {
              value: usernamePattern.value,
              message: usernamePattern.message
            },
            required: { value: true, message: 'Este campo es requerido' }
          }
        }}
        errorMessage={errors?.username?.message?.toString()}
      />
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
        errorMessage={errors?.thumbnail?.message?.toString()}
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
            validate: (value: FileList) => {
              if (value.length > 0) {
                if (value[0].size > 5000000) {
                  return 'La imagen no debe pesar mas de 5MB'
                }
              }
            }
          }
        }}
        errorMessage={errors?.bannerImage?.message?.toString()}
      />
    </div>
  </div>
)

export default GeneralInfo
