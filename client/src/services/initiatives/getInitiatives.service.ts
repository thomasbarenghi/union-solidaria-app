import Endpoints from '@/utils/constants/endpoints.const'
import { getRequest } from '../apiRequests.service'

export const getInitiatives = async () => {
  const { data, error } = await getRequest(Endpoints.INITIATIVES(), {}, { cache: 'no-store' })
  return { data, error }
}
