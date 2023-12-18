'use client'
import { Select, SelectItem } from '@nextui-org/react'
import { ComponentProps } from 'react'
import { ControllerRenderProps, FieldValues } from 'react-hook-form'

interface CustomProps {
  names: Array<{ value: string; label: string }>
  name: string
  setSelected: (data: string) => void
  errorMessage?: string
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  field?: ControllerRenderProps<FieldValues, any>
}

type DefaultProps = Omit<ComponentProps<typeof Select>, 'children'>
type ExtendedProps = DefaultProps & CustomProps

const SimpleSelect = ({ ...props }: ExtendedProps) => (
  <Select
    {...props.field}
    selectedKeys={props.defaultSelectedKeys}
    items={props.names}
    label={props.label}
    labelPlacement='outside'
    size='md'
    name={props.name}
    selectionMode='single'
    onChange={(e) => {
      if (!e.target.value) return
      props.setSelected(e.target.value)
    }}
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
    errorMessage={props.errorMessage}
  >
    {(obj) => <SelectItem key={obj.value}>{obj.label}</SelectItem>}
  </Select>
)

export default SimpleSelect
