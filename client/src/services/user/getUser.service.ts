import Endpoints from '@/utils/constants/endpoints.const'
import { getRequest } from '../apiRequests.service'

export const getUser = async (email: string) => {
  const { data, error } = await getRequest(Endpoints.USER_BY_EMAIL(email), {}, { cache: 'no-store' })
  if (error) return { data, error, errorMessage: 'Error al cargar los datos del usuario' }
  return { data, error }
}
