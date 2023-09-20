/* eslint-disable @typescript-eslint/no-invalid-void-type */
import { ReviewFormDTO } from '@/interfaces/forms.interface'
import Endpoints from '@/utils/constants/endpoints.const'
import { serverUrl as baseUrl } from '@/utils/constants/env.const'
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { RootState } from '../store'

export const reviewsApi = createApi({
  reducerPath: 'reviewsApi',
  baseQuery: fetchBaseQuery({
    baseUrl,
    prepareHeaders: (headers, { getState }) => {
      headers.set('sessionId', (getState() as RootState).authSession.auth.sessionId ?? '')
    }
  }),
  endpoints: (builder) => ({
    postReview: builder.mutation<any, ReviewFormDTO>({
      query: (body) => ({
        url: Endpoints.REVIEWS,
        method: 'POST',
        body
      })
    })
  })
})

export const { usePostReviewMutation } = reviewsApi
