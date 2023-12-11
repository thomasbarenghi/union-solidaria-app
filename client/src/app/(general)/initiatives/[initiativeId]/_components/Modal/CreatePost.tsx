'use client'
import { PostDynamicForm } from '@/components'
import { useForm } from 'react-hook-form'
import { useParams } from 'next/navigation'
import { useSession } from 'next-auth/react'
import { postRequest } from '@/services/apiRequests.service'
import Endpoints from '@/utils/constants/endpoints.const'
import { toast } from 'sonner'
import { useSWRConfig } from 'swr'
import { PostFormData } from '@/interfaces'

interface Props {
  handleClose?: () => void
}

const CreatePost = (props: Props) => {
  const { mutate } = useSWRConfig()
  const { initiativeId } = useParams()
  const { data: session } = useSession()
  const {
    register,
    formState: { errors, isSubmitting },
    handleSubmit,
    reset
  } = useForm<PostFormData>({
    mode: 'onChange'
  })

  const onSubmit = async (data: PostFormData) => {
    try {
      const formData = {
        ...data,
        authorId: session?.user?.id,
        initiativeId
      }

      const { error } = await postRequest(Endpoints.POST_PUBLICATION, formData)

      if (error) {
        console.error(error)
        return toast.error('Ocurrió un error al crear la publicación')
      }

      mutate(Endpoints.INITIATIVES_BY_ID(initiativeId as string))
      toast.success('Publicacion enviado con éxito')

      if (props?.handleClose) {
        props.handleClose()
      }

      reset()
    } catch (error) {
      console.error(error)
      toast.error('Ocurrió un error al crear la publicación')
    }
  }

  return (
    <div className='flex flex-col gap-1'>
      <PostDynamicForm
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

export default CreatePost
