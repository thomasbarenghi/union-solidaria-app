import { FormInput, Heading, MultipleSelectCheckmarks } from '@/components'
import { UseFormRegister } from 'react-hook-form'

interface GeneralInfoProps {
  setLanguages: (languages: string[]) => void
  languages: string[]
  setThemes: (themes: string[]) => void
  themes: string[]
  setOpportunities: (opportunities: string[]) => void
  opportunities: string[]
  categories: string[]
  setCategories: (categories: string[]) => void
  errors: any
  register: UseFormRegister<any>
}

export default function GeneralInfo({
  setLanguages,
  setThemes,
  setOpportunities,
  languages,
  themes,
  opportunities,
  categories,
  setCategories,
  errors,
  register
}: GeneralInfoProps) {
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
          error={errors?.deadLine?.message}
        />
        <MultipleSelectCheckmarks
          names={['Categorias 1', 'Categorias 2', 'Categorias 3']}
          placeholder='Categorias'
          setSelected={setCategories}
          selectedValue={categories}
          label='Categorias'
        />
        <MultipleSelectCheckmarks
          names={['Oportundad 1', 'Oportundad 2', 'Oportundad 3']}
          placeholder='Oportunidades'
          setSelected={setOpportunities}
          selectedValue={opportunities}
          label='Oportunidades'
        />
        <MultipleSelectCheckmarks
          names={['Tematica 1', 'Tematica 2', 'Tematica 3']}
          placeholder='Tematicas'
          setSelected={setThemes}
          selectedValue={themes}
          label='Tematicas'
        />
        <MultipleSelectCheckmarks
          names={['Idioma 1', 'Idioma 2', 'Idioma 3']}
          placeholder='Idiomas'
          setSelected={setLanguages}
          selectedValue={languages}
          label='Idiomas'
        />
      </div>
    </div>
  )
}
