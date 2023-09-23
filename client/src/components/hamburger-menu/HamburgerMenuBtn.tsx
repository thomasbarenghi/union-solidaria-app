interface Props {
  menuOpened: boolean
  toggleMenu: () => void
}

function HamburgerMenuBtn({ menuOpened, toggleMenu }: Props) {
  return (
    <button onClick={toggleMenu} className='z-50 h-5 w-7 rounded-md bg-transparent'>
      <div
        className={`h-0.5 w-full rounded-md bg-blue-700 transition-all
            ${menuOpened ? 'translate-y-0.5 rotate-45' : ''}
          `}
      />
      <div
        className={`my-1 h-0.5 w-full rounded-md bg-blue-700
            ${menuOpened ? 'hidden' : ''}
          `}
      />
      <div
        className={`h-0.5 w-full rounded-md bg-blue-700 transition-all
            ${menuOpened ? '-rotate-45' : ''}
          `}
      />
    </button>
  )
}

export default HamburgerMenuBtn
