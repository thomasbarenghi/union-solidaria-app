/* eslint-disable no-labels */
/* eslint-disable @typescript-eslint/strict-boolean-expressions */
'use client'

import { Select, SelectItem } from '@nextui-org/react'
import { ControllerRenderProps, FieldValues } from 'react-hook-form'

interface Props {
  names: Array<{ value: string; label: string }>
  placeholder: string
  setSelected: (data: string) => void
  selectedValue?: string
  label?: string
  labelClass?: string
  error?: string | any
  field?: ControllerRenderProps<FieldValues, any>
}

const SimpleSelect = ({ names, placeholder, selectedValue, label, labelClass = '', error, setSelected }: Props) => (
  <label className={`smalltext flex w-full min-w-0 flex-col gap-1 font-normal ${labelClass}`}>
    {label}
    <div className='relative'>
      <Select
        defaultSelectedKeys={selectedValue ? [selectedValue] : []}
        items={names}
        labelPlacement='outside'
        size='md'
        selectionMode='single'
        onSelectionChange={(selected) => setSelected(Array.from(selected)[0].toString())}
        placeholder='Selecciona una opción'
        className='w-full'
        classNames={{
          trigger: 'bg-white border border-solid border-gray-300 px-3 py-2 text-start rounded-2xl'
        }}
      >
        {(animal) => <SelectItem key={animal.value}>{animal.label}</SelectItem>}
      </Select>
      {error && <p className='gap-estilo4 smalltext ml-2 flex font-medium text-red-700 dark:text-red-800'>{error}</p>}
    </div>
  </label>
)

export default SimpleSelect
