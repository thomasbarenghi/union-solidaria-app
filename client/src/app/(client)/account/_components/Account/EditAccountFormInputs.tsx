import { FieldErrors, UseFormRegister, type UseFormResetField } from 'react-hook-form'
import { Input } from '@/components'
import { emailPattern, firstNamePattern, lastNamePattern, usernamePattern } from '@/utils/constants/pattern.const'
import { type UserInterface } from '@/interfaces'
import { EditAccountFormData } from '../../forms.interface'

interface GeneralInfoProps {
  errors: FieldErrors<EditAccountFormData>
  register: UseFormRegister<EditAccountFormData>
  currentUser: UserInterface
  resetField: UseFormResetField<EditAccountFormData>
  isSubmitting: boolean
}

const EditAccountFormInputs = ({ errors, register, currentUser, resetField, isSubmitting }: GeneralInfoProps) => (
  <div className='flex w-full flex-col gap-4'>
    <div className='flex grid-cols-2 flex-col gap-4 lg:grid'>
      <Input
        isDisabled={isSubmitting}
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
        isDisabled={isSubmitting}
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
        isDisabled={isSubmitting}
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
        isDisabled={isSubmitting}
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
        isDisabled={isSubmitting}
        type='file'
        name='profileImage'
        label='Imagen de perfil'
        placeholder='Selecciona una imagen'
        isClearable
        onClear={() => resetField('profileImage')}
        hookForm={{
          register,
          validations: {
            required: false,
            validate: (value: FileList) => {
              if (value === undefined) return
              if (value.length > 0) {
                if (value[0].size > 5000000) {
                  return 'La imagen no debe pesar mas de 5MB'
                }
              }
            }
          }
        }}
        errorMessage={errors?.profileImage?.message?.toString()}
      />
      <Input
        isDisabled={isSubmitting}
        type='file'
        name='bannerImage'
        label='Imagen de portada'
        placeholder='Selecciona una imagen'
        isClearable
        onClear={() => resetField('bannerImage')}
        hookForm={{
          register,
          validations: {
            required: false,
            validate: (value: FileList) => {
              if (value === undefined) return
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

export default EditAccountFormInputs
