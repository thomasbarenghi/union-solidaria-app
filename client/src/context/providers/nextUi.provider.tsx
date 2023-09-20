'use client'
import { NextUIProvider } from '@nextui-org/react'

const NextUiProvider = ({ children }: { children: React.ReactNode }) => <NextUIProvider>{children}</NextUIProvider>

export default NextUiProvider
