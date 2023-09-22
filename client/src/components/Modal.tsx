'use client'
import { Modal as ModalUI, ModalContent, ModalHeader, ModalBody, ModalFooter, useDisclosure } from '@nextui-org/react'

interface Props {
  children: React.ReactNode
  isDismissable?: boolean
  title: string
  onConfirm: () => void
  onCancel: () => void
  cancelText?: string
  triggerText: string
  confirmText?: string
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl' | '5xl' | 'full'
}

const Modal = ({
  children,
  isDismissable = true,
  title,
  onConfirm,
  onCancel,
  cancelText = 'Cancelar',
  confirmText = 'Ok',
  size = 'md',
  triggerText
}: Props) => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure()

  const handleConfirm = () => {
    onConfirm()
  }

  const handleCancel = () => {
    onCancel()
  }

  return (
    <>
      <button onClick={onOpen} className='primaryButton'>
        {triggerText}
      </button>
      <ModalUI isOpen={isOpen} onOpenChange={onOpenChange} isDismissable={isDismissable} size={size}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className='flex flex-col gap-1'>{title}</ModalHeader>
              <ModalBody>{children}</ModalBody>
              <ModalFooter className='flex gap-5'>
                <button
                  className='terceryButton smalltext bg-white text-red-800'
                  onClick={() => {
                    onClose()
                    handleCancel()
                  }}
                >
                  {cancelText}
                </button>
                <button
                  className='primaryButton smalltext rounded-2xl'
                  onClick={() => {
                    onClose()
                    handleConfirm()
                  }}
                >
                  {confirmText}
                </button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </ModalUI>
    </>
  )
}

export default Modal
