/* eslint-disable react/jsx-indent */
import { ArrowCircleIcon, FormInput, Submit, VisibilityOffIcon, VisibilityOnIcon } from '@/components'

const dataInputVoluntary = [
  {
    type: 'text',
    placeHolder: 'Nombre',
    name: 'name',
    key: 0
  },
  {
    type: 'text',
    placeHolder: 'Apellido',
    name: 'surname',
    key: 1
  },
  {
    type: 'date',
    placeHolder: 'Fecha de nacimiento',
    name: 'date of birth',
    key: 2
  },
  {
    type: 'text',
    placeHolder: 'Ubicación',
    icon_1: <ArrowCircleIcon />,
    name: 'ubication',
    key: 3
  },
  {
    type: 'mail',
    placeHolder: 'Email',
    name: 'email',
    key: 4
  },
  {
    type: 'password',
    placeHolder: 'Contraseña',
    name: 'password',
    icon_1: <VisibilityOffIcon />,
    icon_2: <VisibilityOnIcon />,
    key: 5
  },
  {
    type: 'password',
    placeHolder: 'Repetir contraseña',
    name: 'repeat password',
    icon_1: <VisibilityOffIcon />,
    icon_2: <VisibilityOnIcon />,
    key: 6
  }
]

const dataOrgnizationInput = [
  {
    type: 'text',
    placeHolder: 'Nombre',
    name: 'name',
    key: 0
  },
  {
    type: 'text',
    placeHolder: 'Categoria',
    name: 'category',
    key: 1
  },
  {
    type: 'text',
    placeHolder: 'ubicación',
    name: 'ubication',
    icon_1: <ArrowCircleIcon />,
    key: 2
  },
  {
    type: 'email',
    placeHolder: 'Email',
    name: 'email',
    key: 3
  },
  {
    type: 'password',
    placeHolder: 'Contraseña',
    name: 'password',
    icon_1: <VisibilityOffIcon />,
    icon_2: <VisibilityOnIcon />,
    key: 5
  },
  {
    type: 'password',
    placeHolder: 'Repetir contraseña',
    name: 'repeat password',
    icon_1: <VisibilityOffIcon />,
    icon_2: <VisibilityOnIcon />,
    key: 6
  }
]

function RegisterPage() {
  const selectRegister: 'organization' | 'voluntary' = 'voluntary'

  return (
    <form className=' mx-auto my-0 grid max-w-lg grid-cols-1 justify-items-center gap-3 p-6 md:justify-items-start md:py-20'>
      <h1 className='col-span-full mb-5 self-start justify-self-start text-2xl font-bold text-pink-500 md:justify-self-center'>
        ¡Registrate!
      </h1>
      {selectRegister === 'voluntary'
        ? dataInputVoluntary.map((data) => (
            <FormInput
              name={data.name}
              key={data.key}
              placeholder={data.placeHolder}
              type={data.type}
              icon_1={data.icon_1}
              icon_2={data.icon_2}
            />
        ))
        : selectRegister === 'organization' &&
          dataOrgnizationInput.map((data) => (
            <FormInput
              name={data.name}
              key={data.key}
              placeholder={data.placeHolder}
              type={data.type}
              icon_1={data.icon_1}
              icon_2={data.icon_2}
            />
          ))}
      <Submit content='Crear cuenta' />
    </form>
  )
}

export default RegisterPage
