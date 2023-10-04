import { RegisterFormValues } from '@/interfaces/forms.interface'
import { FetchRegisterStatus } from '@/types/fetch-status'
import Endpoints from '@/utils/constants/endpoints.const'
import { serverUrl } from '@/utils/constants/env.const'
import { customFetch } from '../custom-fetch.service'

export const signupUser = async (values: RegisterFormValues) => {
  const body = { ...values, birthday: values.birthday.toISOString() }

  const { data, error } = await customFetch<FetchRegisterStatus>({
    url: `${serverUrl}${Endpoints.LOGIN}`,
    errors: {
      400: { message: 'Bad request. Some fields are missing or has an invalid format' }
    },
    init: {
      method: 'POST',
      body: JSON.stringify(body),
      headers: {
        'Content-Type': 'application/json'
      }
    }
  })

  return { data, error }
}
