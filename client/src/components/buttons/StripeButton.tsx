import clsx from 'clsx'

interface Props {
  children: React.ReactNode
  align?: 'center'
  onClick: () => void
}

function StripeButton({ children, align, onClick }: Props) {
  const classes = {
    button: clsx(
      'rounded-full bg-white px-6 py-2 text-center text-lg font-black text-[#635bff] shadow-md shadow-black/30',
      align === 'center' && 'mx-auto'
    )
  }

  return (
    <button onClick={onClick} className={classes.button}>
      {children}
    </button>
  )
}

export default StripeButton
