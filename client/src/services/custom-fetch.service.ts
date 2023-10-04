interface Options<S extends number> {
  url: string
  errors: Partial<Record<DefaultHandledStatus, ErrorOption>> & Omit<Record<S, ErrorOption>, DefaultHandledStatus>
  init?: RequestInit
}

type DefaultHandledStatus = 200 | 201 | 202 | 500

interface ErrorOption {
  message: string
}

export const customFetch = async <Status extends number>(options: Options<Status>) => {
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
    const isErrorHandled = Object.keys(extendedErrors).includes(res.status.toString())

    if (!isErrorHandled) {
      const data = await res.json()
      return {
        data,
        error: { status: 'unhandled', message: `Unhandled error, response status code ${res.status}` }
      }
    }

    if (extendedErrors[res.status as Status | DefaultHandledStatus] !== null) {
      const data = await res.json()
      return { data, error: { status: res.status, ...extendedErrors[res.status as Status | DefaultHandledStatus] } }
    }

    return {
      data: undefined,
      error: { status: res.status, ...extendedErrors[res.status as Status | DefaultHandledStatus] }
    }
  } catch (error) {
    console.log(error)
    return { data: undefined, error: { status: 500, ...extendedErrors[500] } }
  }
}
