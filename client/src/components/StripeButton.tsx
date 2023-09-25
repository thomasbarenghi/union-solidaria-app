interface Props {
  children: React.ReactNode
  align?: 'center'
  onClick: () => void
}

const StripeButton = ({ children, align, onClick }: Props) => (
  <button onClick={onClick} className='rounded-3xl border-none px-8 py-4 text-small font-semibold leading-[100%] text-white whitespace-nowrap bg-blue-700'>
    {children}
  </button>
)

export default StripeButton
