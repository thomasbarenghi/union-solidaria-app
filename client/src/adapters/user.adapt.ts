import { UserInterface } from '@/interfaces'

export const userAdapter = (user: UserInterface) => {
  const { _id, bannerImage, email, phone, firstName, lastName, role, username, profileImage, orgName } = user
  return { _id, bannerImage, email, phone, firstName, lastName, role, username, profileImage, orgName }
}
