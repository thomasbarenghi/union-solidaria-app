'use client'
import { Button, Input } from '@/components'
import { UpdatePasswordFormValues } from '@/interfaces'
import { useForm } from 'react-hook-form'
import { putRequest } from '@/services/apiRequests.service'
import Endpoints from '@/utils/constants/endpoints.const'
import { Session } from 'next-auth'

import { passwordPattern } from '@/utils/constants/pattern.const'
import { toast } from 'sonner'

interface Props {
  session: Session
}

const PasswordForm = ({ session }: Props) => {
  const {
    register,
    formState: { errors, isSubmitting },
    handleSubmit,
    getValues,
    reset
  } = useForm<UpdatePasswordFormValues>({
    mode: 'onChange'
  })

  const onSubmit = async (data: any) => {
    const { error } = await putRequest(Endpoints.UPDATE_PASSWORD(session?.user?.id ?? ''), data, {
      headers: { sessionId: session.token.sessionId }
    })

    if (error) return toast.error('Ha ocurrido un error al actualizar la contraseña')

    toast.success('Se ha actualizado la contraseña correctamente')
    reset()
  }

  return (
    <section className='flex items-center  justify-center'>
      <form className='flex w-full flex-col items-start gap-5' onSubmit={handleSubmit(onSubmit)}>
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
          <Input
            type='password'
            name='repeatNewPassword'
            label='Contraseña nueva'
            placeholder='Contraseña nueva'
            hookForm={{
              register,
              validations: {
                validate: (value: string) => value === getValues()?.newPassword || 'Las contraseñas no coinciden',
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
            errorMessage={errors?.repeatNewPassword?.message?.toString()}
          />
        </div>
        <Button type='submit' title='Guardar Cambios' isLoading={isSubmitting} />
      </form>
    </section>
  )
}

export default PasswordForm
