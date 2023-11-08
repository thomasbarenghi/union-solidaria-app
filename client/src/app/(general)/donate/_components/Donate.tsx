'use client'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { useSession } from 'next-auth/react'
import { toast } from 'sonner'
import { StripeButton, Slider, TextElement } from '@/components'
import { IDonationPayment } from '@/interfaces'
import { createDonationToPlatform } from '@/services/stripe/payments.service'

const Donation = () => {
  const router = useRouter()
  const min = 0
  const max = 1000
  const [value, setValue] = useState(min)
  const { data: session, status } = useSession()

  const handleChange = (newValue: number | number[]) => {
    setValue(newValue as number)
  }

  const handleDonationPayment = async () => {
    try {
      if (status === 'unauthenticated') return toast.error('Debes iniciar sesión para donar')
      const payment: IDonationPayment = {
        amount: value,
        userId: session?.user?.id ?? '',
        initiativeId: 'globalDonation'
      }
      const { sessionUrl } = await createDonationToPlatform(payment)
      router.push(sessionUrl)
    } catch (error) {
      console.log(error)
      toast.error('Ha ocurrido un error al procesar tu donación')
    }
  }
  return (
    <div className='flex w-full flex-col items-start gap-5 lg:flex-row'>
      <div className='flex w-full flex-col gap-0'>
        <Slider min={5} max={1000} defaultValue={50} handleChange={handleChange} />
        <div className='flex w-full justify-between'>
          <TextElement as='p' type='small' className='font-semibold text-green-800'>
            ${min}
          </TextElement>
          <TextElement as='p' type='small' className='font-semibold text-green-800'>
            ${max}
          </TextElement>
        </div>
      </div>
      <StripeButton align='center' onClick={handleDonationPayment}>
        Donar con Stripe
      </StripeButton>
    </div>
  )
}

const Donate = () => (
  <section className='flex flex-col items-center gap-14 2xl:container lg:flex-row'>
    <div className='flex flex-col gap-1'>
      <TextElement type='t1' as='h1' className='font-light'>
        La importancia de <br />
        tu donación es <b className='font-semibold'>incalculable.</b>
      </TextElement>
      <TextElement type='base' as='p'>
        Con tu aporte vamos a costear los gastos de la plataforma, pagar a los desarrolladores y mantenernos activos
        para seguir ofreciendo un servicio de calidad.
      </TextElement>
    </div>
    <Donation />
  </section>
)

export default Donate
