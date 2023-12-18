'use client'
import { toast } from 'sonner'
import { useForm } from 'react-hook-form'
import { Session } from 'next-auth'
import { Button, Input } from '@/components'
import { putRequest } from '@/services/apiRequests.service'
import Endpoints from '@/utils/constants/endpoints.const'
import { organizationNamePattern } from '@/utils/constants/pattern.const'
import { UserInterface } from '@/interfaces'
import { OrganizationFormData } from '../forms.interface'

interface Props {
  currentUser: UserInterface
  session: Session
}

const OrganizationForm = ({ session, currentUser }: Props) => {
  const {
    register,
    formState: { errors, isSubmitting },
    handleSubmit,
    watch
  } = useForm<OrganizationFormData>({
    mode: 'onChange'
  })

  const onSubmit = async (data: OrganizationFormData) => {
    const { data: response, error } = await putRequest(Endpoints.UPDATE_ORGANIZATION(session?.user?.id ?? ''), data, {
      headers: { sessionId: session.token.sessionId }
    })

    if (error) {
      console.error(response)
      return toast.error('Ocurrío un error al actualizar la organizacion')
    }

    toast.success('Se ha actualizado la organizacion correctamente')
  }

  if (currentUser.role === 'volunteer' || currentUser.orgName === null) {
    return (
      <section className='flex items-center  justify-center'>
        <form
          className='flex w-full flex-col items-start gap-5'
          onSubmit={(e) => {
            e.preventDefault()
          }}
        >
          <Input
            type='text'
            name='orgName'
            isDisabled
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
          />
          <Button title='Guardar Cambios' isDisabled />
        </form>
      </section>
    )
  }

  return (
    <section className='flex items-center  justify-center'>
      <form className='flex w-full flex-col items-start gap-5' onSubmit={handleSubmit(onSubmit)}>
        <Input
          type='text'
          name='orgName'
          defaultValue={currentUser.orgName}
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

        <Button
          type='submit'
          title='Guardar Cambios'
          isLoading={isSubmitting}
          isDisabled={Object.keys(errors).length !== 0 || watch('orgName') === currentUser.orgName}
        />
      </form>
    </section>
  )
}

export default OrganizationForm
