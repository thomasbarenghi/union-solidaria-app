const Routes = {
  HOME: '/',
  ABOUT: '/about',
  INITIATIVES: '/initiatives',
  HELP: '/help',
  LOGOUT: '/logout',
  LOGIN: '/login',
  REGISTER: '/register',
  ACCOUNT: '/account',
  EDIT_ACCOUNT: '/account',
  PROFILE: (username: string) => `/@${username}`,
  DASHBOARD: '/dashboard',
  FEED: '/feed',
  INSTITUTIONAL: '/institutional',
  DONATION: '/donation'
}

export default Routes
