import Content from './components/Content'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Iniciativa | Union Solidaria'
}

interface Props {
  params: {
    initiativeId: string
  }
}

const Home = ({ params }: Props) => <Content id={params.initiativeId} />

export default Home
