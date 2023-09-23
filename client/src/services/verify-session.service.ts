import Endpoints from '@/utils/constants/endpoints.const'
import { serverUrl } from '@/utils/constants/env.const'

export const verifySession = async (sessionId: string) => {
  try {
    const res = await fetch(`${serverUrl}${Endpoints.VERIFY}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        sessionId
      }
    })

    if (!res.ok) throw new Error('Error verifying session')

    const data = await res.json()
    return data
  } catch (error) {
    console.log(error)
  }
}
