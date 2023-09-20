import { serverUrl } from '@/utils/constants/env.const'

export const fetcher = async (url: string) => await fetch(`${serverUrl}${url}`).then(async (res) => await res.json())
