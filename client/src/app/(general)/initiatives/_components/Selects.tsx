import { SimpleSelect } from '@/components'
import { countries, argentinaProvinces, uruguayProvinces, colombiaProvinces } from '@/services/mock/locations.service'
import { opportunities } from '@/services/mock/opportunities.service'
import { themes } from '@/services/mock/themes.service'

interface Props {
  handleChange: (name: string, value: string) => void
  query: Record<string, string>
}

const Selects = (props: Props) => {
  const { handleChange, query } = props

  const activeProvinces = () => {
    switch (query.country) {
      case 'Argentina':
        return argentinaProvinces
      case 'Uruguay':
        return uruguayProvinces
      case 'Colombia':
        return colombiaProvinces
      default:
        return []
    }
  }

  return (
    <div className='flex min-w-[200px] flex-row gap-3 md:flex-col '>
      <SimpleSelect
        name='country'
        label='Pais de iniciativa'
        selectedValue={[query.country]}
        setSelected={(selected) => {
          handleChange('country', selected)
        }}
        names={countries}
        placeholder='Selecciona una opción'
      />
      {props.query.country.length > 0 && (
        <SimpleSelect
          name='province'
          label='Elige el estado/provincia'
          selectedValue={[query.province]}
          setSelected={(selected) => {
            handleChange('province', selected)
          }}
          names={activeProvinces()}
          placeholder='Elige una provincia/estado/departamento'
        />
      )}
      <SimpleSelect
        name='opportunities'
        label='Elige una Oportunidad'
        selectedValue={[query.opportunities]}
        setSelected={(selected) => {
          handleChange('opportunities', selected)
        }}
        names={opportunities}
        placeholder='Elige una opportunities'
      />
      <SimpleSelect
        name='themes'
        label='Elige un Tema'
        selectedValue={[query.themes]}
        setSelected={(selected) => {
          handleChange('themes', selected)
        }}
        names={themes}
        placeholder='Elige un Tema'
      />
    </div>
  )
}

export default Selects
