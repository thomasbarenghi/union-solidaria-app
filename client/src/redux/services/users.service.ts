/* eslint-disable @typescript-eslint/no-invalid-void-type */
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import type { UserInterface } from '@/interfaces'
import { serverUrl as baseUrl } from '@/utils/constants/env.const'
import Endpoints from '@/utils/constants/endpoints.const'
import { objectToFormData } from '@/utils/functions/objectToFormData.utils'
import { RootState } from '../store'
import { updateCurrentUser } from '../slices/authSession'

export const currentUsersApi = createApi({
  reducerPath: 'usersApi',
  baseQuery: fetchBaseQuery({
    baseUrl,
    prepareHeaders: (headers, { getState }) => {
      headers.set('sessionId', (getState() as RootState).authSession.auth.sessionId ?? '')
      headers.set('userId', (getState() as RootState).authSession.session._id ?? '')
    }
  }),
  endpoints: (builder) => ({
    postUsers: builder.mutation<UserInterface, UserInterface>({
      query: (body) => ({
        url: Endpoints.USERS,
        method: 'POST',
        body
      })
    }),
    putUsers: builder.mutation<any, any>({
      query: ({ data, userId }) => {
        const bodyFormData = objectToFormData(data)
        return {
          url: Endpoints.USER_BY_ID(userId),
          method: 'PUT',
          body: bodyFormData
        }
      },
      onQueryStarted: async (body, { dispatch, queryFulfilled }) => {
        const { data } = await queryFulfilled
        await dispatch(updateCurrentUser(data.user))
      }
    }),
    deleteUsers: builder.mutation<UserInterface, UserInterface>({
      query: (body) => ({
        url: Endpoints.USER_BY_ID(body._id),
        method: 'DELETE',
        body
      })
    }),
    getCurrentUser: builder.query<any, string>({
      query: (id) => Endpoints.USER_BY_ID(id),
      onQueryStarted: async (_, { dispatch, queryFulfilled }) => {
        const { data } = await queryFulfilled
        await dispatch(updateCurrentUser(data))
      }
    })
  })
})

export const { useDeleteUsersMutation, usePostUsersMutation, usePutUsersMutation, useGetCurrentUserQuery } =
  currentUsersApi
