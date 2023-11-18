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
  isDisabled?: boolean
  isClearable?: boolean
  onClear?: () => void
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

const Input = (props: InputProps) => {
  const {
    handleChange = () => {},
    errorMessage = '',
    placeholder = '',
    className = '',
    defaultValue = '',
    ...inputProps
  } = props

  const HookForm = inputProps.hookForm?.register(inputProps.name, inputProps.hookForm?.validations)
  return (
    <InputUI
      {...HookForm}
      {...inputProps}
      labelPlacement='outside'
      defaultValue={defaultValue}
      autoComplete='off'
      classNames={{
        inputWrapper:
          '!bg-white !text-black border border-solid border-gray-300 px-3 py-2 text-start rounded-2xl hover:!bg-gray-100 focus:!bg-white',
        label: 'text-sm font-light leading-[155%]  gap-1 font-normal !text-black',
        errorMessage: 'text-sm font-light leading-[155%] text-red-800',
        input: '!text-black placeholder:!text-gray-400 placeholder:font-light',
        base: 'h-[60px]'
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
