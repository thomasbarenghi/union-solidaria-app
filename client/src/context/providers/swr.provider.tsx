'use client'
import { SWRConfig } from 'swr'
import { fetcher } from '@/services/fetcher.service'

const SWRProvider = ({ children }: React.PropsWithChildren<{}>) => (
  <SWRConfig value={{ provider: () => new Map(), fetcher, revalidateOnFocus: true }}>{children}</SWRConfig>
)

export default SWRProvider
