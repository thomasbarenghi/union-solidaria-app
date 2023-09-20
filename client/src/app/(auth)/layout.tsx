import { Header, Footer } from '@/components'
import Base from './components/base'

interface Props {
  children: React.ReactNode
}

const AuthLayout = ({ children }: Props) => (
  <>
    <Header theme='dark' layout='simple' />
    <main className='flex min-h-screen flex-col'>
      <Base image='https://images.unsplash.com/photo-1644726270363-e746b37b482b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1365&q=80'>
        {children}
      </Base>
    </main>
    <Footer />
  </>
)

export default AuthLayout
