'use client'
import clsx from 'clsx'
import { useState } from 'react'
import { RegisterOptions, UseFormRegister } from 'react-hook-form'

type InputProps = {
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
  onChange?: any
  error?: string | any
  step?: string
  required?: boolean
  rows?: number
  selectOptions?: { value: string; label: string }[]
  handleSelectChange?: (e: any) => void
  selectSelected?: { value: string; label: string }
  autoComplete?: 'on' | 'off'
  hookForm?: {
    register: UseFormRegister<any>
    validations: RegisterOptions
  }
  icon_1?: React.ReactNode
  icon_2?: React.ReactNode
}

export default function FormInput(props: InputProps) {
  const [changeIcon, setChangeIcon] = useState<boolean>(false)
  const handleChange = () => {
    event?.preventDefault()
    setChangeIcon(!changeIcon)
  }
  const styles = {
    wrapperInput: clsx('flex justify-between rounded-md border border-solid border-gray-600 px-4 py-3'),
    input: clsx('w-full min-w-0 border-none outline-none outline-0'),
    textArea: clsx('w-full min-w-0 outline-none outline-0')
  }

  const hookForm = props?.hookForm?.register(props.name, props?.hookForm?.validations || {})

  return (
    <>
      <label
        htmlFor={props.name}
        className={`smalltext flex w-full min-w-0 flex-col gap-1 font-normal ${props.labelClass}`}
      >
        {props.label}
        {props.type !== 'textarea' && props.type !== 'select' && props.type !== 'file' ? (
          <div className={`${props.wrapperIntupClassName} ${styles.wrapperInput}`}>
            <input
              {...hookForm}
              defaultValue={props.defaultValue}
              type={props.type}
              step={props.step}
              name={props.name}
              value={props.value}
              prefix={props.prefix}
              onChange={(e: any) => {
                hookForm?.onChange(e)
                if (props.onChange) props.onChange(e)
              }}
              placeholder={props.placeholder}
              className={`${props.className} ${styles.input}`}
              style={{ borderWidth: '1px' }}
              required={props.required}
              autoComplete={props.autoComplete || 'off'}
            />
            <button onClick={handleChange}>
              {props.icon_1 && props.icon_2 ? (changeIcon === false ? props.icon_2 : props.icon_1) : props.icon_1}
            </button>
          </div>
        ) : props.type === 'file' ? (
          <div className={`${props.wrapperIntupClassName} ${styles.wrapperInput}`}>
            <input
              {...hookForm}
              type='file'
              name={props.name}
              onChange={(e: any) => {
                hookForm?.onChange(e)
                if (props.onChange) props.onChange(e)
              }}
              className={`${props.className} ${styles.input}`}
              style={{ borderWidth: '1px' }}
              required={props.required}
            />
            <button onClick={handleChange}>
              {props.icon_1 && props.icon_2 ? (changeIcon === false ? props.icon_2 : props.icon_1) : props.icon_1}
            </button>
          </div>
        ) : (
          <textarea
            {...hookForm}
            defaultValue={props.defaultValue}
            name={props.name}
            value={props.value}
            onChange={(e: any) => {
              hookForm?.onChange(e)
              if (props.onChange) props.onChange(e)
            }}
            placeholder={props.placeholder}
            className={`${props.className} rounded-md border border-solid border-gray-600 px-4 py-3 ${styles.textArea}`}
            style={{ borderWidth: '1px' }}
            required={props.required}
            rows={props.rows || 1}
          />
        )}
        {props.error && (
          <p className='gap-estilo4 smalltext ml-2 flex font-medium text-red-700 dark:text-red-800'>{props.error}</p>
        )}
      </label>
    </>
  )
}
