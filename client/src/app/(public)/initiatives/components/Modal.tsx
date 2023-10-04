import Image from 'next/image'
import { createPortal } from 'react-dom'
import { useState } from 'react'
import { Button, TextElement } from '@/components'

interface Props {
  children: React.ReactNode
}

const Modal = ({ children }: Props) => {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <>
      <Button
        color='default'
        variant='bordered'
        className='border'
        title='Filtros'
        onClick={() => setIsOpen(true)}
        startContent={<Image src='/icon/filter.svg' alt='filtro' width={15} height={15} />}
      />
      {isOpen &&
        createPortal(
          <div className='fixed bottom-0 right-0 z-10 '>
            <div className='m-10 rounded-large bg-white p-6 shadow-medium'>
              <div className='mb-3 flex w-full justify-between'>
                <TextElement as='p' type='small' className='!font-bold'>
                  Filtros
                </TextElement>
                <Image
                  src='/icon/cross.svg'
                  alt='cerrar'
                  width={15}
                  height={15}
                  className='cursor-pointer'
                  onClick={() => setIsOpen(false)}
                />
              </div>
              {children}
            </div>
          </div>,
          document.body
        )}
    </>
  )
}

export default Modal
