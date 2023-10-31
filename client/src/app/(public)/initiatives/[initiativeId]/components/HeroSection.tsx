/* eslint-disable react/jsx-handler-names */
'use client'
import { Button, Modal } from '@/components'
import Hero from './HeroSection/HeroSection'
import { modalDataBuilder } from './modalDataBuilder'
import { useAppSelector } from '@/redux/hooks'
import { loggedUserSelector, currentAuthSelector } from '@/redux/selectors/users'
import { Key } from 'react'
import { useRouter } from 'next/navigation'
import { useSWRConfig } from 'swr'
import { InitiativeInterface } from '@/interfaces'

interface Props {
  data: InitiativeInterface
  isLoading: boolean
  currentIndex: Key
}

const HeroSection = ({ data, isLoading, currentIndex }: Props) => {
  const router = useRouter()
  const { mutate } = useSWRConfig()
  const auth = useAppSelector(currentAuthSelector)
  const currentUser = useAppSelector(loggedUserSelector)
  const modalData = modalDataBuilder(router, data, currentUser, currentIndex, mutate)
  return (
    <Hero data={data} isLoading={isLoading}>
      {modalData.withModal && auth.isLogged && !modalData.hiddeTrigger && (
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
      {!modalData.withModal && auth.isLogged && !modalData.hiddeTrigger && (
        <Button
          title={modalData.triggerText}
          variant='faded'
          onClick={modalData.onClick}
          className='border-0 bg-green-50'
        />
      )}
    </Hero>
  )
}

export default HeroSection
