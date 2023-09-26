import { Header } from '@/components'

interface Props {
  children: React.ReactNode
}
const InitiativesLayout = ({ children }: Props) => (
  <>
    <Header />
    {children}
  </>
)

export default InitiativesLayout
