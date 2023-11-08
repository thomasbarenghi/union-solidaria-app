import { type FormValues } from '@/app/(auth)/register/_components/Form'
import { type FieldErrors, type UseFormWatch } from 'react-hook-form'

export const nextIsDisabled = (step: number, watch: UseFormWatch<FormValues>, errors: FieldErrors<FormValues>) => {
  const hasErrors = Object.keys(errors).length !== 0
  let isDisabled = false

  if (step === 0) {
    isDisabled = !watch('firstName') || !watch('lastName') || !watch('birthday') || hasErrors
  }
  if (step === 1) {
    isDisabled = !watch('email') || !watch('phone') || !watch('username') || hasErrors
  }
  if (step === 2) {
    isDisabled = !watch('password') || !watch('repeatPassword') || hasErrors
  }
  if (step === 3) {
    isDisabled = watch('role') === 'organization' ? hasErrors : false
  }

  return isDisabled
}
