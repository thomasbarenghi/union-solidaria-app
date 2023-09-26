const Routes = {
  HOME: '/',
  ABOUT: '/about',
  INITIATIVES: '/initiatives',
  CREATE_INITIATIVE: '/initiatives/create',
  INDIVIDUAL_INITIATIVE: (id: string) => `/initiatives/${id}`,
  HELP: '/help',
  LOGOUT: '/logout',
  LOGIN: '/login',
  REGISTER: '/register',
  EDIT_ACCOUNT: '/account',
  PROFILE: (username: string) => `/@${username}`,
  EXPLORE: '/explore',
  DONATION: '/donate',
  LEGAL: '/legal'
}

export default Routes
