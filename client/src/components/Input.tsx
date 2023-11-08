'use client'
import { Input as InputUI } from '@nextui-org/react'
import { RegisterOptions, UseFormRegister } from 'react-hook-form'

interface InputProps {
  type: string
  name: string
  label?: string
  wrapperIntupClassName?: string
  placeholder?: string
  className?: string
  handleChange?: (e: string) => void
  errorMessage?: string
  hookForm?: {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    register: UseFormRegister<any>
    validations: RegisterOptions
  }
  defaultValue?: string
  max?: number
  min?: number
}

const Input = ({
  type,
  name,
  label,
  handleChange = () => {},
  errorMessage = '',
  placeholder = '',
  className = '',
  hookForm,
  defaultValue = '',
  max,
  min
}: InputProps) => {
  const HookForm = hookForm?.register(name, hookForm?.validations)
  return (
    <InputUI
      {...HookForm}
      type={type}
      label={label}
      labelPlacement='outside'
      name={name}
      defaultValue={defaultValue}
      autoComplete='off'
      min={min}
      max={max}
      classNames={{
        inputWrapper:
          '!bg-white !text-black border border-solid border-gray-300 px-3 py-2 text-start rounded-2xl hover:!bg-gray-100 focus:!bg-white',
        label: 'text-sm font-light leading-[155%]  gap-1 font-normal !text-black',
        errorMessage: 'text-sm font-light leading-[155%] text-red-800',
        input: '!text-black placeholder:!text-gray-400 placeholder:font-light'
      }}
      className={className}
      // eslint-disable-next-line @typescript-eslint/no-misused-promises
      onChange={async (e: React.ChangeEvent<HTMLInputElement>) => await HookForm?.onChange(e)}
      onValueChange={(value: string) => handleChange(value)}
      placeholder={placeholder}
      isInvalid={errorMessage.length > 0}
      errorMessage={errorMessage}
    />
  )
}

export default Input
