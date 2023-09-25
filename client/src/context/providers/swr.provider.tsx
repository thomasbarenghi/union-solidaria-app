'use client'
import { SWRConfig } from 'swr'
import { fetcher } from '@/services/fetcher.service'
import { localStorageProvider } from './localStorageProvider'

const SWRProvider = ({ children }: React.PropsWithChildren<{}>) => (
  <SWRConfig value={{ provider: localStorageProvider, fetcher, revalidateOnFocus: true, errorRetryCount: 3 }}>{children}</SWRConfig>
)

export default SWRProvider
