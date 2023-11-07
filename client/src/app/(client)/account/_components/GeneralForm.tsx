'use client'
import { Button } from '@/components'
import { useForm } from 'react-hook-form'
import CommonInfo from './GeneralInputs'
import { UserInterface } from '@/interfaces'
import { putRequest } from '@/services/apiRequests.service'
import Endpoints from '@/utils/constants/endpoints.const'
import { Session } from 'next-auth'
import { toast } from 'sonner'
import { useSWRConfig } from 'swr'

interface Props {
  currentUser: UserInterface
  session: Session
}

const FormSec = ({ currentUser, session }: Props) => {
  const { mutate } = useSWRConfig()
  const {
    register,
    formState: { errors, isSubmitting },
    handleSubmit,
    resetField
  } = useForm({
    mode: 'onChange'
  })

  const onSubmit = async (data: any) => {
    const formData = {
      ...data,
      profileImage: data.profileImage[0] ?? '',
      bannerImage: data.bannerImage[0] ?? ''
    }
    const { error } = await putRequest(Endpoints.USER_BY_ID(currentUser._id), formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
        sessionId: session.token.sessionId
      }
    })
    // TODO: handle error case
    if (error) return toast.error('Ha ocurrido un error al actualizar la información')
    mutate(Endpoints.USER_BY_EMAIL(currentUser.email))
    toast.success('Se ha actualizado la información correctamente')
    resetField('profileImage')
    resetField('bannerImage')
  }

  return (
    <section className='flex items-center  justify-center'>
      <form className='flex w-full flex-col items-start gap-5' onSubmit={handleSubmit(onSubmit)}>
        <CommonInfo errors={errors} register={register} currentUser={currentUser} />
        <Button type='submit' title='Guardar Cambios' isLoading={isSubmitting} />
      </form>
    </section>
  )
}

export default FormSec
