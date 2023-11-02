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
}

export interface UpdatePasswordFormValues {
  oldPassword: string
  newPassword: string
}

export interface UpdateUserFormValues extends Partial<Omit<RegisterFormValues, 'role'>> {}
