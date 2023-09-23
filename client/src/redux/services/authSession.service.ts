/* eslint-disable @typescript-eslint/no-invalid-void-type */
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import type { InitiativeInterface } from '@/interfaces'
import { serverUrl as baseUrl } from '@/utils/constants/env.const'
import Endpoints from '@/utils/constants/endpoints.const'
import { RootState } from '../store'
import { setAuth } from '../slices/authSession'
import { currentUsersApi } from './users.service'

export const authSessionApi = createApi({
  reducerPath: 'authSessionApi',
  baseQuery: fetchBaseQuery({
    baseUrl,
    prepareHeaders: (headers, { getState }) => {
      headers.set('sessionId', (getState() as RootState).authSession.auth.sessionId ?? '')
    }
  }),
  endpoints: (builder) => ({
    postLocalLogin: builder.mutation<any, any>({
      query: (body) => ({
        url: Endpoints.LOGIN,
        method: 'POST',
        body
      }),
      onQueryStarted: async (_, { dispatch, queryFulfilled }) => {
        const { data } = await queryFulfilled
        await dispatch(setAuth({ isLogged: true, sessionId: data.sessionId }))
        await dispatch(currentUsersApi.endpoints.getCurrentUser.initiate(data.userId))
      }
    }),
    getVerifySession: builder.query<InitiativeInterface, InitiativeInterface>({
      query: (body) => Endpoints.VERIFY
    })
  })
})

export const { usePostLocalLoginMutation, useGetVerifySessionQuery } = authSessionApi
