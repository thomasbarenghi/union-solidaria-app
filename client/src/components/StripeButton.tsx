interface Props {
  children: React.ReactNode
  align?: 'center'
  onClick: () => void
}

const StripeButton = ({ children, align, onClick }: Props) => (
  <button
    onClick={onClick}
    className='whitespace-nowrap rounded-3xl border-none bg-primary px-8 py-4 text-small font-semibold leading-[100%] text-white'
  >
    {children}
  </button>
)

export default StripeButton
