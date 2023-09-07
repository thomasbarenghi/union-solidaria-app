interface Props {
  menuOpened: boolean
  setMenuOpen: () => void
}

function HamburgerMenuBtn({ menuOpened, setMenuOpen }: Props) {
  return (
    <button
      onClick={() => setMenuOpen()}
      className='z-20 fixed top-2 right-4 p-3 bg-transparent w-11 h-11 rounded-md'
    >
      <div
        className={`bg-blue-700 h-0.5 rounded-md w-full transition-all
            ${menuOpened ? 'rotate-45 translate-y-0.5' : ''}
          `}
      />
      <div
        className={`bg-blue-700 h-0.5 rounded-md w-full my-1
            ${menuOpened ? 'hidden' : ''}
          `}
      />
      <div
        className={`bg-blue-700 h-0.5 rounded-md w-full transition-all
            ${menuOpened ? '-rotate-45' : ''}
          `}
      />
    </button>
  )
}

export default HamburgerMenuBtn
