import { type FetchLoginStatus } from '@/types/fetch-status'
import Endpoints from '@/utils/constants/endpoints.const'
import { serverUrl } from '@/utils/constants/env.const'
import { customFetch } from '../custom-fetch.service'

// TODO: define user type
export const loginUser = async (email: string, password: string) => {
  // eslint-disable-next-line @typescript-eslint/strict-boolean-expressions
  if (!email || !password) {
    return { user: undefined, error: { status: 400, message: 'no email or password were passed' } }
  }

  const { data, error } = await customFetch<FetchLoginStatus>({
    url: `${serverUrl}${Endpoints.USER_BY_EMAIL(email)}`,
    errors: {
      401: { message: 'Invalid credentials' },
      404: { message: 'user not found' }
    }
  })

  return { user: data, error }
}
