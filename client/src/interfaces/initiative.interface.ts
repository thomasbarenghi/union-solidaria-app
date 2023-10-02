import { PostInterface } from './post.interface'
import { UserInterface } from './user.interface'

export interface InitiativeInterface {
  _id: string
  title: string
  description: string
  deadLine: Date
  startDate: Date
  endDate: Date
  galery: string
  thumbnail: string
  volunteers: VolunteersInterface[]
  categories: string[]
  opportunities: string[]
  country: string
  province: string
  address: string
  reviewsId: string[]
  posts: PostInterface[]
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

export interface VolunteersInterface {
  status: 'accepted' | 'pending' | 'rejected'
  user: UserInterface
}
