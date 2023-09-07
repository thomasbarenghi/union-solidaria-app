interface Props {
  className: string
}

function HomeIcon({ className }: Props) {
  return (
    <svg className={className} width='48' height='48' viewBox='0 0 48 48' fill='none' xmlns='http://www.w3.org/2000/svg'>
      <path d='M11 39H18.5V26.5H29.5V39H37V19.5L24 9.75L11 19.5V39ZM8 42V18L24 6L40 18V42H26.5V29.5H21.5V42H8Z' />
    </svg>
  )
}

export default HomeIcon
