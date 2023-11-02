import { serverUrl } from '@/utils/constants/env.const'
import axios, { AxiosRequestConfig, type AxiosResponse } from 'axios'

interface Response {
  data: any
  error: boolean
  success?: boolean
}

export const putRequest = async (url: string, data: object = {}, config?: AxiosRequestConfig): Promise<Response> => {
  try {
    const response: AxiosResponse = await axios.put(`${serverUrl}${url}`, data, { ...config })

    return {
      data: response.data,
      error: false
    }
  } catch (error) {
    console.error('Error putRequest:', error)
    return {
      data: error,
      error: true
    }
  }
}

export const postRequest = async (url: string, data: object = {}, config?: AxiosRequestConfig): Promise<Response> => {
  try {
    const response: AxiosResponse = await axios.post(`${serverUrl}${url}`, data, { ...config })

    return {
      data: response.data,
      error: false
    }
  } catch (error) {
    console.error('Error postRequest:', error)
    return {
      data: error,
      error: true
    }
  }
}

export const deleteRequest = async (url: string, headers: object = {}): Promise<Response> => {
  try {
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
  } catch (error) {
    console.error('Error deleteRequest:', error)
    return {
      data: error,
      error: true,
      success: false
    }
  }
}

export const getRequest = async (
  url: string,
  headers: object = {},
  next?: {
    revalidate?: false | 0 | number
    tags?: string[]
    cache?: 'force-cache' | 'no-store' | 'no-cache'
  }
): Promise<Response> => {
  try {
    const response = await fetch(`${serverUrl}${url}`, {
      next: {
        revalidate: next?.revalidate,
        tags: next?.tags
      },
      cache: next?.cache,
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        ...headers
      }
    })
    const responsejson = await response.json()
    return {
      data: responsejson,
      error: !response.ok,
      success: response.ok
    }
  } catch (error) {
    console.error('Error getRequest:', error)
    return {
      data: error,
      error: true,
      success: false
    }
  }
}
