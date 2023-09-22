import { Input, Textarea } from '@/components'

const Contact = () => (
  <section className='flex w-full flex-col gap-6'>
    <div className='flex flex-col gap-1'>
      <h2 className='text-2xl font-bold'>¿No encontraste lo que buscabas?</h2>
      <p className='bodyText'>Envíanos un mensaje y te responderemos lo antes posible.</p>
    </div>
    <form className='flex flex-col gap-3'>
      <Input label='Nombre' type='text' name='name' placeholder='Nombre' />
      <Input label='Email' type='email' name='email' placeholder='Email' />
      <Textarea label='Mensaje' rows={4} name='message' placeholder='Mensaje' />
      <button className='primaryButton mt-4'>Enviar</button>
    </form>
  </section>
)

export default Contact
