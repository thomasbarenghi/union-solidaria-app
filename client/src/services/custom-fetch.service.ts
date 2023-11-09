import { FetchError } from '@/interfaces'

interface Options<S extends number> {
  url: string
  errors: Partial<Record<DefaultHandledStatus, ErrorOption>> & Omit<Record<S, ErrorOption>, DefaultHandledStatus>
  init?: RequestInit
}

type DefaultHandledStatus = 200 | 201 | 202 | 500 | 'unhandled'

interface ErrorOption {
  message: string
}

export const customFetch = async <Status extends number, DataType = any>(
  options: Options<Status>
): Promise<{
  data: DataType | undefined
  error: FetchError<Status | DefaultHandledStatus> | null
}> => {
  const { url, init, errors } = options
  const defaultErrors = {
    200: null,
    201: null,
    202: null,
    500: { message: `Something went wrong when trying to fetch ${url}` }
  }
  const extendedErrors: Record<Status | DefaultHandledStatus, ErrorOption> = {
    ...errors,
    ...defaultErrors
  }

  try {
    const res = await fetch(url, { ...init })
    const data = await res.json()
    const isStatusHandled = Object.keys(extendedErrors).includes(res.status.toString())

    if (!isStatusHandled) {
      return {
        data: undefined,
        error: {
          status: 'unhandled',
          message: `Unhandled error, response status code ${res.status} received from the server`,
          serverError: data
        }
      }
    }

    if (extendedErrors[res.status as Status | DefaultHandledStatus] === null) {
      return { data, error: null }
    }

    return {
      data: undefined,
      error: {
        status: res.status as Status | DefaultHandledStatus,
        ...extendedErrors[res.status as Status | DefaultHandledStatus],
        serverError: data
      }
    }
  } catch (error) {
    console.error(error)
    return { data: undefined, error: { status: 500, ...extendedErrors[500], serverError: error } }
  }
}
