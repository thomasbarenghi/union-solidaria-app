'use client'
import { InitiativeDynamicForm, type InitiativeFormData } from '@/components'
import { type InitiativeInterface } from '@/interfaces'
import { putRequest } from '@/services/apiRequests.service'
import Endpoints from '@/utils/constants/endpoints.const'
import { toast } from 'sonner'
import { useSWRConfig } from 'swr'

interface Props {
  initiative: InitiativeInterface
}

const Config = ({ initiative }: Props) => {
  const defaultValues = {
    opportunities: initiative?.opportunities[0].split(','),
    themes: initiative?.themes[0].split(','),
    country: initiative?.province,
    province: initiative?.province
  }

  const { mutate } = useSWRConfig()

  const onSubmit = async (data: InitiativeFormData) => {
    try {
      const formData = {
        ...data,
        startDate: new Date(data.startDate).toISOString(),
        endDate: new Date(data.endDate).toISOString(),
        ...(data.thumbnail?.[0] && { thumbnail: data.thumbnail[0] }),
        deadLine: new Date(data.deadLine).toISOString()
      }

      const { error, data: response } = await putRequest(Endpoints.INITIATIVES_BY_ID(initiative._id), formData, {
        headers: { 'Content-Type': 'multipart/form-data' }
      })

      if (error) {
        console.error(response)
        return toast.error('Error al editar la iniciativa')
      }

      await mutate(Endpoints.INITIATIVES_BY_ID(initiative._id))
      toast.success('Iniciativa editada con éxito')
    } catch (err) {
      console.error(err)
      toast.error('Error al editar la iniciativa')
    }
  }

  return (
    <div className='flex gap-6'>
      <InitiativeDynamicForm onSubmit={onSubmit} mode='edit' initiative={initiative} defaultValues={defaultValues} />
    </div>
  )
}

export default Config
