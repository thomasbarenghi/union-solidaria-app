import { Header } from '@/components'

interface Props {
  children: React.ReactNode
}

const AuthLayout = ({ children }: Props) => (
  <>
    <Header theme='transparent' layout='simple' />
    <main className='flex min-h-screen flex-col'>{children}</main>
  </>
)

export default AuthLayout
