/* eslint-disable react/jsx-handler-names */
'use client'
import Endpoints from '@/utils/constants/endpoints.const'
import Skeleton from './InfoSection/Skeleton'
import { Button, Modal, TabBar } from '@/components'
import { initiativeTabItemsBuilder } from './initiativeTabItemsBuilder'
import Hero from './HeroSection/HeroSection'
import { modalDataBuilder } from './modalDataBuilder'
import { useAppSelector } from '@/redux/hooks'
import { loggedUserSelector, currentAuthSelector } from '@/redux/selectors/users'
import { Key, useState } from 'react'
import { useRouter } from 'next/navigation'
import useSWR, { useSWRConfig } from 'swr'

const Content = ({ id }: { id: string }) => {
  const router = useRouter()
  const { mutate } = useSWRConfig()
  const { data, isLoading } = useSWR(Endpoints.INITIATIVES_BY_ID(id))
  const auth = useAppSelector(currentAuthSelector)
  const currentUser = useAppSelector(loggedUserSelector)
  const [currentIndex, setCurrentIndex] = useState<Key>(0)
  const tabItems = initiativeTabItemsBuilder(currentUser, isLoading, data)
  const modalData = modalDataBuilder(router, data, currentUser, currentIndex, mutate)
  if (isLoading) return <Skeleton />
  return (
    <>
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
      <article className='section-padding-1 container-section listContainer article-layout-1 !py-14'>
        <section className='flex w-full flex-col gap-4'>
          <TabBar
            onSelectionChange={(index) => setCurrentIndex(index)}
            items={tabItems}
            variant='solid'
            tabContentClassName='group-data-[selected=true]:text-white p-4 '
            cursorClassName='group-data-[selected=true]:bg-green-800 shadow-none '
          />
        </section>
      </article>
    </>
  )
}

export default Content
