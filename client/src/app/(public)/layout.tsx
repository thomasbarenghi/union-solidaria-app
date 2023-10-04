import { Footer } from '@/components'

interface Props {
  children: React.ReactNode
}

const RootLayout = ({ children }: Props) => (
  <main className='flex min-h-screen flex-col'>
    {children}
    <Footer />
  </main>
)

export default RootLayout
