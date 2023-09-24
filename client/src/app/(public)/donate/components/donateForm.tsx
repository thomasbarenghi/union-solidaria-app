'use client'
import { StripeButton, Slider } from '@/components'
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
          <p className='smalltext font-semibold text-green-800'>${min}</p>
          <p className='smalltext font-semibold text-green-800'>${max}</p>
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
      <h1 className='titulo-3 font-light'>
        La importancia de tu donación es <b className='font-semibold'>incalculable.</b>
      </h1>
      <p className='bodyText'>
        Tu donación es muy importante para nosotros, ya que nos permite seguir trabajando en nuestros proyectos y
        programas. Además, nos ayuda a seguir creciendo y a llegar a más personas que necesitan de nuestra ayuda.
      </p>
    </div>
    <Donation />
  </section>
)

export default DonateSec
