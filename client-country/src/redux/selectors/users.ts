'use client'
import { RootState } from '../store/store'

export const currentAuthSelector = (state: RootState) => state.authSession.auth
export const currentUserSelector = (state: RootState) => state?.authSession?.session
export const currentActiveUserSelector = (state: RootState) => state?.users?.currentUser
