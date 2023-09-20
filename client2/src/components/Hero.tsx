import Image from 'next/image'

interface Props {
  imageSrc: string
  height?: string
  children: React.ReactNode
  gap?: string
  justifyContent?: string
  alignItems?: string
}

const Hero = ({
  imageSrc,
  height = 'h-[55vh]',
  gap = 'gap-4',
  children,
  justifyContent = 'justify-center',
  alignItems = 'items-center'
}: Props) => (
  <article
    className={`${height} ${justifyContent} ${alignItems} container-section section-padding-1 relative flex overflow-hidden rounded-br-[40px]`}
  >
    <div className='absolute left-0 top-0 z-[1] h-full w-full  bg-[#0000005e] ' />
    <Image fill src={imageSrc} alt='Vercel Logo' className='object-cover' />
    <section className={`z-[20] flex w-full flex-col ${gap} mt-6`}>{children}</section>
  </article>
)

export default Hero
