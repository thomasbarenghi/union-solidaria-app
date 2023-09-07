'use client'
import { RootState } from '../store/store'

export const currentInitiativeSelector = (state: RootState) => state?.initiatives?.currentInitiative
export const initiativesSelector = (state: RootState) => state?.initiatives?.initiatives
