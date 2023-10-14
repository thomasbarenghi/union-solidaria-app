import { PostInterface, ReviewInterface } from '@/interfaces'

export interface AuthInterface {
  sessionId: string
  isLogged: boolean
}

export interface LoginSuccessful {
  userId: string
  sessionId: string
  message: string
}

export interface LogoutSuccessful {
  message: string
}

// TODO: fix backend returned json when a user registers
export interface RegisterSuccessful {
  __v: number
  _id: string
  bannerImage: string
  birthday: string
  donations: string
  email: string
  favorites: string[]
  firstName: string
  initiatives: string[]
  lastName: string
  orgName: string
  password: string
  phone: string
  posts: PostInterface[]
  profileImage: string
  reviews: ReviewInterface[]
  role: string
  username: string
}
