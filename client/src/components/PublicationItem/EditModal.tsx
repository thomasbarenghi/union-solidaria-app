import { Modal, PostDynamicForm, type PostFormData } from '@/components'
import { PostInterface } from '@/interfaces'
import { putRequest } from '@/services/apiRequests.service'
import Endpoints from '@/utils/constants/endpoints.const'
import Image from 'next/image'
import { useParams } from 'next/navigation'
import { useForm } from 'react-hook-form'
import { toast } from 'sonner'
import { useSWRConfig } from 'swr'

interface DeleteModalProps {
  item: PostInterface
}

const EditModal = ({ item }: DeleteModalProps) => (
  <Modal
    triggerClassName='border-0 bg-green-50'
    title='Editar reseña'
    onConfirm={() => {}}
    confirmText='Eliminar'
    cancelText='Cancelar'
    customTrigger={<Trigger />}
    passProps
    withControls={false}
  >
    <Form item={item} />
  </Modal>
)

interface FormProps {
  handleClose?: () => void
  item: PostInterface
}

const Form = (props: FormProps) => {
  const { mutate } = useSWRConfig()
  const { initiativeId } = useParams()
  const {
    register,
    formState: { errors, isSubmitting },
    handleSubmit
  } = useForm<PostFormData>({
    mode: 'onChange'
  })

  const onSubmit = async (data: PostFormData) => {
    const { error } = await putRequest(Endpoints.EDIT_PUBLICATION(props.item._id), data)
    if (error) {
      console.error(error)
      return toast.error('Ocurrió un error al enviar la publicacion')
    }

    mutate(Endpoints.INITIATIVES_BY_ID(initiativeId as string))
    toast.success('Publicacion enviada con éxito')
    if (props?.handleClose) {
      props.handleClose()
    }
  }

  return (
    <PostDynamicForm
      handleSubmit={handleSubmit}
      onSubmit={onSubmit}
      register={register}
      errors={errors}
      isSubmitting={isSubmitting}
      mode='edit'
      post={props.item}
    />
  )
}

interface TriggerProps {
  onOpen?: () => void
}

const Trigger = (props: TriggerProps) => (
  <div className='flex h-8 w-8 cursor-pointer items-center justify-center rounded-full hover:bg-slate-100'>
    <Image src='/icon/pen.svg' onClick={props.onOpen} alt='Edit' width={20} height={20} />
  </div>
)

export default EditModal
