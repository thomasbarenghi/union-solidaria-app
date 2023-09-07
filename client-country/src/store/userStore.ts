'use client'
import { User } from '@/interfaces/user'
import { create } from 'zustand'
import axios from 'axios'
import { serverUrl } from '@/utils/constants/env.const'
import { persist, createJSONStorage } from 'zustand/middleware'

interface UserState {
  loggedUser: User | null
  currentUser: User | null
  users: User[]
  getLoggedUser: (userId: string) => Promise<void>
  getCurrentUser: (userId: string) => Promise<void>
  getUsers: () => Promise<void>
  createUser: (userData: User) => Promise<void>
}

const useUserStore = create<UserState>()(
  persist(
    (set, get) => ({
      loggedUser: null,
      currentUser: null,
      users: [],
      getLoggedUser: async (userId) => {
        try {
          const { data } = await axios.get(`${serverUrl}/users/${userId}`)
          set({ loggedUser: data.user })
          console.log(data.user)
        } catch (error) {
          console.log(error)
        }
      },
      getCurrentUser: async (userId) => {
        try {
          const { data } = await axios.get(`${serverUrl}/users/${userId}`)
          set({ currentUser: data.user })
        } catch (error) {
          console.log(error)
        }
      },
      getUsers: async () => {},
      createUser: async (userData) => {}
    }),
    {
      name: 'users-storage', // name of the item in the storage (must be unique)
      storage: createJSONStorage(() => localStorage) // (optional) by default, 'localStorage' is used
    }
  )
)

export default useUserStore
