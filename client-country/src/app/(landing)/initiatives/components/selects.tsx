import { UnstyledSelect } from '@/components'
import { countries, argentinaProvinces, uruguayProvinces, colombiaProvinces } from '@/services/mock/locations.service'
import { opportunities } from '@/services/mock/opportunities.service'
import { themes } from '@/services/mock/themes.service'

interface Props {
  handleChange: (name: string, value: any) => void
  query: any
}

export default function Selects(props: Props) {
  const { handleChange, query } = props

  const activeProvinces = () => {
    switch (query.country) {
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
    <>
      <div className='flex flex-col md:flex-row gap-5'>
        <UnstyledSelect
          name='country'
          label='Pais de iniciativa'
          setSelected={(selected) => {
            handleChange('country', selected)
          }}
          names={countries}
          placeholder='Selecciona una opción'
        />
        {props.query.country && (
          <UnstyledSelect
            name='province'
            label='Elige una provincia/estado/departamento'
            setSelected={(selected) => {
              handleChange('province', selected)
            }}
            names={activeProvinces()}
            placeholder='Elige una provincia/estado/departamento'
          />
        )}
        <UnstyledSelect
          name='opportunities'
          label='Elige una Oportunidad'
          setSelected={(selected) => {
            handleChange('opportunities', selected)
          }}
          names={opportunities}
          placeholder='Elige una opportunities'
        />
        <UnstyledSelect
          name='themes'
          label='Elige un Tema'
          setSelected={(selected) => {
            handleChange('themes', selected)
          }}
          names={themes}
          placeholder='Elige un Tema'
        />
      </div>
    </>
  )
}
