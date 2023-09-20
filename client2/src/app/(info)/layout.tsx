import { Header, Footer } from '@/components'

interface Props {
  children: React.ReactNode
}

const HelpLayout = ({ children }: Props) => (
  <main className='flex min-h-screen flex-col'>
    <Header />
    {children}
    <Footer />
  </main>
)

export default HelpLayout
