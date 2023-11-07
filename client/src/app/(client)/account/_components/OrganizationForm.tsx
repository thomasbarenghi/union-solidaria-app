'use client'
import { Button, Input } from '@/components'
import { useForm } from 'react-hook-form'
import { putRequest } from '@/services/apiRequests.service'
import Endpoints from '@/utils/constants/endpoints.const'
import { Session } from 'next-auth'
import { organizationNamePattern } from '@/utils/constants/pattern.const'
import { toast } from 'sonner'
import { UserInterface } from '@/interfaces'

interface Props {
  currentUser: UserInterface
  session: Session
}

const OrganizationForm = ({ session, currentUser }: Props) => {
  const {
    register,
    formState: { errors, isSubmitting },
    handleSubmit
  } = useForm<any>({
    mode: 'onChange'
  })

  const onSubmit = async (data: any) => {
    const { error } = await putRequest(Endpoints.UPDATE_ORGANIZATION(session?.user?.id ?? ''), data, {
      headers: { sessionId: session.token.sessionId }
    })

    if (error) return toast.error('Ocurrío un error al actualizar la organizacion')

    toast.success('Se ha actualizado la organizacion correctamente')
  }

  return (
    <section className='flex items-center  justify-center'>
      <form className='flex w-full flex-col items-start gap-5' onSubmit={handleSubmit(onSubmit)}>
        <Input
          type='text'
          name='orgName'
          defaultValue={currentUser?.orgName ?? ''}
          label='Nombre de la organizacion'
          placeholder='Nombre de la organizacion'
          hookForm={{
            register,
            validations: {
              pattern: {
                value: organizationNamePattern.value,
                message: organizationNamePattern.message
              },
              required: {
                value: true,
                message: 'Este campo es requerido'
              }
            }
          }}
          errorMessage={errors?.orgName?.message?.toString()}
        />

        <Button type='submit' title='Guardar Cambios' isLoading={isSubmitting} />
      </form>
    </section>
  )
}

export default OrganizationForm
