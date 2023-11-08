'use client'
import {
  Control,
  FieldErrors,
  UseFormGetValues,
  UseFormHandleSubmit,
  UseFormRegister,
  UseFormSetValue
} from 'react-hook-form'
import { Button } from '@/components'
import GeneralInputs from './InitiativeInputs/GeneralInputs'
import LocationInputs from './InitiativeInputs/LocationInputs'
import DateTimeInputs from './InitiativeInputs/DateTimeInputs'
import MultimediaInputs from './InitiativeInputs/MultimediaInputs'
import { InitiativeFormData } from './form.interface'
import { InitiativeInterface } from '@/interfaces'

interface Props {
  errors: FieldErrors<InitiativeFormData>
  register: UseFormRegister<InitiativeFormData>
  getValues: UseFormGetValues<InitiativeFormData>
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  control: Control<any>
  setValue: UseFormSetValue<InitiativeFormData>
  isSubmitting: boolean
  handleSubmit: UseFormHandleSubmit<InitiativeFormData, undefined>
  onSubmit: (data: InitiativeFormData) => Promise<string | number | undefined>
  mode: 'create' | 'edit'
  initiative?: InitiativeInterface
}

const InitiativeDynamicForm = ({
  errors,
  register,
  getValues,
  control,
  setValue,
  isSubmitting,
  handleSubmit,
  onSubmit,
  mode,
  initiative
}: Props) => (
  <form className='flex w-full flex-col gap-8' onSubmit={handleSubmit(onSubmit)}>
    <GeneralInputs
      errors={errors}
      register={register}
      control={control}
      setValue={setValue}
      mode={mode}
      initiative={initiative}
    />
    <LocationInputs
      errors={errors}
      register={register}
      control={control}
      setValue={setValue}
      mode={mode}
      initiative={initiative}
    />
    <DateTimeInputs errors={errors} register={register} getValues={getValues} mode={mode} initiative={initiative} />
    <MultimediaInputs errors={errors} register={register} />
    <Button
      type='submit'
      title={mode === 'create' ? 'Crear iniciativa' : 'Guardar iniciativa'}
      isLoading={isSubmitting}
    />
  </form>
)

export default InitiativeDynamicForm
