/* eslint-disable react/jsx-handler-names */
'use client'
import { Button, Modal } from '@/components'
import { Key } from 'react'
import { useRouter } from 'next/navigation'
import { InitiativeInterface } from '@/interfaces'
import { modalDataBuilder } from '../modalDataBuilder'
import { useSWRConfig } from 'swr'

interface Props {
  data: InitiativeInterface
  isLoading?: boolean
  currentIndex: Key
  currentUserId: string
  isLogged: boolean
}

const ModalManager = ({ data, currentIndex, currentUserId, isLogged }: Props) => {
  const router = useRouter()
  const { mutate } = useSWRConfig()
  const modalData = modalDataBuilder(router, data, currentUserId, currentIndex, mutate)
  return (
    <>
      {modalData.withModal && isLogged && !modalData.hiddeTrigger && (
        <Modal
          triggerClassName='border-0 bg-green-50'
          title={modalData.title}
          onConfirm={modalData.onConfirm}
          onCancel={modalData.onCancel}
          isDismissable={false}
          triggerText={modalData.triggerText}
          confirmText={modalData.confirmText}
          cancelText={modalData.cancelText}
          size='sm'
        >
          {modalData.children}
        </Modal>
      )}
      {!modalData.withModal && isLogged && !modalData.hiddeTrigger && (
        <Button
          title={modalData.triggerText}
          variant='faded'
          onClick={modalData.onClick}
          className='border-0 bg-green-50'
        />
      )}
    </>
  )
}

export default ModalManager
