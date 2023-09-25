'use client'
import { Modal as ModalUI, ModalContent, ModalHeader, ModalBody, ModalFooter, useDisclosure } from '@nextui-org/react'
import { Button } from '.'

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
      <Button type='submit' title={triggerText} onClick={onOpen} />
      <ModalUI isOpen={isOpen} onOpenChange={onOpenChange} isDismissable={isDismissable} size={size}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className='flex flex-col gap-1'>{title}</ModalHeader>
              <ModalBody>{children}</ModalBody>
              <ModalFooter className='flex gap-1'>
                <Button
                  color='danger'
                  variant='light'
                  title={cancelText}
                  onClick={() => {
                    onClose()
                    handleCancel()
                  }}
                />
                <Button
                  color='primary'
                  variant='solid'
                  title={confirmText}
                  onClick={() => {
                    onClose()
                    handleConfirm()
                  }}
                />
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </ModalUI>
    </>
  )
}

export default Modal
