import Image from 'next/image'

interface Props {
  coverPhoto?: string
  title?: string
  owner?: string
  ownerPhoto?: string
}

export default function HeroSec(props: Props) {
  const { coverPhoto, title, owner, ownerPhoto } = props

  return (
    <section className='container relative mb-2 w-full rounded-lg bg-gray-200'>
      <div className='relative h-[20vh] w-full lg:h-[30vh] '>
        <Image
          src={
            coverPhoto ||
            'https://images.unsplash.com/photo-1564349683136-77e08dba1ef7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1472&q=80'
          }
          alt='cover photo'
          fill
          className='rounded-lg object-cover'
        />
      </div>
      <div className='absolute bottom-0 left-0 right-0 flex flex-col gap-2 rounded-b-lg bg-gray-950 bg-opacity-70 p-3'>
        <h1 className='text-2xl text-white'>{title || 'Titulo de la iniciativa'}</h1>
        <div className='flex gap-2'>
          <Image
            src={
              ownerPhoto ||
              'https://images.unsplash.com/photo-1564349683136-77e08dba1ef7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1472&q=80'
            }
            alt='hero'
            width={30}
            height={30}
            className='aspect-square rounded-full object-cover'
          />
          <p className='text-sm text-blue-300'>{owner || 'Todos Juntos Somos Mas'}</p>
        </div>
      </div>
    </section>
  )
}
