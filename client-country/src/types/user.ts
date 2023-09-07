export interface UserClass {
  id: string
  firstName: string
  lastName: string
  username: string
  profileImage: string
  email: string
  isSuperAdmin: boolean
  softDelete: boolean
  bannerImage: string
  role: 'volunteer' | 'organization'
}
