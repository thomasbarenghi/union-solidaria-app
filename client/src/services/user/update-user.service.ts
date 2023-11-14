import { UpdatePasswordFormValues, UpdateUserFormValues, UserInterface } from '@/interfaces'
import { FetchUpdatePasswordStatus, FetchUpdateUserStatus } from '@/types/fetch-status'
import Endpoints from '@/utils/constants/endpoints.const'
import { serverUrl } from '@/utils/constants/env.const'
import { customFetch } from '../custom-fetch.service'

export const updateUser = async (emailOrId: string, data: UpdateUserFormValues) => {
  // eslint-disable-next-line @typescript-eslint/strict-boolean-expressions
  if (!emailOrId) return { updatedUser: undefined, error: { status: 400, message: 'no email or id was passed' } }

  const { data: updatedUser, error } = await customFetch<FetchUpdateUserStatus, UserInterface>({
    url: `${serverUrl.concat(Endpoints.USER_BY_EMAIL(emailOrId))}`,
    errors: {
      400: { message: 'email is undefined or an empty string' },
      404: { message: 'user not found' }
    },
    init: {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    }
  })

  return { updatedUser, error }
}

export const updatePassword = async (emailOrId: string, sessionId: string, data: UpdatePasswordFormValues) => {
  // eslint-disable-next-line @typescript-eslint/strict-boolean-expressions
  if (!emailOrId) return { updatedUser: undefined, error: { status: 400, message: 'no email or id was passed' } }

  const { data: updatedPassword, error } = await customFetch<FetchUpdatePasswordStatus>({
    url: `${serverUrl.concat(Endpoints.UPDATE_PASSWORD(emailOrId))}`,
    errors: {
      400: { message: 'email is undefined or an empty string' },
      404: { message: 'user not found' }
    },
    init: {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        authorization: sessionId
      },
      body: JSON.stringify(data)
    }
  })

  return { updatedPassword, error }
}
