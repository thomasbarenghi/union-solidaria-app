interface Props {
  children: React.ReactNode
  align?: 'center'
  onClick: () => void
}

const StripeButton = ({ children, align, onClick }: Props) => (
  <button onClick={onClick} className='primaryButton bg-blue-700 whitespace-nowrap'>
    {children}
  </button>
)

export default StripeButton
