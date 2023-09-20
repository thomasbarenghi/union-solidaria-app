import Hero from './layoutComponents/hero'

interface Props {
  children: React.ReactNode
}

const ProfileLayout = ({ children }: Props) => (
  <>
    <Hero />
    {children}
  </>
)

export default ProfileLayout
