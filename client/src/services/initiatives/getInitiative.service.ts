import Endpoints from '@/utils/constants/endpoints.const'
import { getRequest } from '../apiRequests.service'

export const getInitiative = async (id: string) => {
  const { data, error } = await getRequest(Endpoints.INITIATIVES_BY_ID(id))
  return { data, error }
}
