export interface EditAccountFormData {
  firstName: string
  lastName: string
  email: string
  username: string
  profileImage?: FileList | null
  bannerImage?: FileList | null
}

export interface OrganizationFormData {
  orgName: string
}

export interface ChangePasswordFormData {
  oldPassword: string
  newPassword: string
  repeatNewPassword: string
}
