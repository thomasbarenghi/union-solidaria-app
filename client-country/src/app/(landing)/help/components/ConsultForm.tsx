import { Button, FormInput } from '@/components'

function ConsultForm() {
  return (
    <form className='grid gap-y-5'>
      <FormInput type='text' placeholder='Nombre' name='name' label='Nombre' />
      <FormInput type='email' placeholder='Email' name='surname' label='Email' />
      <FormInput type='textarea' placeholder='Escribe tu consulta...' name='consultation' label='Consulta' />
      <Button align='center'>Enviar</Button>
    </form>
  )
}

export default ConsultForm
