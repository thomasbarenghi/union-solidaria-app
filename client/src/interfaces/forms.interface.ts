import { Role } from '@/interfaces'

export interface ReviewFormDTO {
  body: string
  userIDs: string
}

export interface LoginFormValues {
  email: string
  password: string
}

export interface RegisterFormValues {
  firstName: string
  lastName: string
  email: string
  username: string
  password: string
  phone: number | string
  birthday: Date
  role: Role
  orgName?: string
  repeatPassword?: string
}

export interface UpdatePasswordFormValues {
  oldPassword: string
  newPassword: string
  repeatNewPassword: string
}

export interface UpdateUserFormValues extends Partial<Omit<RegisterFormValues, 'role'>> {}

export interface InitiativeFormData {
  title: string
  description: string
  deadLine: string
  startDate: Date
  endDate: Date
  categories: string[]
  opportunities: string[]
  locations: string
  languages: string[]
  ownerId: string
  startHour: string
  endHour: string
  extraInfo: string
  themes: string[]
  thumbnail?: FileList
  country: string
  province: string
  address: string
}

export interface ReviewFormData {
  rating: number
  body: string
}

export interface PostFormData {
  body: string
}
