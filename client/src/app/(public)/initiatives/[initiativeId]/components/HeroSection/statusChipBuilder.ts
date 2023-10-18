'use client'
import { InitiativeInterface, UserInterface } from '@/interfaces'

interface Response {
  title: string
  color: 'default' | 'warning' | 'success' | 'secondary' | 'primary' | 'danger'
}

export const statusChipBuilder = (initiative: InitiativeInterface, currentUser: UserInterface): Response => {
  const isOwner = currentUser._id === initiative?.owner?._id
  const volunteer = initiative?.volunteers?.find((volunteer) => volunteer.user._id === currentUser._id)
  const status = volunteer?.status

  const title =
    status === 'pending'
      ? 'Ingreso solicitado'
      : status === 'accepted'
        ? 'Eres miembro'
        : status === 'rejected'
          ? 'Ingreso rechazado'
          : isOwner
            ? 'Eres el dueño'
            : 'No eres miembro'

  return {
    title,
    color:
      status === 'pending'
        ? 'warning'
        : status === 'accepted'
          ? 'success'
          : status === 'rejected'
            ? 'danger'
            : 'secondary'
  }
}
