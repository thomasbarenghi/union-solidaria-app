'use client'
import { useForm } from 'react-hook-form'
import { Button } from '@/components'
import { Session } from 'next-auth'
import { toast } from 'sonner'
import { useSWRConfig } from 'swr'
import { UserInterface } from '@/interfaces'
import { putRequest } from '@/services/apiRequests.service'
import Endpoints from '@/utils/constants/endpoints.const'
import { EditAccountFormData } from '../../forms.interface'
import CommonInfo from './EditAccountFormInputs'

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
    resetField
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
        <CommonInfo
          isSubmitting={isSubmitting}
          errors={errors}
          register={register}
          currentUser={currentUser}
          resetField={resetField}
        />
        <Button type='submit' title='Guardar Cambios' isLoading={isSubmitting} />
      </form>
    </section>
  )
}

export default EditAccountForm
