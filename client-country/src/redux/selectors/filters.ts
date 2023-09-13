'use client'
import { createSelector } from '@reduxjs/toolkit'
import { RootState } from '../store'

export const filters = (state: RootState) => state?.filters

export const currentFilters = createSelector(filters, (filters) => {
  return removeEmpty(filters)
})

const removeEmpty = (obj: any) => {
  const newObj = { ...obj }
  for (const key in newObj) {
    if (obj[key] === null || newObj[key] === undefined || newObj[key] === '') {
      delete newObj[key] // eslint-disable-line
    }
  }
  return newObj
}
