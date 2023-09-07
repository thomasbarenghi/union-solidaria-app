'use client'
import { create } from 'zustand'
import { serverUrl } from '@/utils/constants/env.const'
import useUserStore from '@/store/userStore'
import axios from 'axios'

interface AuthState {
  isLogged: boolean
  sessionId: string
  userId: string
  loginLocal: (body: { email: string; password: string }) => Promise<void>
  verifySession: (body: { sessionId: string; userId: string }) => Promise<void>
}

const useAuthStore = create<AuthState>()((set, get) => ({
  isLogged: false,
  sessionId: '',
  userId: '',
  loginLocal: async (body) => {
    try {
      const { data } = await axios.post(`${serverUrl}/auth/login`, body)
      set({ isLogged: true, sessionId: data.sessionId, userId: data.userId })
      useUserStore.getState().getLoggedUser(data.userId)
    } catch (error) {
      console.log(error)
    }
  },
  verifySession: async (body) => {
    const res = await fetch('')
    set({ isLogged: true })
  }
}))

export default useAuthStore
