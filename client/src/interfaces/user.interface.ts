export interface UserInterface {
  id: string
  firstName: string
  lastName: string
  birthday?: null | string
  phone: string
  email: string
  role: 'volunteer' | 'organization'
  password: string
  bannerImage: string
  username: string
  profileImage: string
  orgName: null | string
  posts?: []
  reviews?: []
}
