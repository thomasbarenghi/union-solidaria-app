'use client'
import { Modal, TextElement } from '@/components'
import { deleteRequest } from '@/services/apiRequests.service'
import Endpoints from '@/utils/constants/endpoints.const'
import Image from 'next/image'
import { useParams } from 'next/navigation'
import { toast } from 'sonner'
import { useSWRConfig } from 'swr'

interface DeleteModalProps {
  reviewId: string
}

const DeleteModal = ({ reviewId }: DeleteModalProps) => {
  const { username } = useParams()
  console.log(username.slice(3))
  const { mutate } = useSWRConfig()
  const handleDelete = async () => {
    const { error } = await deleteRequest(Endpoints.DELETE_REVIEW(reviewId))
    if (error) {
      console.error(error)
      return toast.error('Ocurrió un error al eliminar el comentario')
    }
    mutate(Endpoints.USER_BY_EMAIL((username.slice(3) as string) ?? ''))
    toast.success('Comentario eliminado con éxito')
  }

  return (
    <Modal
      triggerClassName='border-0 bg-green-50'
      title='Eliminar reseña'
      onConfirm={async () => await handleDelete()}
      confirmText='Eliminar'
      cancelText='Cancelar'
      customTrigger={<Trigger />}
    >
      <div className='flex flex-col gap-1'>
        <TextElement type='base' as='p'>
          Estas a punto de eliminar esta reseña. ¿Estás seguro?
        </TextElement>
      </div>
    </Modal>
  )
}

interface TriggerProps {
  onOpen?: () => void
}

const Trigger = (props: TriggerProps) => (
  <Image src='/icon/trash.svg' onClick={props.onOpen} alt='Delete' width={20} height={20} className='cursor-pointer' />
)

export default DeleteModal
