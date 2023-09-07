import { Gallery } from '@/components'

interface Props {
  imgUrls: string[]
}

const Photos = (props: Props) => {
  const { imgUrls } = props

  return (
    <section className='mb-6'>
      <h3 className='mb-3 text-xl text-blue-600'>Fotos</h3>
      <Gallery imgUrls={imgUrls} />
    </section>
  )
}

export default Photos
