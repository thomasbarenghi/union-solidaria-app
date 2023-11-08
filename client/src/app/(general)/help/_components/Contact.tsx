'use client'
import { Input, TextElement, Textarea, Button } from '@/components'

const Contact = () => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
  }

  return (
    <section className='flex w-full flex-col gap-6 2xl:container'>
      <div className='flex flex-col gap-1'>
        <TextElement type='t2' as='h2' className='font-semibold'>
          ¿No encontraste lo que buscabas?
        </TextElement>
        <TextElement type='base' as='p'>
          Envíanos un mensaje y te responderemos lo antes posible.
        </TextElement>
      </div>
      <form className='flex flex-col items-end gap-3' onSubmit={handleSubmit}>
        <Input label='Nombre' type='text' name='name' placeholder='Nombre' />
        <Input label='Email' type='email' name='email' placeholder='Email' />
        <Textarea label='Mensaje' rows={4} name='message' placeholder='Mensaje' />
        <Button type='submit' title='Enviar' />
      </form>
    </section>
  )
}

export default Contact
