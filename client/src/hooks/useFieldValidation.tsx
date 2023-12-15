import { type FormValues } from '@/app/(auth)/register/_components/Form'
import Endpoints from '@/utils/constants/endpoints.const'
import { Spinner } from '@nextui-org/react'
import { debounce } from 'lodash'
import { Check, X } from 'lucide-react'
import { useCallback, useState, type ChangeEvent } from 'react'
import { type UseFormSetError } from 'react-hook-form'
import { toast } from 'sonner'

type ValidationState = Partial<Record<keyof FormValues, { isValidating: boolean; isValid: boolean; icon: JSX.Element }>>

export const useFieldValidation = (fields: Array<keyof FormValues>, setError: UseFormSetError<FormValues>) => {
  const initialState = Object.fromEntries(
    fields.map((field) => [field, { isValidating: false, isValid: false, icon: <div className='flex gap-4' /> }])
  )
  const validationEndpoints: Record<string, (str: string) => string> = {
    username: Endpoints.VALIDATE_USERNAME,
    email: Endpoints.VALIDATE_EMAIL
  }

  const [validation, setValidation] = useState<ValidationState>(initialState)

  const handleChange = async (e: ChangeEvent<HTMLInputElement>, field: keyof FormValues) => {
    if (e.target.value.length <= 1) {
      setValidation((prev) => ({
        ...prev,
        [field]: {
          isValidating: false,
          isValid: false,
          icon: (
            <div className='flex gap-4'>
              <X className='text-red-800' />
            </div>
          )
        }
      }))
      return
    }

    setValidation((prev) => ({
      ...prev,
      [field]: {
        isValidating: true,
        isValid: false,
        icon: (
          <div className='flex gap-4'>
            <Spinner size='sm' color='default' />
          </div>
        )
      }
    }))

    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_SERVER_URL ?? ''}${validationEndpoints[field](e.target.value)}`
      )
      if (res.status === 409) {
        setError(field, { type: 'custom', message: 'Nombre de usuario no disponible' })
        setValidation((prev) => ({
          ...prev,
          [field]: {
            isValidating: false,
            isValid: false,
            icon: (
              <div className='flex gap-4'>
                <X className='text-red-800' />
              </div>
            )
          }
        }))
      } else if (res.status === 200) {
        setValidation((prev) => ({
          ...prev,
          [field]: {
            isValidating: false,
            isValid: true,
            icon: (
              <div className='flex gap-4'>
                <Check className='text-green-800' />
              </div>
            )
          }
        }))
      } else if (res.status === 404) {
        setValidation((prev) => ({
          ...prev,
          [field]: {
            isValidating: false,
            isValid: false,
            icon: (
              <div className='flex gap-4'>
                <X className='text-red-800' />
              </div>
            )
          }
        }))
      }
    } catch (error) {
      console.log(error)
      toast.error('Error al validar la disponibildad del nombre de usuario')
      setError('username', { type: 'custom', message: 'Ocurrió un error inesperado' })
      setValidation((prev) => ({ ...prev, [field]: { isValidating: false, isValid: false } }))
    }
  }

  const debouncedHandleChange = useCallback(debounce(handleChange, 500), [])

  return { debouncedHandleChange, validation }
}
