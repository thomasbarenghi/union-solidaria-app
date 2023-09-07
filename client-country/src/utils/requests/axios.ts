import axios from 'axios'
import { serverUrl } from '@/utils/constants/env.const'

export const axiosPutter = async (url: string, data: any, cType: any) => {
  const { data: res } = await axios.put(serverUrl + url, data, {
    headers: {
      'Content-Type': cType
    }
  })

  return res
}

interface axiosPosterType {
  url: string
  body?: any
}
export const axiosPoster = async ({ url, body }: axiosPosterType) => {
  console.log('axiosPoster body', body)
  const { data: res } = await axios.post(serverUrl + url, body || {})
  console.log('axiosPoster res', res)
  return res
}

interface axiosGetterType {
  url: string
  headers?: any
}

export const axiosGetter = async ({ url, headers }: axiosGetterType) => {
  console.log('axiosGetter headers', headers)
  const { data: res } = await axios.get(serverUrl + url, {
    headers: headers || {}
  })

  return res
}

interface axiosDeleterType {
  url: string
  headers?: any
}

export const axiosDeleter = async ({ url, headers }: axiosDeleterType) => {
  const { data: res } = await axios.delete(serverUrl + url, {
    headers
  })

  return res
}
