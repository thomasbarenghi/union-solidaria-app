'use client'
import useSWR from 'swr'
import { Hero, Modal } from '@/components'
import Endpoints from '@/utils/constants/endpoints.const'
import { User } from '@nextui-org/react'
import Link from 'next/link'
import Routes from '@/utils/constants/routes.const'

interface Props {
  id: string
}

const HeroSec = ({ id }: Props) => {
  const { data, isLoading } = useSWR(Endpoints.INITIATIVES_BY_ID(id))
  return (
    <Hero imageSrc={data?.thumbnail} isLoading={isLoading}>
      <div className='flex items-center justify-between py-10'>
        <div className='flex flex-col gap-3'>
          <div className='flex flex-col gap-1'>
            <h1 className=' titulo-3 w-full font-medium text-white'>{data?.title}</h1>
            <p className='bodyText text-white'>
              {data?.country}, {data?.province}
            </p>
          </div>
          <Link href={Routes.PROFILE(data?.owner?.username)}>
            <User
              classNames={{
                name: '!text-white !smalltext font-medium',
                base: 'flex gap-1 items-center justify-start cursor-pointer'
              }}
              name={data?.owner?.orgName}
              avatarProps={{
                src: data?.owner?.profileImage,
                className: 'aspect-square h-[30px] w-[30px]'
              }}
            />
          </Link>
          <p className='bodyText font-light text-white'>{data?.locations}</p>
        </div>
        <Modal
          title='Inscribirse a la iniciativa'
          onConfirm={() => console.log('confirm')}
          onCancel={() => console.log('cancel')}
          isDismissable={false}
          triggerText='Inscríbete ahora'
          confirmText='Inscribirse'
          cancelText='Cancelar'
          size='sm'
        >
          <div className='flex flex-col gap-1'>
            <p className='bodyText font-light text-black'>
              Recuerda que inscribirse a una iniciativa es un compromiso, por lo que debes estar seguro de poder
              cumplirlo. Si no puedes cumplirlo, puedes cancelar tu inscripción en cualquier momento.
            </p>
            <p className='bodyText text-black'>
              Una vez que te inscribas, el dueño de la iniciativa podra aceptar o rechazar tu solicitud.
            </p>
            <p className='bodyText font-medium text-black'>
              Al inscribirte aceptas los <Link href={Routes.INSTITUTIONAL}>términos y condiciones</Link> de la
              plataforma.
            </p>
          </div>
        </Modal>
      </div>
    </Hero>
  )
}

export default HeroSec
