/* eslint-disable @typescript-eslint/brace-style */
/* eslint-disable @typescript-eslint/indent */
import { InitiativeInterface } from '@/interfaces'
import { Key } from 'react'
import SubscribeContent from './Modal/SubscribeContent'
import { handlers } from './handlers'
import CancelSubscription from './Modal/CancelSubscription'
import { AppRouterInstance } from 'next/dist/shared/lib/app-router-context.shared-runtime'
import Routes from '@/utils/constants/routes.const'

interface Response {
  triggerText: string
  onConfirm: any
  onCancel: any
  confirmText: string
  cancelText: string
  withModal: boolean
  onClick: any
  title: string
  children: any
  hiddeTrigger: boolean
}

export const modalDataBuilder = (
  router: AppRouterInstance,
  initiative: InitiativeInterface,
  currentUserId: string,
  tabIndex?: Key,
  mutator?: any
): Response => {
  console.log('tabIndex', tabIndex)
  const isOwner = currentUserId === initiative?.owner?._id
  const volunteer = initiative?.volunteers?.find((volunteer) => volunteer?.user?._id === currentUserId)
  const isVolunteer = Boolean(volunteer)
  const status = volunteer?.status
  const ended = new Date(initiative?.endDate) < new Date()

  const content = {
    triggerText: '',
    onConfirm: () => console.log('confirm'),
    onCancel: () => console.log('cancel'),
    confirmText: '',
    cancelText: 'Cancelar',
    withModal: true,
    onClick: () => console.log('click'),
    title: '',
    children: <></>,
    hiddeTrigger: false
  }

if (tabIndex === 'Informacion') tabIndex = 0
if (tabIndex === 'Publicaciones') tabIndex = 1
if (tabIndex === 'Voluntarios') tabIndex = 2
if (tabIndex === 'Configuracion') tabIndex = 3

  // Casos index 0
  // Voluntario no inscrito (Opcion de inscribirse)
  // Voluntario inscrito y aceptado (Opcion de salirse)
  // Voluntario inscrito y pendiente (Opcion de cancelar)
  // Voluntario inscrito y rechazado (Opcion de ver perfil del dueño)
  // Voluntario inscrito, aceptado y finalizado (Opcion de dejar reseña)

  if (!isOwner) {
    // Voluntario no inscrito (Opcion de inscribirse)
    if (!isVolunteer && !ended) {
      content.triggerText = 'Inscríbete ahora'
      content.onConfirm = () => {
        void handlers.handleSubscribe(currentUserId, initiative._id, mutator)
      }
      content.confirmText = 'Inscribirse'
      content.children = <SubscribeContent />
      content.title = 'Inscribirse a la iniciativa'
    }
    // Voluntario inscrito, aceptado y finalizado (Opcion de dejar reseña)
    else if (isVolunteer && ended && status === 'accepted') {
      content.triggerText = 'Dejar reseña'
      content.onConfirm = () => console.log('confirm')
      content.confirmText = 'Dejar reseña'
      content.title = 'Dejar una reseña'
    }
    // Voluntario inscrito y aceptado (Opcion de salirse)
    else if (isVolunteer && !ended && status === 'accepted') {
      content.triggerText = 'Cancelar suscripción'
      content.children = <CancelSubscription />
      content.onConfirm = () => {
        void handlers.handleUnsubscribe(currentUserId, initiative._id, mutator)
      }
      content.confirmText = 'Cancelar suscripción'
      content.title = 'Cancelar suscripción'
    }
    // Voluntario inscrito y pendiente (Opcion de cancelar)
    else if (isVolunteer && !ended && status === 'pending') {
      content.triggerText = 'Cancelar solicitud'
      content.children = <CancelSubscription />
      content.onConfirm = () => {
        void handlers.handleUnsubscribe(currentUserId, initiative._id, mutator)
      }
      content.confirmText = 'Cancelar solicitud'
      content.title = 'Cancelar solicitud'
    }
    // Voluntario inscrito y rechazado (Opcion de ver perfil del dueño)
    else if (isVolunteer && !ended && status === 'rejected') {
      content.triggerText = 'Ver perfil del dueño'
      content.withModal = false
      content.onClick = () => router.push(Routes.PROFILE(initiative.owner._id))
    }
    // Voluntario inscrito, pendiente y finalizado (Opcion de ver perfil del dueño)
    else if (isVolunteer && ended && status === 'pending') {
      content.triggerText = 'Ver perfil del dueño'
      content.withModal = false
      content.onClick = () => router.push(Routes.PROFILE(initiative.owner._id))
    } else {
      content.hiddeTrigger = true
    }
  }
  // Dueño
  else if (isOwner) {
    // En index 1 mostrar boton de crear publicacion
    if (tabIndex?.toString() === '1') {
      content.triggerText = 'Crear publicación'
      content.withModal = false
    } else {
      content.hiddeTrigger = true
    }
  }
  console.log('content', content)
  return content
}
