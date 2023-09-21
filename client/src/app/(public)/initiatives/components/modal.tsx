import Image from 'next/image'
import { createPortal } from 'react-dom'
import { useState } from 'react'

interface Props {
  children: React.ReactNode
}

const Modal = ({ children }: Props) => {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <>
      <button
        className='button primaryButton smalltext flex items-center justify-between gap-1 border border-solid border-gray-300 bg-white px-5 text-black'
        onClick={() => setIsOpen(true)}
      >
        <Image src='/icon/filter.svg' width={16} height={16} alt='filter' />
        Filtros
      </button>
      {isOpen &&
        createPortal(
          <div className='fixed bottom-0 right-0 z-10 '>
            <div className='m-10 rounded-large bg-white p-6 shadow-medium'>
              <div className='mb-3 flex w-full justify-between'>
                <p className='smalltext font-bold'>Filtros</p>
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
