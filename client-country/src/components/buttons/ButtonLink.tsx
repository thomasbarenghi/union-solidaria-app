import clsx from 'clsx'
import Link, { LinkProps } from 'next/link'

interface Props extends LinkProps {
  children: React.ReactNode
  variant?: 'primary' | 'secondary'
  iconLeft?: JSX.Element
  iconRight?: JSX.Element
  align?: 'center' | 'bottom'
}

function ButtonLink({ children, variant, iconLeft, iconRight, align, ...rest }: Props) {
  const classes = {
    link: clsx(
      'rounded-full px-6 py-2 text-center text-lg font-bold text-blue-500 transition-colors duration-300 hover:text-blue-300 ',
      variant === 'primary' && 'bg-blue-500 text-white shadow-md shadow-gray-500 hover:bg-blue-400',
      variant === 'secondary' &&
        'border border-solid border-blue-500 text-blue-700 shadow-md shadow-gray-500 hover:bg-blue-100',
      iconLeft && 'flex items-center justify-center gap-x-2',
      iconRight && 'flex items-center justify-center gap-x-2',
      align === 'center' && 'mx-auto',
      align === 'bottom' && 'mt-auto'
    )
  }

  return (
    <Link {...rest} className={classes.link}>
      {iconLeft && iconLeft}
      {children}
      {iconRight && iconRight}
    </Link>
  )
}

export default ButtonLink
