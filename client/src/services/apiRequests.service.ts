import axios, { AxiosResponse } from 'axios'
import { serverUrl } from '@/utils/constants/env.const'

export const putRequest = async (url: string, data: object, contentType: string): Promise<AxiosResponse> => {
  const response: AxiosResponse = await axios.put(`${serverUrl}${url}`, data, {
    headers: {
      'Content-Type': contentType
    }
  })
  return response.data
}

export const postRequest = async (url: string, body: object = {}): Promise<AxiosResponse> => {
  const response: AxiosResponse = await axios.post(`${serverUrl}${url}`, body)
  return response.data
}

export const getRequest = async (url: string, headers: object = {}): Promise<AxiosResponse> => {
  const response: AxiosResponse = await axios.get(`${serverUrl}${url}`, {
    headers
  })
  return response.data
}

export const deleteRequest = async (url: string, headers: object = {}): Promise<AxiosResponse> => {
  const response: AxiosResponse = await axios.delete(`${serverUrl}${url}`, {
    headers
  })
  return response.data
}
