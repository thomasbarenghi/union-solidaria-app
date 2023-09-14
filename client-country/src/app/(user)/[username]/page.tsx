import Content from './components/content'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Usuario | Unión Solidaria'
}

interface Props {
  params: { username: string }
}

export default async function Page({ params }: Props) {
  return <Content name={params.username} />
}
