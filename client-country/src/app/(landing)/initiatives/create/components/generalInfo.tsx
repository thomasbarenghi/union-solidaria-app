import { FormInput, Heading, MultipleSelectCheckmarks } from '@/components'
import { Control, Controller, UseFormRegister, UseFormSetValue } from 'react-hook-form'
import { opportunities } from '@/services/mock/opportunities.service'
import { themes } from '@/services/mock/themes.service'

interface GeneralInfoProps {
  errors: any
  register: UseFormRegister<any>
  control: Control<any>
  setValue: UseFormSetValue<any>
}

export default function GeneralInfo({ errors, register, control, setValue }: GeneralInfoProps) {
  return (
    <div className='flex w-full flex-col gap-4'>
      <div className='flex flex-col gap-2'>
        <Heading as='h2'>Información general</Heading>
        <hr />
      </div>
      <div className='flex grid-cols-2 flex-col gap-4 lg:grid'>
        <FormInput
          type='text'
          name='title'
          label='Titulo de la iniciativa'
          placeholder='Titulo de la iniciativa'
          hookForm={{
            register,
            validations: {
              maxLength: { value: 60, message: 'Maximo 60 caracteres' },
              minLength: { value: 5, message: 'Minimo 5 caracteres' },
              required: { value: true, message: 'Este campo es requerido' }
            }
          }}
          error={errors?.title?.message}
        />
        <FormInput
          type='textarea'
          name='description'
          label='Descripcion de la iniciativa'
          placeholder='Descripcion de la iniciativa'
          hookForm={{
            register,
            validations: {
              maxLength: { value: 500, message: 'Maximo 500 caracteres' },
              minLength: { value: 50, message: 'Minimo 50 caracteres' },
              required: { value: true, message: 'Este campo es requerido' }
            }
          }}
          error={errors?.description?.message}
        />
        <FormInput
          type='date'
          name='deadLine'
          label='Fecha limite de inscripcion'
          placeholder='Fecha limite de inscripcion'
          hookForm={{
            register,
            validations: {
              required: { value: true, message: 'Este campo es requerido' },
              validate: (value) => {
                const date = new Date(value)
                const today = new Date()
                if (date < today) {
                  return 'La fecha no puede ser menor a la actual'
                }
                return true
              }
            }
          }}
          error={errors?.deadLine?.message}
        />
        <Controller
          name='opportunities'
          control={control}
          rules={{
            required: { value: true, message: 'Este campo es requerido' },
            validate: (value) => {
              if (value.length < 2) return 'Debe contener al menos dos oportunidades'
              return true
            }
          }}
          render={({ field }) => (
            <MultipleSelectCheckmarks
              names={opportunities.slice(1)}
              placeholder='Oportunidades'
              name='opportunities'
              field={field}
              setSelected={(selected) => setValue('opportunities', selected)}
              label='Oportunidades'
              error={errors?.opportunities?.message}
            />
          )}
        />
        <Controller
          name='themes'
          control={control}
          rules={{
            required: { value: true, message: 'Este campo es requerido' },
            validate: (value) => {
              if (value.length < 2) return 'Debe contener al menos dos tematicas'
              return true
            }
          }}
          render={({ field }) => (
            <MultipleSelectCheckmarks
              field={field}
              name='themes'
              names={themes.slice(1)}
              placeholder='Tematicas'
              setSelected={(selected) => setValue('themes', selected)}
              label='Tematicas'
              error={errors?.themes?.message}
            />
          )}
        />
      </div>
    </div>
  )
}
