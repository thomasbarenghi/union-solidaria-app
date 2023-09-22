/* eslint-disable @typescript-eslint/no-invalid-void-type */
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import type { InitiativeInterface } from '@/interfaces'
import { serverUrl as baseUrl } from '@/utils/constants/env.const'
import Endpoints from '@/utils/constants/endpoints.const'
import { objectToFormData } from '@/utils/functions/objectToFormData.utils'
import { RootState } from '../store'

export const initiativesApi = createApi({
  reducerPath: 'initiativesApi',
  baseQuery: fetchBaseQuery({
    baseUrl,
    prepareHeaders: (headers, { getState }) => {
      headers.set('sessionId', (getState() as RootState).authSession.auth.sessionId ?? '')
    }
  }),
  endpoints: (builder) => ({
    postInitiatives: builder.mutation<InitiativeInterface, InitiativeInterface>({
      query: (body) => {
        const bodyFormData = objectToFormData(body)
        return {
          url: Endpoints.INITIATIVES(''),
          method: 'POST',
          body: bodyFormData
        }
      }
    }),
    putInitiatives: builder.mutation<InitiativeInterface, InitiativeInterface>({
      query: (body) => {
        const bodyFormData = objectToFormData(body)
        return {
          url: Endpoints.INITIATIVES_BY_ID(body.id),
          method: 'PUT',
          body: bodyFormData
        }
      }
    }),
    deleteInitiatives: builder.mutation<InitiativeInterface, InitiativeInterface>({
      query: (body) => ({
        url: Endpoints.INITIATIVES_BY_ID(body.id),
        method: 'DELETE',
        body
      })
    })
  })
})

export const { useDeleteInitiativesMutation, usePostInitiativesMutation, usePutInitiativesMutation } = initiativesApi
