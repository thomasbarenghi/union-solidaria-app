'use client'
import { InitiativeDynamicForm, TextElement } from '@/components'
import { InitiativeFormData } from '@/interfaces'
import { postRequest } from '@/services/apiRequests.service'
import Endpoints from '@/utils/constants/endpoints.const'
import Routes from '@/utils/constants/routes.const'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import { toast } from 'sonner'

const FormSec = () => {
  const router = useRouter()
  const { data: session } = useSession()

  const onSubmit = async (data: InitiativeFormData) => {
    try {
      const initiativeData = {
        ...data,
        owner: session?.user.id,
        startDate: new Date(data.startDate),
        endDate: new Date(data.endDate),
        thumbnail: data.thumbnail?.[0],
        deadLine: new Date(data.deadLine)
      }

      const { data: response, error } = await postRequest(Endpoints.INITIATIVES(), initiativeData, {
        headers: {
          'Content-Type': 'multipart/form-data',
          sessionId: session?.token.sessionId
        }
      })

      if (error) {
        console.error(response)
        return toast.error('Ocurrió un error al crear la iniciativa')
      }

      router.push(Routes.INITIATIVES)
      toast.success('Iniciativa creada con éxito')
    } catch (error) {
      toast.error('Ocurrió un error al crear la iniciativa')
    }
  }

  return (
    <section className='flex w-full  items-center justify-center'>
      <div className='flex w-full flex-col gap-8'>
        <TextElement type='t3' as='h1' className='font-semibold'>
          Crear iniciativa
        </TextElement>
        <InitiativeDynamicForm onSubmit={onSubmit} mode='create' />
      </div>
    </section>
  )
}

export default FormSec
