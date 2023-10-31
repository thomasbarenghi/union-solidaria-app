import { FetchPostInitiativeStatus } from '@/types/fetch-status'
import Endpoints from '@/utils/constants/endpoints.const'
import { serverUrl } from '@/utils/constants/env.const'
import { customFetch } from '../custom-fetch.service'
import { InitiativeInterface } from '@/interfaces'
// import { objectToFormData } from '@/utils/functions/objectToFormData.utils'

// export const postInitiative = async (sessionId: string, formData: FormData) => {
export const postInitiative = async (sessionId: string, formData: any) => {
  // eslint-disable-next-line @typescript-eslint/strict-boolean-expressions
  if (!formData) return { initiative: undefined, error: { status: 400, message: 'no data was passed' } }
  // const body = objectToFormData(formData)

  const { data, error } = await customFetch<FetchPostInitiativeStatus, InitiativeInterface>({
    url: `${serverUrl.concat(Endpoints.INITIATIVES(''))}`,
    errors: {
      400: { message: 'The passed data is not valid' },
      401: { message: 'user do not have permission to post an initiative' },
      413: { message: 'The request body is too large' }
    },
    init: {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        authorization: sessionId
      },
      body: JSON.stringify(formData)
    }
  })

  return { initiative: data, error }
}
