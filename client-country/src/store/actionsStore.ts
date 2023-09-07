import { create } from 'zustand'

interface buttonState {
  menuOpened: boolean
  backdropOpened: boolean
  setMenuOpen: () => void
  setBackdropOpen: () => void
}

const useActionStore = create<buttonState>()((set, get) => ({
  menuOpened: false,
  backdropOpened: false,
  setMenuOpen: () => {
    const currentState = get().menuOpened
    set({ menuOpened: !currentState })
  },
  setBackdropOpen: () => {
    const currentState = get().backdropOpened
    set({ backdropOpened: !currentState })
  }
}))

export default useActionStore
