import { serverUrl } from '@/utils/constants/env.const'

// export const fetcher = (...args:any) => {
//   fetch(...args).then(res => res.json())
// }

export const fetcher = async (url: string) => {
  const response = await fetch(`${serverUrl}${url}`)
  if (!response.ok) {
    throw new Error('No se pudo cargar la data.')
  }
  return await response.json()
}
