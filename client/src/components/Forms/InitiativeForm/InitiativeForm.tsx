'use client'
import { Button } from '@/components'
import { InitiativeFormData, type InitiativeInterface } from '@/interfaces'
import { useForm } from 'react-hook-form'
import DateTimeInputs from './InitiativeInputs/DateTimeInputs'
import GeneralInputs from './InitiativeInputs/GeneralInputs'
import LocationInputs from './InitiativeInputs/LocationInputs'
import MultimediaInputs from './InitiativeInputs/MultimediaInputs'

interface Props {
  mode: 'create' | 'edit'
  onSubmit: (data: InitiativeFormData) => Promise<string | number | undefined>
  defaultValues?: any
  initiative?: InitiativeInterface
}

const InitiativeDynamicForm = (props: Props) => {
  const { defaultValues, mode, initiative, onSubmit } = props

  const {
    register,
    formState: { errors, isSubmitting },
    handleSubmit,
    control,
    setValue,
    getValues,
    watch,
    trigger
  } = useForm<InitiativeFormData>({
    mode: 'onChange',
    ...defaultValues
  })

  return (
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
      <MultimediaInputs watch={watch} trigger={trigger} setValue={setValue} errors={errors} register={register} />
      <Button
        type='submit'
        title={mode === 'create' ? 'Crear iniciativa' : 'Guardar iniciativa'}
        isLoading={isSubmitting}
      />
    </form>
  )
}

export default InitiativeDynamicForm
