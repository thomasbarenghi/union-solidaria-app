'use client'
import { Provider } from 'react-redux'
import store, { persistor } from '@/redux/store'
import { PersistGate } from 'redux-persist/integration/react'

interface Props {
  children: React.ReactNode
}

function AppProvider({ children }: Props) {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        {children}
      </PersistGate>
    </Provider>
  )
}

export default AppProvider
