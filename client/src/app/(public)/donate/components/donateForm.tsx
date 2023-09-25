'use client'
import { StripeButton, Slider, TextElement } from '@/components'
import { IDonationPayment } from '@/interfaces'
import { createDonationToPlatform } from '@/services/stripe/payments.service'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { useAppSelector } from '@/redux/hooks'
import { loggedUserSelector } from '@/redux/selectors/users'

const Donation = () => {
  const router = useRouter()
  const min = 0
  const max = 1000
  const [value, setValue] = useState(min)
  const { _id } = useAppSelector(loggedUserSelector)

  const handleChange = (newValue: number | number[]) => {
    setValue(newValue as number)
  }

  const handleDonationPayment = async () => {
    try {
      const payment: IDonationPayment = {
        amount: value,
        userId: _id,
        initiativeId: 'globalDonation'
      }
      const { sessionUrl } = await createDonationToPlatform(payment)
      router.push(sessionUrl)
    } catch (error) {
      console.log(error)
      alert('Error al crear donacion')
    }
  }

  return (
    <div className='flex w-full flex-col gap-5 lg:flex-row'>
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
      <StripeButton align='center' onClick={() => handleDonationPayment}>
        Donar con Stripe
      </StripeButton>
    </div>
  )
}

const DonateSec = () => (
  <section className='flex flex-col gap-10'>
    <div className='flex flex-col gap-1'>
      <TextElement type='t3' as='h1' className='font-light'>
        La importancia de tu donación es <b className='font-semibold'>incalculable.</b>
      </TextElement>
      <TextElement type='base' as='p'>
        La importancia de tu donación es <b className='font-semibold'>incalculable.</b>
      </TextElement>
    </div>
    <Donation />
  </section>
)

export default DonateSec
