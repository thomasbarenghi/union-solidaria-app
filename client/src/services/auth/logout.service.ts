import { type LogoutSuccessful } from '@/interfaces'
import { customFetch } from '@/services/custom-fetch.service'
import { type FetchLogoutStatus } from '@/types/fetch-status'
import Endpoints from '@/utils/constants/endpoints.const'
import { serverUrl } from '@/utils/constants/env.const'

// TODO: define user type
export const logoutUser = async (sessionId: string) => {
  // eslint-disable-next-line @typescript-eslint/strict-boolean-expressions
  if (!sessionId) {
    return { logout: undefined, error: { status: 400, message: 'no sessionId was passed' } }
  }

  const { data, error } = await customFetch<FetchLogoutStatus, LogoutSuccessful>({
    url: `${serverUrl}${Endpoints.LOGOUT}`,
    errors: {
      401: { message: 'Invalid credentials' }
    },
    init: {
      method: 'POST',
      body: JSON.stringify({ sessionId }),
      headers: {
        'Content-Type': 'application/json'
      }
    }
  })

  return { logout: data, error }
}
