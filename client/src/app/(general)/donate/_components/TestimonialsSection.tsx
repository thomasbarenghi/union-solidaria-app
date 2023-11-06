import Image from 'next/image'
import { Testimonial, testimonials } from '../_lib/testimonials.lib'
import { TextElement } from '@/components'

const TestimonialItem = ({ testimonial }: { testimonial: Testimonial }) => (
  <div className='flex flex-col gap-4'>
    <div className='relative aspect-square w-full'>
      <Image src={testimonial.image} alt={testimonial.name} fill className='rounded-full object-cover' />
    </div>
    <div className='flex flex-col gap-1'>
      <TextElement as='p' type='subtitle' className='text-center !font-semibold'>
        {testimonial.name}
      </TextElement>
      <TextElement as='p' type='base' className='text-center'>
        {testimonial.quote}
      </TextElement>
    </div>
  </div>
)

const TestimonialsSection = () => (
  <section className='flex flex-col items-center gap-10 2xl:container'>
    <div className='flex flex-col gap-1'>
      <TextElement as='h2' type='t1' className='text-center !font-light'>
        Testimonios de <b className='!font-semibold'>donadores</b>
      </TextElement>
      <TextElement as='p' type='base' className='text-center !font-light'>
        Personas que confian en nosotros y nos apoyan para seguir haciendo el bien.
      </TextElement>
    </div>
    <div className='flex max-w-[85%] flex-col gap-10 md:max-w-[95%] md:flex-row lg:max-w-[75%] '>
      {testimonials.map((testimonial, index) => (
        <TestimonialItem testimonial={testimonial} key={index} />
      ))}
    </div>
  </section>
)

export default TestimonialsSection
