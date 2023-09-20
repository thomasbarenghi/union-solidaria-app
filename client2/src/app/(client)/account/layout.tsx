import Hero from './layoutComponents/hero'
import Section from './layoutComponents/section'

interface Props {
  children: React.ReactNode
}

const AccountLayout = ({ children }: Props) => (
  <>
    <Hero />
    <Section>{children}</Section>
  </>
)

export default AccountLayout
