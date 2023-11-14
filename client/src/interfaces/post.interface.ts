import { InitiativeInterface, UserInterface } from '.'

export interface PostInterface {
  _id: string
  body: string
  author: UserInterface
  initiative: InitiativeInterface
  createdAt: string
  updatedAt: string
}
