'use client'
import { Button, Input } from '@/components'
import { UserInterface } from '@/interfaces'
import { putRequest } from '@/services/apiRequests.service'
import Endpoints from '@/utils/constants/endpoints.const'
import { emailPattern, firstNamePattern, lastNamePattern, usernamePattern } from '@/utils/constants/pattern.const'
import { Session } from 'next-auth'
import { useForm } from 'react-hook-form'
import { toast } from 'sonner'
import { useSWRConfig } from 'swr'
import { EditAccountFormData } from '../forms.interface'
import { Button as ButtonNextUI } from '@nextui-org/react'

interface Props {
  currentUser: UserInterface
  session: Session
}

const EditAccountForm = ({ currentUser, session }: Props) => {
  const { mutate } = useSWRConfig()
  const {
    register,
    formState: { errors, isSubmitting },
    handleSubmit,
    resetField,
    watch,
    setValue,
    trigger
  } = useForm<EditAccountFormData>({
    mode: 'onChange'
  })

  const onSubmit = async (data: EditAccountFormData) => {
    try {
      const formData = {
        ...data,
        ...(data.profileImage && { profileImage: data.profileImage[0] }),
        ...(data.bannerImage && { bannerImage: data.bannerImage[0] })
      }

      const { data: response, error } = await putRequest(Endpoints.USER_BY_ID(currentUser._id), formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
          sessionId: session.token.sessionId
        }
      })

      if (error) {
        console.error(response)
        return toast.error('Ha ocurrido un error al actualizar la información')
      }

      mutate(Endpoints.USER_BY_EMAIL(currentUser.username))
      resetField('profileImage')
      resetField('bannerImage')
      toast.success('Se ha actualizado la información correctamente')
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <section className='flex items-center  justify-center'>
      <form className='flex w-full flex-col items-start gap-5' onSubmit={handleSubmit(onSubmit)}>
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
            <label htmlFor='profileImage' className='h-[60px]'>
              <p>Imagen de perfil</p>
              <div className='flex justify-between rounded-2xl border border-solid border-gray-300 px-3 py-2'>
                <input
                  type='file'
                  {...register('profileImage', {
                    validate: (value) => {
                      if (value && value?.length !== 0) {
                        if (value[0].size > 5000000) return 'La imagen no debe pesar mas de 5MB'
                      }
                      return undefined
                    }
                  })}
                />
                {watch('profileImage')?.length !== 0 && !!watch('profileImage') ? (
                  <ButtonNextUI
                    size='sm'
                    radius='full'
                    color='secondary'
                    onClick={() => {
                      setValue('profileImage', undefined)
                      trigger('profileImage')
                    }}
                  >
                    Descartar
                  </ButtonNextUI>
                ) : null}
              </div>
              {errors.profileImage ? <p className='text-sm text-danger-600'>{errors.profileImage.message}</p> : null}
            </label>
            <label htmlFor='bannerImage' className='mb-4 h-[60px]'>
              <p>Imagen de portada</p>
              <div className='flex justify-between rounded-2xl border border-solid border-gray-300 px-3 py-2'>
                <input
                  type='file'
                  {...register('bannerImage', {
                    validate: (value) => {
                      if (value && value?.length !== 0) {
                        if (value[0].size > 5000000) return 'La imagen no debe pesar mas de 5MB'
                      }
                      return undefined
                    }
                  })}
                />
                {watch('bannerImage')?.length !== 0 && !!watch('bannerImage') ? (
                  <ButtonNextUI
                    size='sm'
                    radius='full'
                    color='secondary'
                    onClick={() => {
                      setValue('bannerImage', undefined)
                      trigger('bannerImage')
                    }}
                  >
                    Descartar
                  </ButtonNextUI>
                ) : null}
              </div>
              {errors.bannerImage ? <p className='text-sm text-danger-600'>{errors.bannerImage.message}</p> : null}
            </label>
            {/* <Input
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
                    if (value?.length > 0) {
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
                    if (value?.length > 0) {
                      if (value[0].size > 5000000) {
                        return 'La imagen no debe pesar mas de 5MB'
                      }
                    }
                  }
                }
              }}
              errorMessage={errors?.bannerImage?.message?.toString()}
            /> */}
          </div>
        </div>
        <Button
          type='submit'
          title='Guardar Cambios'
          isLoading={isSubmitting}
          isDisabled={Object.keys(errors).length !== 0}
        />
      </form>
    </section>
  )
}

export default EditAccountForm
