export interface User {
  id?: string
  firstName: string
  lastName: string
  birthday?: null | string
  phone: string
  email: string
  role: string
  password: string
  bannerImage?: null | string
  username: string
  profileImage?: null | string
  orgName?: null | string
  posts?: []
  reviews?: []
}
