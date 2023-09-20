'use client'
import { SWRConfig } from 'swr'

const SWRProvider = ({ children }: React.PropsWithChildren<{}>) => <SWRConfig>{children}</SWRConfig>

export default SWRProvider
