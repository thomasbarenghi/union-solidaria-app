'use client'
import clsx from 'clsx'
import { useState } from 'react'
import { RegisterOptions, UseFormRegister } from 'react-hook-form'

interface InputProps {
  type: string
  name: string
  label?: string
  wrapperIntupClassName?: string
  placeholder: string
  className?: string
  labelClass?: string
  defaultValue?: string
  value?: string
  prefix?: string
  onChange?: (e: any) => void
  error?: string | any
  step?: string
  required?: boolean
  rows?: number
  autoComplete?: 'on' | 'off'
  hookForm?: {
    register: UseFormRegister<any>
    validations: RegisterOptions
    onChange?: any
  }
  icon1?: React.ReactNode
  icon2?: React.ReactNode
  setIconVisibility?: (e: boolean) => void
}

const FormInput = ({
  type,
  name,
  label,
  wrapperIntupClassName = '',
  placeholder,
  className = '',
  labelClass = '',
  defaultValue,
  value,
  prefix,
  onChange = () => {},
  error,
  step,
  required,
  rows,
  autoComplete = 'off',
  hookForm,
  icon1,
  icon2,
  setIconVisibility
}: InputProps) => {
  const [changeIcon, setChangeIcon] = useState<boolean>(false)

  const handleChange = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    setChangeIcon(!changeIcon)
    if (setIconVisibility != null) setIconVisibility(!changeIcon)
  }

  const styles = {
    wrapperInput: clsx('flex justify-between rounded-full border border-solid border-gray-300 px-4 py-3'),
    input: clsx('w-full min-w-0 border-none outline-none outline-0'),
    textArea: clsx('w-full min-w-0 rounded-3xl border border-solid border-gray-300 px-4 py-3'),
    error: clsx('gap-estilo4 smalltext ml-2 flex font-medium text-red-700 dark:text-red-800')
  }

  const hookFormProps = {
    ...hookForm?.register(name, hookForm.validations),
    onChange: async (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      await hookForm?.onChange(e)
      if (onChange != null) onChange(e)
    }
  }

  return (
    <label htmlFor={name} className={`smalltext flex w-full min-w-0 flex-col gap-1 font-normal ${labelClass}`}>
      {label}
      {type !== 'textarea' && type !== 'select' && type !== 'file' ? (
        <div className={`${wrapperIntupClassName} ${styles.wrapperInput}`}>
          <input
            {...hookFormProps}
            defaultValue={defaultValue}
            type={type}
            step={step}
            name={name}
            value={value}
            prefix={prefix}
            placeholder={placeholder}
            className={`${className} ${styles.input}`}
            style={{ borderWidth: '1px' }}
            required={required}
            autoComplete={autoComplete}
          />
          <button onClick={handleChange}>
            {icon1 != null && icon2 != null ? (changeIcon ? icon1 : icon2) : icon1}
          </button>
        </div>
      ) : type === 'file' ? (
        <div className={`${wrapperIntupClassName} ${styles.wrapperInput}`}>
          <input
            {...hookFormProps}
            type='file'
            name={name}
            className={`${className} ${styles.input}`}
            style={{ borderWidth: '1px' }}
            required={required}
          />
          <button onClick={handleChange}>
            {icon1 != null && icon2 != null ? (changeIcon ? icon1 : icon2) : icon1}
          </button>
        </div>
      ) : (
        <textarea
          {...hookFormProps}
          defaultValue={defaultValue}
          name={name}
          value={value}
          placeholder={placeholder}
          className={`${className}  ${styles.textArea}`}
          style={{ borderWidth: '1px' }}
          required={required}
          rows={rows ?? 1}
        />
      )}
      {error !== undefined && <p className={`${styles.error}`}>{error}</p>}
    </label>
  )
}

export default FormInput
