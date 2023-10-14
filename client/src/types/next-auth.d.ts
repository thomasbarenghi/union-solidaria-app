// This import is necessary for type extension, otherwise an "not callable" error is displayed at '/app/api/auth/[...nextauth]/route.ts'
import 'next-auth'

interface SessionUser {
  id: string
  firstName: string
  lastName: string
  birthday?: null | string
  phone: string
  email: string
  role: Role
  bannerImage: string
  username: string
  profileImage: string
  orgName: null | string
}

// This types are declared to implement type safe Providers (Credentials, Google, Github, etc.) in next auth
declare module 'next-auth' {
  interface User extends SessionUser {}

  interface Profile {
    iss: string
    azp: string
    aud: string
    sub: string
    email: string
    email_verified: boolean
    at_hash: string
    name: string
    picture: string
    given_name: string
    family_name: string
    locale: string
    iat: number
    exp: number
  }

  interface Account {
    provider: string
    type: string
    providerAccountId: string
    access_token: string
    expires_at: number
    scope: string
    token_type: string
    id_token: string
  }
  interface Session {
    user: User
    token: {
      accessToken?: string
      idToken?: string
      sessionId?: string
      provider: string
    }
  }
}

declare module 'next-auth/jwt' {
  /** Returned by the `jwt` callback and `getToken`, when using JWT sessions */
  interface JWT extends Partial<SessionUser> {
    accessToken: string
    idToken: string
    sessionId: string
    provider: string
    iat: number
    exp: number
    jti: string
  }
}
