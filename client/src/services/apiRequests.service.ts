import { serverUrl } from '@/utils/constants/env.const'

interface Response {
  data: object
  error: boolean
  success: boolean
}

export const putRequest = async (url: string, data: object, headers?: object): Promise<Response> => {
  const response = await fetch(`${serverUrl}${url}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      ...headers
    },
    body: JSON.stringify(data)
  })

  console.log('putRequest', response)
  return {
    data: await response.json(),
    error: !response.ok,
    success: response.ok
  }
}

export const postRequest = async (url: string, data: object = {}, headers?: object) => {
  const response = await fetch(`${serverUrl}${url}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      ...headers
    },
    body: JSON.stringify(data)
  })

  return {
    data: await response.json(),
    error: !response.ok,
    success: response.ok
  }
}

export const deleteRequest = async (url: string, headers: object = {}): Promise<Response> => {
  const response = await fetch(`${serverUrl}${url}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
      ...headers
    }
  })

  return {
    data: await response.json(),
    error: !response.ok,
    success: response.ok
  }
}

// Must be deprecated
export const getRequest = async (url: string, headers: object = {}): Promise<Response> => {
  const response = await fetch(`${serverUrl}${url}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      ...headers
    }
  })

  return {
    data: await response.json(),
    error: !response.ok,
    success: response.ok
  }
}
