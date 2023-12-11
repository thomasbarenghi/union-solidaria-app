'use client'
import { ReviewForm } from '@/components'
import { useForm } from 'react-hook-form'
import { useParams } from 'next/navigation'
import { useSession } from 'next-auth/react'
import { postRequest } from '@/services/apiRequests.service'
import Endpoints from '@/utils/constants/endpoints.const'
import { toast } from 'sonner'
import { useSWRConfig } from 'swr'
import { ReviewFormData } from '@/interfaces'

interface Props {
  handleClose?: () => void
}

const SubscribeContent = (props: Props) => {
  const { mutate } = useSWRConfig()
  const { initiativeId } = useParams()
  const { data: session } = useSession()
  const {
    register,
    formState: { errors, isSubmitting },
    handleSubmit,
    reset
  } = useForm<ReviewFormData>({
    mode: 'onChange'
  })

  const onSubmit = async (data: ReviewFormData) => {
    const formData = {
      ...data,
      authorId: session?.user?.id,
      initiativeId
    }

    const { error } = await postRequest(Endpoints.POST_REVIEW, formData)
    if (error) {
      console.error(error)
      return toast.error('Ocurrió un error al enviar el comentario')
    }
    mutate(Endpoints.INITIATIVES_BY_ID(initiativeId as string))
    toast.success('Comentario enviado con éxito')
    if (props?.handleClose) {
      props.handleClose()
    }
    reset()
  }

  return (
    <div className='flex flex-col gap-1'>
      <ReviewForm
        handleSubmit={handleSubmit}
        onSubmit={onSubmit}
        register={register}
        errors={errors}
        isSubmitting={isSubmitting}
        mode='create'
      />
    </div>
  )
}

export default SubscribeContent
