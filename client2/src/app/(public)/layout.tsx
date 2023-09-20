import { Header, Footer } from '@/components'

interface Props {
  children: React.ReactNode
}

const RootLayout = ({ children }: Props) => (
  <main className='flex min-h-screen flex-col'>
    <Header />
    {children}
    {/* <BottomBar /> */}
    <Footer />
  </main>
)

export default RootLayout
