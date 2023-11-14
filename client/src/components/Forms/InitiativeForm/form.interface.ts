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
