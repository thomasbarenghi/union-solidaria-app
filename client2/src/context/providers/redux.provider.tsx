'use client'
import { Provider } from 'react-redux'
import store, { persistor } from '@/redux/store/store'
import { PersistGate } from 'redux-persist/integration/react'

interface Props {
  children: React.ReactNode
}

const ReduxProvider = ({ children }: Props) => (
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      {children}
    </PersistGate>
  </Provider>
)

export default ReduxProvider
