'use client'
import { Button } from '@/components'
import { useForm } from 'react-hook-form'
import CommonInfo from './CommonInfo'
import { UserInterface } from '@/interfaces'
import { putRequest } from '@/services/apiRequests.service'
import Endpoints from '@/utils/constants/endpoints.const'

interface Props {
  currentUser: UserInterface
}

const FormSec = ({ currentUser }: Props) => {
  const {
    register,
    formState: { errors, isSubmitting },
    handleSubmit,
    reset
  } = useForm({
    mode: 'onChange'
  })

  const onSubmit = async (data: any) => {
    const formData = {
      ...data,
      profileImage: data.profileImage[0] ?? '',
      bannerImage: data.bannerImage[0] ?? ''
    }
    const { error } = await putRequest(Endpoints.USER_BY_ID(currentUser._id), formData, true)
    // TODO: handle error case
    if (error) return
    alert('Cambio exitoso')
    reset()
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
