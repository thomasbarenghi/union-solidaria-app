import { UserInterface } from './user.interface'

export interface InitiativeInterface {
  id: string
  title: string
  description: string
  deadLine: Date
  startDate: Date
  endDate: Date
  galery: string
  thumbnail: string
  volunteers: any[]
  categories: string[]
  opportunities: string[]
  country: string
  province: string
  adress: string
  reviewsId: string[]
  postsId: string[]
  ownerId: string
  startHour: string
  endHour: string
  extraInfo: string
  themes: string[]
  createdAt: Date
  updatedAt: Date
  locations: string
  languages: string[]
  reviews: string[]
  owner: UserInterface
}
