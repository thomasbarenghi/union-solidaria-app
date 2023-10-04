import { FetchUserByEmailStatus } from '@/types/fetch-status'
import Endpoints from '@/utils/constants/endpoints.const'
import { serverUrl } from '@/utils/constants/env.const'
import { customFetch } from '../custom-fetch.service'

export const getUserByEmail = async (email: string) => {
  // eslint-disable-next-line @typescript-eslint/strict-boolean-expressions
  if (!email) return { user: undefined, error: { status: 400, message: 'no email was passed' } }

  const { data, error } = await customFetch<FetchUserByEmailStatus>({
    url: `${serverUrl}${Endpoints.USER_BY_EMAIL(email)}`,
    errors: {
      400: { message: 'email is undefined or an empty string' },
      404: { message: 'user not found' }
    }
  })

  return { user: data, error }
}
