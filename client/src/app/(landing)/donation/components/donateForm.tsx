'use client'
import { Heading, StripeButton } from '@/components'
import { IDonationPayment } from '@/interfaces'
import { createDonationToPlatform } from '@/services'
import Slider from '@mui/material/Slider'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { useAppSelector } from '@/redux/hooks'
import { currentUserSelector } from '@/redux/selectors/users'

function Donation() {
  const router = useRouter()
  const min = 0
  const max = 1000
  const [value, setValue] = useState(min)
  const { id } = useAppSelector(currentUserSelector)

  const handleChange = (event: Event, newValue: number | number[]) => {
    setValue(newValue as number)
  }

  const handleDonationPayment = async () => {
    try {
      const payment: IDonationPayment = {
        amount: value,
        userId: id,
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
    <div className='flex w-full flex-col gap-5'>
      <Heading as='h2'>Hacer una donacion</Heading>
      <div className='flex flex-col items-center gap-3'>
        <p className='rounded-full bg-blue-200 px-4 py-1 text-2xl font-medium'>${value}</p>
        <Slider
          onChange={handleChange}
          defaultValue={min}
          min={min}
          max={max}
          step={10}
          value={value}
          aria-label='Default'
          valueLabelDisplay='auto'
        />
        <div className='flex w-full justify-between'>
          <p>${min}</p>
          <p>${max}</p>
        </div>
      </div>
      <StripeButton align='center' onClick={handleDonationPayment}>
        Stripe
      </StripeButton>
    </div>
  )
}

// function PaymentMethod() {
//   return (
//     <div className='flex w-full flex-col gap-4'>
//       <Heading as='h2'>Metodo de pago</Heading>
//       <form className='flex grid-cols-2 flex-col gap-4 lg:grid'>
//         <FormInput type='text' name='cardNumber' label='' placeholder='Numero de tarjeta' required />
//         <FormInput type='text' name='cadNumber' label='' placeholder='Fecha de caducidad' required />
//         <FormInput type='text' name='csv' label='' placeholder='Codigo se seguridad' required />
//       </form>
//     </div>
//   )
// }

// function BillingInformation() {
//   return (
//     <div className='flex w-full flex-col gap-4'>
//       <Heading as='h2'>Datos de facturación</Heading>
//       <form className='flex grid-cols-2 flex-col gap-4 lg:grid'>
//         <FormInput type='text' name='firstName' label='' placeholder='Nombre' required />
//         <FormInput type='text' name='lastName' label='' placeholder='Apellido' required />
//         <FormInput type='text' name='country' label='' placeholder='Pais' required />
//         <FormInput type='text' name='adress' label='' placeholder='Direccion' required />
//         <FormInput type='text' name='city' label='' placeholder='Ciudad' required />
//         <FormInput type='text' name='state' label='' placeholder='Estado/Provincia' required />
//         <FormInput type='text' name='zip' label='' placeholder='Codigo Postal' required />
//       </form>
//     </div>
//   )
// }

// function Contact() {
//   return (
//     <div className='flex w-full flex-col gap-4'>
//       <Heading as='h2'>Información de contacto</Heading>
//       <form className='flex grid-cols-2 flex-col gap-4 lg:grid'>
//         <FormInput type='text' name='email' label='' placeholder='Email' required />
//         <FormInput type='text' name='phone' label='' placeholder='Telefono' required />
//       </form>
//     </div>
//   )
// }

export default function DonateSec() {
  return (
    <section className='mx-auto flex w-full max-w-screen-sm flex-col items-center justify-center px-4 py-20'>
      <Donation />
      {/* <PaymentMethod /> */}
      {/* <BillingInformation />
      <Contact /> */}
      {/* <button className='rounded-full bg-blue-500 px-6 py-2 text-lg font-semibold text-white'>Donar</button> */}
    </section>
  )
}
