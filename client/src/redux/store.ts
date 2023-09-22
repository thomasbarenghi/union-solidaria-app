import { configureStore } from '@reduxjs/toolkit'
import { persistStore, persistReducer, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import rootReducer from './rootReducer'
import { initiativesApi } from './services/initiatives.service'
import { currentUsersApi } from './services/users.service'
import { authSessionApi } from './services/authSession.service'
import { reviewsApi } from './services/reviews.service'

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['authSession', 'users', 'initiatives'],
  debug: true
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        ignoredPaths: ['users', 'authSession', 'initiatives']
      }
    }).concat(
      initiativesApi.middleware,
      currentUsersApi.middleware,
      authSessionApi.middleware,
      reviewsApi.middleware
    )
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export const persistor = persistStore(store)

export default store
