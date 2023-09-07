'use client'
import ListItemText from '@mui/material/ListItemText'
import Checkbox from '@mui/material/Checkbox'
import * as React from 'react'
import { Select } from '@mui/base/Select'
import { Option } from '@mui/base/Option'
import clsx from 'clsx'

interface Props {
  names: string[]
  placeholder: string
  setSelected: (selected: string[]) => void
  selectedValue: string[]
  label?: string
  labelClass?: string
}

export default function UnstyledSelectMultiple({
  names,
  placeholder,
  selectedValue,
  setSelected,
  label,
  labelClass
}: Props) {
  return (
    <label className={`smalltext flex w-full min-w-0 flex-col gap-1 font-normal ${labelClass}`}>
      {label}
      <div className='relative'>
        <Select
          multiple
          onChange={(_, newValue) => setSelected(newValue)}
          className='relative w-full min-w-0 rounded-md border border-solid border-gray-600 px-4 py-3 text-start'
          defaultValue={names}
          value={selectedValue}
          placeholder='Placeholder'
          renderValue={(selected) => {
            if (selected.length === 0) {
              return <p className='text-gray-400'>{placeholder}</p>
            }
            return selectedValue.join(', ')
          }}
          slotProps={{
            listbox: {
              className: ' bg-white shadow-lg w-full rounded-md border mt-2 p-3'
            },
            popper: {
              disablePortal: true,
              className: 'w-full !z-[10]'
            },
            root: (ownerState) => {
              return {
                className: clsx(
                  `flex items-center justify-between bg-white ${
                    ownerState.open ? 'after:content-["▴"]' : 'after:content-["▾"]'
                  } after:float-right`
                )
              }
            }
          }}
        >
          <div className='flex w-full flex-col gap-2'>
            <Option disabled value=''>
              <p className='font-light text-gray-800'>{placeholder}</p>
            </Option>
            {names.map((name) => (
              <Option className='flex !h-max items-center gap-1 !p-0' key={name} value={name}>
                <Checkbox className='!p-0' checked={selectedValue?.includes(name)} />
                <ListItemText className='!m-0 !p-0 text-base' primary={name} />
              </Option>
            ))}
          </div>
        </Select>
      </div>
    </label>
  )
}
