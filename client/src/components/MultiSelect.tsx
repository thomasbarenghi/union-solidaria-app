/* eslint-disable no-labels */
/* eslint-disable @typescript-eslint/strict-boolean-expressions */
'use client'

import { Select, SelectItem } from '@nextui-org/react'
import { ControllerRenderProps, FieldValues } from 'react-hook-form'

interface Props {
  names: Array<{ value: string, label: string }>
  name: string
  setSelected: (data: any[]) => void
  selectedValue?: string
  label?: string
  errorMessage?: string
  field?: ControllerRenderProps<FieldValues, any>
}

const MultiSelect = ({ names, name, selectedValue, label, errorMessage = '', field, setSelected }: Props) => (
  <Select
    {...field}
    defaultSelectedKeys={selectedValue ? [selectedValue] : []}
    items={names}
    label={label}
    name={name}
    labelPlacement='outside'
    size='md'
    selectionMode='multiple'
    onSelectionChange={(selected) => setSelected(Array.from(selected))}
    placeholder='Selecciona una opción'
    className='w-full'
    classNames={{
      trigger:
        '!text-black placeholder:text-gray-400 placeholder:font-light !bg-white border border-solid border-gray-300 px-3 py-2 text-start rounded-2xl hover:!bg-gray-100 focus:!bg-white',
      label: 'text-sm font-light leading-[155%]  gap-1 font-normal !text-black',
      errorMessage: 'text-sm font-light leading-[155%] text-red-800',
      value: 'text-sm font-light leading-[155%] !text-black',
      selectorIcon: '!text-black'
    }}
    errorMessage={errorMessage}
    isInvalid={errorMessage.length > 0}
  >
    {(obj) => <SelectItem key={obj.value}>{obj.label}</SelectItem>}
  </Select>
)

export default MultiSelect
