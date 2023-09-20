interface AccountSectionProps {
  children: React.ReactNode
}

const AccountSection = ({ children }: AccountSectionProps) => (
  <div className='listContainer section-padding-1 items-start py-[60px]'>{children}</div>
)

export default AccountSection
