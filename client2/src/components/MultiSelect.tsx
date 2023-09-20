'use client'
import * as React from 'react'
import { Select } from '@mui/base/Select'
import { Option, OptionOwnerState } from '@mui/base/Option'
import clsx from 'clsx'
import { ControllerRenderProps, FieldValues } from 'react-hook-form'

interface Props {
  names: Array<{ value: string; label: string }>
  name: string
  placeholder: string
  setSelected: (selected: string[]) => void
  selectedValue?: string[]
  label?: string
  labelClass?: string
  field: ControllerRenderProps<FieldValues, any>
  error?: string | any
}

const getOptionColorClasses = ({ selected, highlighted, disabled }: Partial<OptionOwnerState<number>>) => {
  let classes = ''
  if (disabled === true) {
    classes += 'text-slate-400 dark:text-slate-700'
  } else {
    if (selected === true) {
      classes += ' bg-purple-100 dark:bg-purple-950 text-purple-950 dark:text-purple-50'
    } else if (highlighted === true) {
      classes += ' bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-slate-300'
    }
    classes += ' hover:dark:bg-slate-800 hover:bg-slate-100 hover:dark:text-slate-300 hover:text-slate-900'
  }
  return classes
}

const MultiSelect = ({
  names,
  placeholder,
  selectedValue,
  setSelected,
  label = '',
  labelClass = '',
  field,
  name,
  error
}: Props) => (
  <label className={`smalltext flex w-full min-w-0 flex-col gap-1 font-normal ${labelClass}`}>
    {label}
    <div className='relative'>
      <Select
        {...field}
        multiple
        name={name}
        onChange={(_, newValue) => {
          setSelected(newValue)
          field.onChange(newValue)
        }}
        className='relative w-full min-w-0 rounded-md border border-solid border-gray-600 px-4 py-3 text-start'
        placeholder='Placeholder'
        renderValue={(selected) => {
          if (selected.length === 0) {
            return <p className='text-gray-400'>{placeholder}</p>
          }
          const valores = selected.map((objeto) => objeto.value)
          return <p className='text-black'>{valores.join(', ')}</p>
        }}
        slotProps={{
          listbox: {
            className: ' bg-white shadow-lg w-full rounded-md border mt-2 p-3'
          },
          popper: {
            disablePortal: true,
            className: 'w-full !z-[10]'
          },
          root: (ownerState) => ({
            className: clsx(
              `flex items-center justify-between bg-white ${
                ownerState.open ? 'after:content-["▴"]' : 'after:content-["▾"]'
              } after:float-right`
            )
          })
        }}
      >
        <div className='flex w-full flex-col gap-2'>
          <Option disabled value=''>
            <p className='font-light text-gray-800'>{placeholder}</p>
          </Option>
          {names.map((name) => (
            <Option
              className='flex !h-max items-center gap-1 !p-0'
              key={name.value}
              value={name.value}
              slotProps={{
                root: ({ selected, highlighted, disabled }) => ({
                  className: `list-none px-2 py-1 rounded-lg cursor-default last-of-type:border-b-0 ${getOptionColorClasses(
                    { selected, highlighted, disabled }
                  )} ${selected ? 'text-blue-700 font-bold ' : ''} 
                      `
                })
              }}
            >
              {name.label}
            </Option>
          ))}
        </div>
      </Select>
      {error !== undefined && (
        <p className='gap-estilo4 smalltext ml-2 flex font-medium text-red-700 dark:text-red-800'>{error}</p>
      )}
    </div>
  </label>
)

export default MultiSelect
