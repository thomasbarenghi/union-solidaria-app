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
  const { initiativeId } = useParams()
  const { mutate } = useSWRConfig()

  const handleDelete = async () => {
    const { error } = await deleteRequest(Endpoints.DELETE_PUBLICATION(reviewId))
    if (error) {
      console.error(error)
      return toast.error('Ocurrió un error al eliminar la publicacion')
    }
    mutate(Endpoints.INITIATIVES_BY_ID(initiativeId as string))
    toast.success('Publicacion eliminada con éxito')
  }

  return (
    <Modal
      triggerClassName='border-0 bg-green-50'
      title='Eliminar publicacion'
      onConfirm={async () => await handleDelete()}
      confirmText='Eliminar'
      cancelText='Cancelar'
      customTrigger={<Trigger />}
    >
      <div className='flex flex-col gap-1'>
        <TextElement type='base' as='p'>
          Estas a punto de eliminar esta publicacion. ¿Estás seguro?
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
