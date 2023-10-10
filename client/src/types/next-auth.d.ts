// This import is necessary for type extension, otherwise an "not callable" error is displayed at '/app/api/auth/[...nextauth]/route.ts'
import 'next-auth'

// This types are declared to implement type safe Providers (Google, Github, etc.) in next auth
// Credential provider doesn't require this interfaces, since callbacks are not part of it's authentication flow
declare module 'next-auth' {
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
    user: {
      id: string
      firstName: string
      lastName: string
      birthday?: null | string
      phone: string
      email: string
      role: Role
      address: string
      bannerImage: string
      username: string
      profileImage: string
      orgName: null | string
    }
    token: {
      accessToken?: string
      idToken?: string
    }
  }
}

declare module 'next-auth/jwt' {
  /** Returned by the `jwt` callback and `getToken`, when using JWT sessions */
  interface JWT {
    accessToken: string
    idToken: string
    iat: number
    exp: number
    jti: string
  }
}
