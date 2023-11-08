import { Modal, ReviewForm } from '@/components'
import { ReviewInterface } from '@/interfaces'
import { putRequest } from '@/services/apiRequests.service'
import Endpoints from '@/utils/constants/endpoints.const'
import Image from 'next/image'
import { useForm } from 'react-hook-form'
import { toast } from 'sonner'
import { useSWRConfig } from 'swr'
import { useParams } from 'next/navigation'

interface DeleteModalProps {
  review: ReviewInterface
}

const EditModal = ({ review }: DeleteModalProps) => (
  <Modal
    triggerClassName='border-0 bg-green-50'
    title='Editar reseña'
    onConfirm={() => console.log('confirm')}
    confirmText='Eliminar'
    cancelText='Cancelar'
    customTrigger={<Trigger />}
    passProps
    withControls={false}
  >
    <Form review={review} />
  </Modal>
)

const Form = (props: any) => {
  const { mutate } = useSWRConfig()
  const { username } = useParams()
  console.log(props)
  const {
    register,
    formState: { errors, isSubmitting },
    handleSubmit
  } = useForm<any>({
    mode: 'onChange'
  })

  const onSubmit = async (data: any) => {
    const { error } = await putRequest(Endpoints.EDIT_REVIEW(props.review._id), data)
    if (error) {
      console.error(error)
      return toast.error('Ocurrió un error al enviar el comentario')
    }

    mutate(Endpoints.USER_BY_EMAIL((username.slice(3) as string) ?? ''))
    toast.success('Comentario enviado con éxito')
    props.handleClose()
  }

  return (
    <ReviewForm
      handleSubmit={handleSubmit}
      onSubmit={onSubmit}
      register={register}
      errors={errors}
      isSubmitting={isSubmitting}
      mode='edit'
      review={props.review}
    />
  )
}

const Trigger = (props: any) => (
  <Image src='/icon/pen.svg' onClick={props.onOpen} alt='Edit' width={20} height={20} className='cursor-pointer' />
)

export default EditModal
