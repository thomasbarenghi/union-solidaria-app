import { Input, MultiSelect, Textarea } from '@/components'
import { Control, Controller, UseFormRegister, UseFormSetValue } from 'react-hook-form'
import { opportunities } from '@/services/mock/opportunities.service'
import { themes } from '@/services/mock/themes.service'

interface GeneralInfoProps {
  errors: any
  register: UseFormRegister<any>
  control: Control<any>
  setValue: UseFormSetValue<any>
}

const GeneralInfo = ({ errors, register, control, setValue }: GeneralInfoProps) => (
  <div className='flex w-full flex-col gap-4'>
    <div className='flex flex-col gap-2'>
      <h2 className='subtitulo'>Información general</h2>
      <hr />
    </div>
    <div className='flex grid-cols-2 flex-col gap-4 lg:grid'>
      <Input
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
        errorMessage={errors?.title?.message}
      />
      <Textarea
        name='description'
        rows={1}
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
        errorMessage={errors?.description?.message}
      />
      <Input
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
        errorMessage={errors?.deadLine?.message}
      />
      <Controller
        name='opportunities'
        control={control}
        rules={{
          required: { value: true, message: 'Este campo es requerido' },
          validate: (value) => {
            const values = value.split(',')
            if (values.length < 2) return 'Debe contener al menos dos oportunidades'
            return true
          }
        }}
        render={({ field }) => (
          <MultiSelect
            names={opportunities.slice(1)}
            name='opportunities'
            field={field}
            setSelected={(selected) => {
              setValue('opportunities', selected)
              console.log('selected', selected)
            }}
            label='Oportunidades'
            errorMessage={errors?.opportunities?.message}
          />
        )}
      />
      <Controller
        name='themes'
        control={control}
        rules={{
          required: { value: true, message: 'Este campo es requerido' },
          validate: (value) => {
            const values = value.split(',')
            if (values.length < 2) return 'Debe contener al menos dos tematicas'
            return true
          }
        }}
        render={({ field }) => (
          <MultiSelect
            field={field}
            name='themes'
            names={themes.slice(1)}
            setSelected={(selected) => setValue('themes', selected)}
            label='Tematicas'
            errorMessage={errors?.themes?.message}
          />
        )}
      />
    </div>
  </div>
)

export default GeneralInfo
