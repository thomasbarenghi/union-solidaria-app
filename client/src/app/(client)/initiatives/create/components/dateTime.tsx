import { Input } from '@/components'
import { UseFormRegister } from 'react-hook-form'

interface DateTimeProps {
  errors: any
  register: UseFormRegister<any>
}

const DateTime = ({ errors, register }: DateTimeProps) => (
  <div className='flex w-full flex-col gap-4'>
    <div className='flex flex-col gap-2'>
      <h2 className='subtitulo'>Fecha y hora</h2>
      <hr />
    </div>
    <div className='flex grid-cols-2 flex-col gap-4 lg:grid'>
      <Input
        type='date'
        name='startDate'
        label='Fecha de inicio'
        placeholder='Fecha de inicio'
        hookForm={{
          register,
          validations: {
            required: { value: true, message: 'Este campo es requerido' },
            validate: (value: string) => {
              const date = new Date(value)
              const currentDate = new Date()
              if (date < currentDate) {
                return 'La fecha no puede ser anterior a la actual'
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
        placeholder='Fecha de finalizacion'
        hookForm={{
          register,
          validations: {
            required: { value: true, message: 'Este campo es requerido' },
            validate: (value: string) => {
              const date = new Date(value)
              const currentDate = new Date()
              if (date < currentDate) {
                return 'La fecha no puede ser anterior a la actual'
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
        placeholder='Hora de inicio'
        hookForm={{
          register,
          validations: {
            pattern: {
              value: /^(1[0-2]|0?[1-9]):[0-5][0-9] (AM|PM)$/,
              message: 'La hora debe ser en formato 12 horas, ejemplo: 10:30 AM'
            },
            required: { value: true, message: 'Este campo es requerido' }
          }
        }}
        errorMessage={errors?.startHour?.message}
      />
      <Input
        type='text'
        name='endHour'
        label='Hora de finalizacion'
        placeholder='Hora de finalizacion'
        hookForm={{
          register,
          validations: {
            pattern: {
              value: /^(1[0-2]|0?[1-9]):[0-5][0-9] (AM|PM)$/,
              message: 'La hora debe ser en formato 12 horas, ejemplo: 10:30 AM'
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
        placeholder='Informacion Extra'
        hookForm={{
          register,
          validations: {
            maxLength: { value: 80, message: 'Maximo 80 caracteres' },
            minLength: { value: 5, message: 'Minimo 5 caracteres' },
            required: { value: true, message: 'Este campo es requerido' }
          }
        }}
        errorMessage={errors?.extraInfo?.message}
      />
    </div>
  </div>
)

export default DateTime
