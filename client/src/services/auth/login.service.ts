import { LoginSuccessful } from '@/interfaces'
import { customFetch } from '@/services/custom-fetch.service'
import { type FetchLoginStatus } from '@/types/fetch-status'
import Endpoints from '@/utils/constants/endpoints.const'
import { serverUrl } from '@/utils/constants/env.const'

// TODO: define user type
export const loginUser = async (email: string, password: string) => {
  // eslint-disable-next-line @typescript-eslint/strict-boolean-expressions
  if (!email || !password) {
    return { login: undefined, error: { status: 400, message: 'no email or password were passed' } }
  }

  const { data, error } = await customFetch<FetchLoginStatus, LoginSuccessful>({
    url: `${serverUrl}${Endpoints.LOGIN}`,
    errors: {
      401: { message: 'Invalid credentials' }
    },
    init: {
      method: 'POST',
      body: JSON.stringify({ email, password }),
      headers: {
        'Content-Type': 'application/json'
      }
    }
  })

  return { login: data, error }
}
