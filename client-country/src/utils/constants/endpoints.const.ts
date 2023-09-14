const Endpoints = {
  LOGIN: '/api/auth/login',
  GOOGLE_LOGIN: '/api/auth/google',
  VERIFY: '/api/auth/verify',
  USERS: '/api/users',
  INITIATIVES: '/api/initiatives',
  INITIATIVES_BY_ID: (id: string) => `/api/initiatives/${id}`,
  USER_BY_ID: (userId: string) => `/api/users/${userId}`,
  REVIEWS: '/api/reviews',
  DONATION_TO_PLATFORM: '/api/stripe/create-checkout-session'
}

export default Endpoints
