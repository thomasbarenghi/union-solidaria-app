'use client'
import { Button, FormInput } from '@/components'
import { useForm } from 'react-hook-form'

function ConsultForm() {
  const {
    register,
    formState: { errors },
    handleSubmit
  } = useForm({
    mode: 'onChange'
  })

  const onSubmit = async (data: any) => {
    console.log(data)
  }

  return (
    <form className='mx-auto grid max-w-screen-sm gap-y-5' onSubmit={handleSubmit(onSubmit)}>
      <FormInput
        type='text'
        placeholder='Nombre'
        name='name'
        label='Nombre'
        hookForm={{
          register,
          validations: {
            required: { value: true, message: 'Este campo es requerido' }
          }
        }}
        error={errors?.name?.message}
      />
      <FormInput
        type='email'
        name='email'
        label='Email'
        placeholder='Email'
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
      <FormInput
        type='textarea'
        placeholder='Escribe tu consulta...'
        name='consultation'
        label='Consulta'
        hookForm={{
          register,
          validations: {
            required: { value: true, message: 'Este campo es requerido' }
          }
        }}
        error={errors?.consultation?.message}
      />
      <Button variant='primary' align='center'>
        Enviar
      </Button>
    </form>
  )
}

export default ConsultForm
