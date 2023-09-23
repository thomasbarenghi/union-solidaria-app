import { Input, SimpleSelect } from '@/components'
import { Control, Controller, UseFormRegister, UseFormSetValue } from 'react-hook-form'
import { countries, argentinaProvinces, uruguayProvinces, colombiaProvinces } from '@/services/mock/locations.service'
import { useState } from 'react'

interface LocationInfoProps {
  errors: any
  register: UseFormRegister<any>
  control: Control<any>
  setValue: UseFormSetValue<any>
}

const LocationInfo = ({ errors, register, control, setValue }: LocationInfoProps) => {
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
        <h2 className='subtitulo'>Ubicacion</h2>
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
              label='Elige un pais'
              setSelected={(selected) => {
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
          name='adress'
          label='Direccion de encuentro'
          placeholder='Direccion de encuentro'
          hookForm={{
            register,
            validations: {
              pattern: {
                value: /^[a-zA-Z0-9 ]{5,80}$/,
                message: 'Debe ser de 5 a 80 caracteres, solo numeros y letras'
              },
              required: { value: true, message: 'Este campo es requerido' }
            }
          }}
          errorMessage={errors?.adress?.message}
        />
      </div>
    </div>
  )
}

export default LocationInfo
