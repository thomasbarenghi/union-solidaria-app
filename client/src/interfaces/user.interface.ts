import { InitiativeInterface } from '.'
import { ReviewInterface } from './review.interface'

export interface UserInterface {
  _id: string
  firstName: string
  lastName: string
  birthday?: null | string
  phone: string
  email: string
  role: 'volunteer' | 'organization'
  initiatives: InitiativeInterface[]
  favorites: InitiativeInterface[]
  password: string
  bannerImage: string
  username: string
  profileImage: string
  orgName: null | string
  posts?: []
  reviews: ReviewInterface[]
}
