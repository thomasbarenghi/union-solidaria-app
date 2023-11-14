import Endpoints from '@/utils/constants/endpoints.const'
import { getRequest } from '../apiRequests.service'
import { InitiativeInterface } from '@/interfaces'

interface Response {
  data: InitiativeInterface
  error: boolean
}

export const getInitiative = async (id: string): Promise<Response> => {
  const { data, error } = await getRequest(Endpoints.INITIATIVES_BY_ID(id), {}, { cache: 'no-store' })
  if (error) throw new Error('Error al cargar la iniciativa')
  return { data, error }
}
