import { InitiativeInterface, UserInterface } from '.'

export interface ReviewInterface {
  _id: string
  body: string
  rating: number
  author: UserInterface
  initiative: InitiativeInterface
  initiativeOwner: UserInterface
}
