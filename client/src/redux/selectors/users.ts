'use client'
import { RootState } from '../store'

export const currentAuthSelector = (state: RootState) => state.authSession.auth
export const loggedUserSelector = (state: RootState) => state?.authSession?.session
