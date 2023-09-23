interface Props {
  children: React.ReactNode
  onClick?: () => void
}

function PrimaryButton({ children, onClick }: Props) {
  return (
    <button
      onClick={onClick}
      className='justify-self-center rounded-full bg-blue-500 px-6 py-2 text-white drop-shadow-md hover:bg-[#7B92FE]'
    >
      {children}
    </button>
  )
}

export default PrimaryButton
