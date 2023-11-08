import { type FormValues } from '@/app/(auth)/register/_components/Form'
import { type FieldErrors, type UseFormWatch } from 'react-hook-form'

export const nextIsDisabled = (step: number, watch: UseFormWatch<FormValues>, errors: FieldErrors<FormValues>) => {
  const errorKeys = Object.keys(errors) as Array<keyof FormValues>
  let isDisabled: boolean
  let fieldsToWatch: Array<keyof FormValues> = []

  switch (step) {
    case 0:
      {
        fieldsToWatch = ['firstName', 'lastName', 'birthday']
        const hasErrors = errorKeys.some((key) => fieldsToWatch.includes(key))
        isDisabled = !watch(fieldsToWatch[0]) || !watch(fieldsToWatch[1]) || !watch(fieldsToWatch[2]) || hasErrors
      }
      break

    case 1:
      {
        fieldsToWatch = ['email', 'phone', 'username']
        const hasErrors = errorKeys.some((key) => fieldsToWatch.includes(key))
        isDisabled = !watch('email') || !watch('phone') || !watch('username') || hasErrors
      }
      break

    case 2:
      {
        fieldsToWatch = ['password', 'repeatPassword']
        const hasErrors = errorKeys.some((key) => fieldsToWatch.includes(key))
        isDisabled = !watch('password') || !watch('repeatPassword') || hasErrors
      }
      break

    case 3:
      if (watch('role') === 'organization') {
        fieldsToWatch = ['orgName']
        const hasErrors = errorKeys.some((key) => fieldsToWatch.includes(key)) || !watch(fieldsToWatch[0])
        isDisabled = hasErrors
      } else if (watch('role') === 'volunteer') {
        isDisabled = false
      } else {
        isDisabled = true
      }
      break

    default:
      isDisabled = false
      break
  }

  return isDisabled
}
