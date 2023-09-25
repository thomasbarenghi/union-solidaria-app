/* eslint-disable no-labels */
/* eslint-disable @typescript-eslint/strict-boolean-expressions */
'use client'

import { Select, SelectItem } from '@nextui-org/react'
import { ControllerRenderProps, FieldValues } from 'react-hook-form'

interface Props {
  names: Array<{ value: string, label: string }>
  name: string
  placeholder: string
  setSelected: (data: string) => void
  selectedValue?: string
  label?: string
  labelClass?: string
  errorMessage?: string
  field?: ControllerRenderProps<FieldValues, any>
}

const SimpleSelect = ({ names, name, selectedValue, label, errorMessage = '', setSelected, field }: Props) => (
  <Select
    {...field}
    defaultSelectedKeys={selectedValue ? [selectedValue] : []}
    items={names}
    label={label}
    labelPlacement='outside'
    size='md'
    name={name}
    selectionMode='single'
    onSelectionChange={(selected) => setSelected(Array.from(selected)[0].toString())}
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

export default SimpleSelect
