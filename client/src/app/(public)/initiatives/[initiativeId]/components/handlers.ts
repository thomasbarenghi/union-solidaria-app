import { putRequest } from '@/services/apiRequests.service'
import Endpoints from '@/utils/constants/endpoints.const'

export const handlers = {
  handleSubscribe: async (userId: string, initiativeId: string, mutate: any) => {
    try {
      await putRequest(Endpoints.SUBSCRIBE, {
        userId,
        initiativeId
      })
      await mutate(Endpoints.INITIATIVES_BY_ID(initiativeId))
    } catch (error) {
      console.log(error)
    }
  },
  handleUnsubscribe: async (userId: string, initiativeId: string, mutate: any) => {
    try {
      await putRequest(Endpoints.UNSUBSCRIBE, {
        userId,
        initiativeId
      })
      await mutate(Endpoints.INITIATIVES_BY_ID(initiativeId))
    } catch (error) {
      console.log(error)
    }
  }
}
