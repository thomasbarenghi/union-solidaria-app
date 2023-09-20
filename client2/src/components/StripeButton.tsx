interface Props {
  children: React.ReactNode
  align?: 'center'
  onClick: () => void
}

const StripeButton = ({ children, align, onClick }: Props) => (
  <button onClick={onClick} className='primaryButton whitespace-nowrap bg-blue-700'>
    {children}
  </button>
)

export default StripeButton
