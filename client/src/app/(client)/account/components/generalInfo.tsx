import { Input } from '@/components'
import { UseFormRegister } from 'react-hook-form'

interface GeneralInfoProps {
  errors: any
  register: UseFormRegister<any>
  currentUser: any
}

const GeneralInfo = ({ errors, register, currentUser }: GeneralInfoProps) => (
  <div className='flex w-full flex-col gap-4'>
    <div className='flex flex-col gap-2'>
      <h1 className='subtitulo'>Información general</h1>
      <hr />
    </div>
    <div className='flex grid-cols-2 flex-col gap-4 lg:grid'>
      <Input
        type='text'
        name='firstName'
        defaultValue={currentUser?.firstName}
        label='Nombre'
        placeholder='Nombre'
        hookForm={{
          register,
          validations: {
            maxLength: { value: 60, message: 'Maximo 60 caracteres' },
            minLength: { value: 5, message: 'Minimo 5 caracteres' },
            required: { value: true, message: 'Este campo es requerido' }
          }
        }}
        error={errors?.firstName?.message}
      />
      <Input
        type='text'
        name='lastName'
        label='Apellido'
        defaultValue={currentUser?.lastName}
        placeholder='Apellido'
        hookForm={{
          register,
          validations: {
            maxLength: { value: 60, message: 'Maximo 60 caracteres' },
            minLength: { value: 5, message: 'Minimo 5 caracteres' },
            required: { value: true, message: 'Este campo es requerido' }
          }
        }}
        error={errors?.lastName?.message}
      />
      <Input
        type='email'
        name='email'
        label='Email'
        placeholder='Email'
        defaultValue={currentUser?.email}
        hookForm={{
          register,
          validations: {
            pattern: {
              value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
              message: 'Debe ser un email valido'
            },
            required: { value: true, message: 'Este campo es requerido' }
          }
        }}
        error={errors?.email?.message}
      />
      <Input
        type='text'
        name='username'
        label='Nombre de usuario'
        defaultValue={currentUser?.username}
        placeholder='Nombre de usuario'
        hookForm={{
          register,
          validations: {
            pattern: {
              value: /^[a-zA-Z0-9 ]{5,30}$/,
              message: 'Debe ser de 5 a 30 caracteres, solo numeros y letras'
            },
            required: { value: true, message: 'Este campo es requerido' }
          }
        }}
        error={errors?.username?.message}
      />
    </div>
  </div>
)

export default GeneralInfo
