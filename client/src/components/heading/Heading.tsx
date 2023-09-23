import clsx from 'clsx'

interface Props {
  as?: 'h2'
  children: React.ReactNode
}

function Heading({ as, children }: Props) {
  const classes = {
    heading1: clsx('text-2xl font-bold text-pink-500'),
    heading2: clsx('text-xl font-bold text-blue-600')
  }

  if (as === 'h2') return <h2 className={classes.heading2}>{children}</h2>

  return <h1 className={classes.heading1}>{children}</h1>
}

export default Heading
