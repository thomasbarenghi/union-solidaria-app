import clsx from 'clsx'

interface Props {
  children: React.ReactNode
  variant: 'primary' | 'secondary'
  iconLeft?: JSX.Element
  align?: 'center'
  onClick?: () => void
}

function Button({ children, variant, iconLeft, align, onClick }: Props) {
  const classes = {
    button: clsx(
      'rounded-full px-6 py-2 text-center text-lg font-bold shadow-md shadow-gray-500 transition-colors duration-300 ',
      variant === 'primary' && 'bg-blue-500 text-white hover:bg-blue-400',
      variant === 'secondary' && 'border border-solid border-blue-500 text-blue-700 hover:bg-blue-100',
      iconLeft && 'flex items-center justify-center gap-x-2',
      align === 'center' && 'mx-auto'
    )
  }

  return (
    <button onClick={onClick} className={classes.button}>
      {iconLeft && iconLeft}
      {children}
    </button>
  )
}

export default Button
