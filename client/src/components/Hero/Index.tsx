import Image from 'next/image'
import Skeleton from './Skeleton'

interface Props {
  imageSrc?: string
  height?: string
  children: React.ReactNode
  gap?: string
  justifyContent?: string
  alignItems?: string
  isLoading?: boolean
  isError?: boolean
}

const Hero = ({
  imageSrc,
  height = 'h-[55vh]',
  gap = 'gap-4',
  children,
  justifyContent = 'justify-center',
  alignItems = 'items-center',
  isLoading = false,
  isError = false
}: Props) => {
  if (isLoading) return <Skeleton height={height} isError={isError} />

  return (
    <article
      className={`${height} ${justifyContent} ${alignItems} section-padding-1 relative flex max-h-[450px] w-full overflow-hidden bg-gray-400`}
    >
      <div className='absolute left-0 top-0 z-[1] h-full w-full  bg-[#00000093] ' />
      <Image fill src={imageSrc ?? ''} alt='banner image' className='object-cover' />
      <section className={`z-[20] flex w-full flex-col ${gap} mt-6 2xl:container`}>{children}</section>
    </article>
  )
}

export default Hero
