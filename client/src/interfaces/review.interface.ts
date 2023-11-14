import { InitiativeInterface, UserInterface } from '.'

export interface ReviewInterface {
  _id: string
  body: string
  rating: number
  author: string | UserInterface
  initiative: string | InitiativeInterface
  initiativeOwner: string | UserInterface
  createdAt: Date
  updatedAt: Date
}
