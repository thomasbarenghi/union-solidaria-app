import { FieldErrors, UseFormGetValues, UseFormRegister } from 'react-hook-form'
import { Input, TextElement } from '@/components'
import { extraInfoPattern, hour12Pattern } from '@/utils/constants/pattern.const'
import { InitiativeFormData, InitiativeInterface } from '@/interfaces'

interface DateTimeProps {
  errors: FieldErrors<InitiativeFormData>
  register: UseFormRegister<InitiativeFormData>
  getValues: UseFormGetValues<InitiativeFormData>
  mode: 'create' | 'edit'
  initiative?: InitiativeInterface
}

const DateTimeInputs = ({ errors, register, getValues, mode, initiative }: DateTimeProps) => (
  <div className='flex w-full flex-col gap-4'>
    <div className='flex flex-col gap-2'>
      <TextElement type='subtitle' as='h2'>
        Fecha y hora
      </TextElement>
      <hr />
    </div>
    <div className='flex grid-cols-2 flex-col gap-4 lg:grid'>
      <Input
        type='date'
        name='startDate'
        label='Fecha de inicio'
        placeholder='Fecha de inicio'
        defaultValue={
          mode === 'edit' && initiative?.startDate ? new Date(initiative?.startDate)?.toISOString()?.substr(0, 10) : ''
        }
        hookForm={{
          register,
          validations: {
            required: { value: true, message: 'Este campo es requerido' },
            validate: (value: string) => {
              const deadline = new Date(getValues()?.deadLine).getTime()
              const date = new Date(value)
              const currentDate = new Date()
              if (date < currentDate) {
                return 'La fecha no puede ser anterior a la actual'
              }

              if (deadline > date.getTime()) {
                return 'La fecha de inicio no puede ser antes a la fecha limite de inscripcion'
              }

              return true
            }
          }
        }}
        errorMessage={errors?.startDate?.message}
      />
      <Input
        type='date'
        name='endDate'
        label='Fecha de finalizacion'
        defaultValue={
          mode === 'edit' && initiative?.endDate ? new Date(initiative?.endDate)?.toISOString()?.substr(0, 10) : ''
        }
        placeholder='Fecha de finalizacion'
        hookForm={{
          register,
          validations: {
            required: { value: true, message: 'Este campo es requerido' },
            validate: (value: string) => {
              const startDate = new Date(getValues()?.startDate).getTime()
              const date = new Date(value)
              const currentDate = new Date()
              if (date < currentDate) {
                return 'La fecha no puede ser anterior a la actual'
              }

              if (startDate > date.getTime()) {
                return 'La fecha de finalizacion no puede ser antes a la fecha de inicio'
              }

              return true
            }
          }
        }}
        errorMessage={errors?.endDate?.message}
      />
      <Input
        type='text'
        name='startHour'
        label='Hora de inicio'
        defaultValue={mode === 'edit' ? initiative?.startHour : ''}
        placeholder='Hora de inicio'
        hookForm={{
          register,
          validations: {
            pattern: {
              value: hour12Pattern.value,
              message: hour12Pattern.message
            },
            required: { value: true, message: 'Este campo es requerido' }
          }
        }}
        errorMessage={errors?.startHour?.message}
      />
      <Input
        type='text'
        name='endHour'
        defaultValue={mode === 'edit' ? initiative?.endHour : ''}
        label='Hora de finalizacion'
        placeholder='Hora de finalizacion'
        hookForm={{
          register,
          validations: {
            pattern: {
              value: hour12Pattern.value,
              message: hour12Pattern.message
            },
            required: { value: true, message: 'Este campo es requerido' }
          }
        }}
        errorMessage={errors?.endHour?.message}
      />
      <Input
        type='text'
        name='extraInfo'
        label='Informacion Extra'
        defaultValue={mode === 'edit' ? initiative?.extraInfo : ''}
        placeholder='Informacion Extra'
        hookForm={{
          register,
          validations: {
            pattern: {
              value: extraInfoPattern.value,
              message: extraInfoPattern.message
            },
            required: { value: true, message: 'Este campo es requerido' }
          }
        }}
        errorMessage={errors?.extraInfo?.message}
      />
    </div>
  </div>
)

export default DateTimeInputs
