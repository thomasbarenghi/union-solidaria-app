'use client'
import { Select } from '@mui/base/Select'
import { Option } from '@mui/base/Option'
import clsx from 'clsx'
import { ControllerRenderProps, FieldValues, RegisterOptions, UseFormRegister } from 'react-hook-form'

interface Props {
  names: any[]
  name: string
  placeholder: string
  setSelected: (data: any) => void
  selectedValue?: string | any
  label?: string
  labelClass?: string
  hookForm?: {
    register: UseFormRegister<any>
    validations: RegisterOptions
  }
  error?: string | any
  field?: ControllerRenderProps<FieldValues, any>
}

export default function UnstyledSelect({
  names,
  placeholder,
  hookForm,
  selectedValue,
  field,
  label,
  labelClass,
  name,
  error,
  setSelected
}: Props) {
  return (
    <label className={`smalltext flex w-full min-w-0 flex-col gap-1 font-normal ${labelClass}`}>
      {label}
      <div className='relative'>
        <Select
          {...field}
          onChange={(_, newValue) => setSelected(newValue)}
          renderValue={(selected) => {
            if (!selected?.value) {
              return <p className='text-gray-400'>{placeholder}</p>
            }
            return <p className='text-black'>{selected?.label as string}</p>
          }}
          className='relative w-full min-w-0 rounded-md border border-solid border-gray-600 px-4 py-3 text-start'
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
            <Option value=''>
              <p className='font-light text-gray-800'>{placeholder}</p>
            </Option>
            {names.map((name, index) => (
              <Option className='flex !h-max items-center gap-1 !p-0' key={index} value={name.value}>
                <p className='font-light text-black'>{name.label}</p>
              </Option>
            ))}
          </div>
        </Select>
        {error && <p className='gap-estilo4 smalltext ml-2 flex font-medium text-red-700 dark:text-red-800'>{error}</p>}
      </div>
    </label>
  )
}
