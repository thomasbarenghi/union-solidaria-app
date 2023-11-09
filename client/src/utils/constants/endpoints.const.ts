const Endpoints = {
  LOGIN: '/api/auth/login',
  LOGOUT: '/api/auth/logout',
  GOOGLE_LOGIN: '/api/auth/google',
  VERIFY: '/api/auth/verify',
  USERS: '/api/users',
  INITIATIVES: (query?: string) => `/api/initiatives${query ?? ''}`,
  INITIATIVES_BY_ID: (id: string) => `/api/initiatives/${id}`,
  USER_BY_ID: (userId: string) => `/api/users/${userId}`,
  // TODO: implement endpoint to search user by email in the backend
  USER_BY_EMAIL: (userId: string) => `/api/users/${userId}`,
  UPDATE_DATA: (userId: string) => `/api/users/update-data/${userId}`,
  UPDATE_PASSWORD: (userId: string) => `/api/users/${userId}/edit-password`,
  REVIEWS: '/api/reviews',
  DONATION_TO_PLATFORM: '/api/stripe/create-checkout-session',
  MODIFY_FAVORITE: (userId: string) => `/api/users/${userId}/favorites`,
  UPDATE_SUBSCRIPTION: (id: string) => `/api/initiatives/${id}/subscription-status`,
  UNSUBSCRIBE: (id: string) => `/api/initiatives/${id}/unsubscribe`,
  SUBSCRIBE: (id: string) => `/api/initiatives/${id}/subscribe`,
  UPDATE_ORGANIZATION: (userId: string) => `/api/users/${userId}/edit-organization`,
  POST_REVIEW: '/api/reviews',
  EDIT_REVIEW: (reviewId: string) => `/api/reviews/${reviewId}`,
  DELETE_REVIEW: (reviewId: string) => `/api/reviews/${reviewId}`,
  POST_PUBLICATION: '/api/posts',
  DELETE_PUBLICATION: (publicationId: string) => `/api/posts/${publicationId}`,
  EDIT_PUBLICATION: (publicationId: string) => `/api/posts/${publicationId}`
}

export default Endpoints
