import { FormInput, Heading } from '@/components'
import { FormProps } from './form'
import { UseFormRegister } from 'react-hook-form'

type DateTimeProps = {
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  formValues: FormProps
  errors: any
  register: UseFormRegister<any>
}

export default function DateTime({ handleChange, formValues, errors, register }: DateTimeProps) {
  return (
    <div className='flex w-full flex-col gap-4'>
      <div className='flex flex-col gap-2'>
        <Heading as='h2'>Fecha y hora</Heading>
        <hr />
      </div>
      <div className='flex grid-cols-2 flex-col gap-4 lg:grid'>
        <FormInput
          type='date'
          name='startDate'
          label='Fecha de inicio'
          placeholder='Fecha de inicio'
          required={false}
          value={formValues.startDate}
          onChange={handleChange}
          hookForm={{
            register: register,
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
          error={errors?.startDate?.message}
        />
        <FormInput
          type='date'
          name='endDate'
          label='Fecha de finalizacion'
          placeholder='Fecha de finalizacion'
          required={false}
          value={formValues.endDate}
          onChange={handleChange}
          hookForm={{
            register: register,
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
          error={errors?.endDate?.message}
        />
        <FormInput
          type='text'
          name='startHour'
          label='Hora de inicio'
          placeholder='Hora de inicio'
          required={false}
          value={formValues.startHour}
          onChange={handleChange}
          hookForm={{
            register: register,
            validations: {
              pattern: {
                value: /^(1[0-2]|0?[1-9]):[0-5][0-9] (AM|PM)$/,
                message: 'La hora debe ser en formato 12 horas, ejemplo: 10:30 AM'
              },
              required: { value: true, message: 'Este campo es requerido' }
            }
          }}
          error={errors?.startHour?.message}
        />
        <FormInput
          type='text'
          name='endHour'
          label='Hora de finalizacion'
          placeholder='Hora de finalizacion'
          required={false}
          value={formValues.endHour}
          onChange={handleChange}
          hookForm={{
            register: register,
            validations: {
              pattern: {
                value: /^(1[0-2]|0?[1-9]):[0-5][0-9] (AM|PM)$/,
                message: 'La hora debe ser en formato 12 horas, ejemplo: 10:30 AM'
              },
              required: { value: true, message: 'Este campo es requerido' }
            }
          }}
          error={errors?.endHour?.message}
        />
        <FormInput
          type='text'
          name='extraInfo'
          label='Informacion Extra'
          placeholder='Informacion Extra'
          required={false}
          value={formValues.extraInfo}
          onChange={handleChange}
          hookForm={{
            register: register,
            validations: {
              maxLength: { value: 80, message: 'Maximo 80 caracteres' },
              minLength: { value: 5, message: 'Minimo 5 caracteres' },
              required: { value: true, message: 'Este campo es requerido' }
            }
          }}
          error={errors?.extraInfo?.message}
        />
      </div>
    </div>
  )
}
