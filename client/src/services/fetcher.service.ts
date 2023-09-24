import { serverUrl } from '@/utils/constants/env.const'
import { loggedUserReduxMiddleware } from '@/redux/middleware/loggedUser.middleware'

export const fetcher = async (url: string) => {
  const res = await fetch(`${serverUrl}${url}`).then(async (res) => await res.json())
  return loggedUserReduxMiddleware(url, res)
}
