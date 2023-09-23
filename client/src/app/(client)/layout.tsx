import { Header, Footer } from '@/components'

interface Props {
  children: React.ReactNode
}

const ClientLayout = ({ children }: Props) => (
  <>
    <Header />
    <main className='flex min-h-screen flex-col'>{children}</main>
    <Footer />
  </>
)

export default ClientLayout
