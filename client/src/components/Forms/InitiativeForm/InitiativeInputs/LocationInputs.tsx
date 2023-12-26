import { Control, Controller, FieldErrors, UseFormRegister, UseFormSetValue } from 'react-hook-form'
import { Input, SimpleSelect, TextElement } from '@/components'
import { countries, argentinaProvinces, uruguayProvinces, colombiaProvinces } from '@/services/mock/locations.service'
import { useState } from 'react'
import { addressPattern } from '@/utils/constants/pattern.const'
import { InitiativeFormData, InitiativeInterface } from '@/interfaces'

interface LocationInfoProps {
  errors: FieldErrors<InitiativeFormData>
  register: UseFormRegister<InitiativeFormData>
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  control: Control<any>
  setValue: UseFormSetValue<InitiativeFormData>
  mode: 'create' | 'edit'
  initiative?: InitiativeInterface
}

const LocationInputs = ({ errors, register, control, setValue, mode, initiative }: LocationInfoProps) => {
  const [country, setCountry] = useState<string>('Argentina')

  const activeProvinces = () => {
    switch (country) {
      case 'Argentina':
        return argentinaProvinces.slice(1)
      case 'Uruguay':
        return uruguayProvinces.slice(1)
      case 'Colombia':
        return colombiaProvinces.slice(1)
      default:
        return []
    }
  }

  return (
    <div className='flex w-full flex-col gap-4'>
      <div className='flex flex-col gap-2'>
        <TextElement type='subtitle' as='h2'>
          Ubicacion
        </TextElement>
        <hr />
      </div>
      <div className='flex grid-cols-2 flex-col gap-4 lg:grid'>
        <Controller
          name='country'
          control={control}
          rules={{ required: { value: true, message: 'Este campo es requerido' } }}
          render={({ field }) => (
            <SimpleSelect
              name='country'
              field={field}
              defaultSelectedKeys={mode === 'edit' ? [initiative?.country ?? ''] : ['']}
              label='Elige un pais'
              setSelected={(selected) => {
                console.log(selected)
                setValue('country', selected)
                setCountry(selected)
              }}
              names={countries.slice(1)}
              placeholder='Elige un pais'
              errorMessage={errors?.country?.message}
            />
          )}
        />
        <Controller
          name='province'
          control={control}
          rules={{ required: { value: true, message: 'Este campo es requerido' } }}
          render={({ field }) => (
            <SimpleSelect
              field={field}
              name='province'
              defaultSelectedKeys={mode === 'edit' ? [initiative?.province ?? ''] : ['']}
              label='Elige una provincia/estado/departamento'
              setSelected={(selected) => {
                setValue('province', selected)
              }}
              names={activeProvinces()}
              placeholder='Elige una provincia/estado/departamento'
              errorMessage={errors?.province?.message}
            />
          )}
        />
        <Input
          type='text'
          name='address'
          label='Direccion de encuentro'
          defaultValue={mode === 'edit' ? initiative?.address : ''}
          placeholder='Direccion de encuentro'
          hookForm={{
            register,
            validations: {
              pattern: {
                value: addressPattern.value,
                message: addressPattern.message
              },
              required: { value: true, message: 'Este campo es requerido' }
            }
          }}
          errorMessage={errors?.address?.message}
        />
      </div>
    </div>
  )
}

export default LocationInputs
