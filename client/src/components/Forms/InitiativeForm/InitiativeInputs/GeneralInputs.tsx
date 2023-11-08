import { Control, Controller, FieldErrors, UseFormRegister, UseFormSetValue } from 'react-hook-form'
import { Input, MultiSelect, TextElement, Textarea } from '@/components'
import { opportunities } from '@/services/mock/opportunities.service'
import { themes } from '@/services/mock/themes.service'
import { descriptionPattern, titlePattern } from '@/utils/constants/pattern.const'
import { InitiativeFormData } from '../form.interface'
import { InitiativeInterface } from '@/interfaces'

interface GeneralInfoProps {
  errors: FieldErrors<InitiativeFormData>
  register: UseFormRegister<InitiativeFormData>
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  control: Control<any>
  setValue: UseFormSetValue<InitiativeFormData>
  mode: 'create' | 'edit'
  initiative?: InitiativeInterface
}

const GeneralInputs = ({ errors, register, control, setValue, mode, initiative }: GeneralInfoProps) => {
  console.log('initiative', initiative?.opportunities, initiative?.themes)
  return (
    <div className='flex w-full flex-col gap-4'>
      <div className='flex flex-col gap-2'>
        <TextElement type='subtitle' as='h2'>
          Información general
        </TextElement>
        <hr />
      </div>
      <div className='flex grid-cols-2 flex-col gap-4 lg:grid'>
        <Input
          type='text'
          name='title'
          label='Titulo de la iniciativa'
          placeholder='Titulo de la iniciativa'
          defaultValue={mode === 'edit' ? initiative?.title : ''}
          hookForm={{
            register,
            validations: {
              pattern: {
                value: titlePattern.value,
                message: titlePattern.message
              },
              required: { value: true, message: 'Este campo es requerido' }
            }
          }}
          errorMessage={errors?.title?.message}
        />
        <Textarea
          name='description'
          defaultValue={mode === 'edit' ? initiative?.description : ''}
          rows={1}
          label='Descripcion de la iniciativa'
          placeholder='Descripcion de la iniciativa'
          hookForm={{
            register,
            validations: {
              pattern: {
                value: descriptionPattern.value,
                message: descriptionPattern.message
              },
              required: { value: true, message: 'Este campo es requerido' }
            }
          }}
          errorMessage={errors?.description?.message}
        />
        <Input
          type='date'
          name='deadLine'
          defaultValue={
            mode === 'edit' && initiative?.deadLine ? new Date(initiative?.deadLine)?.toISOString()?.substr(0, 10) : ''
          }
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
              console.log('value opportunities', value)
              if (value.split(',').length < 2) return 'Debe contener al menos dos oportunidades'
              return true
            }
          }}
          render={({ field }) => (
            <MultiSelect
              names={opportunities.slice(1)}
              selectedValue={mode === 'edit' ? initiative?.opportunities[0].split(',') : []}
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
              if (value.split(',').length < 2) return 'Debe contener al menos dos tematicas'
              return true
            }
          }}
          render={({ field }) => (
            <MultiSelect
              field={field}
              selectedValue={mode === 'edit' ? initiative?.themes[0].split(',') : []}
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
}
export default GeneralInputs
