import { InitiativeInterface } from '@/interfaces'

interface Response {
  title: string
  color: 'default' | 'warning' | 'success' | 'secondary' | 'primary' | 'danger'
}

export const dateStatusChipBuilder = (initiative: InitiativeInterface): Response => {
  try {
    const currentDate = new Date().toISOString()
    const deadLine = new Date(initiative?.deadLine)?.toISOString()
    const endDate = new Date(initiative?.endDate)?.toISOString()
    const canJoin = currentDate < deadLine
    const isActive = currentDate < endDate

    const title = canJoin ? 'Inscripciones abiertas' : isActive ? 'Iniciativa en curso' : 'Iniciativa finalizada'

    return {
      title,
      color: canJoin ? 'success' : isActive ? 'success' : 'danger'
    }
  } catch (error) {
    console.error(error)
    return {
      title: 'Error',
      color: 'danger'
    }
  }
}
