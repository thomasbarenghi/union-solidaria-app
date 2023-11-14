import { Header, Footer } from '@/components'

interface Props {
  children: React.ReactNode
}

const ClientLayout = ({ children }: Props) => (
  <>
    <Header />
    {children}
    <Footer />
  </>
)

export default ClientLayout
