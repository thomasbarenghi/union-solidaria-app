export interface TeamMember {
  name: string
  position: string
  image: string
  linkedin: string
}

export const teamMembers: TeamMember[] = [
  {
    name: 'Manuel Fernandez',
    position: 'Frontend Developer',
    image: '/image/publicAbout/team/manuel-fernandez.png',
    linkedin: 'https://www.linkedin.com/in/manuelffernandez/'
  },
  {
    name: 'Thomas Barenghi',
    position: 'Fullstack Developer',
    image: '/image/publicAbout/team/thomas-barenghi.png',
    linkedin: 'https://www.linkedin.com/in/thomasbarenghi/'
  }
]
