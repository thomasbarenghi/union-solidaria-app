import { IDonationPayment, IPaymentResponse } from '@/interfaces'
import Endpoints from '@/utils/constants/endpoints.const'
import { serverUrl } from '@/utils/constants/env.const'

const options: RequestInit = {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' }
}

const createDonationToPlatform = async (payment: IDonationPayment): Promise<IPaymentResponse> => {
  const url = `${serverUrl}${Endpoints.DONATION_TO_PLATFORM}`
  const request = await fetch(url, { ...options, body: JSON.stringify(payment) })

  if (!request.ok) {
    throw new Error('Error al intentar conectar el servicio de pago con Stripe')
  }

  const response = await request.json()
  return response
}

const createDonationToInitiative = async () => {}

export { createDonationToInitiative, createDonationToPlatform }
