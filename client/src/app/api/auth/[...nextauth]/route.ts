import { userAdapter } from '@/adapters/user.adapt'
import { UserInterface } from '@/interfaces'
import { loginUser } from '@/services/auth/login.service'
import { logoutUser } from '@/services/auth/logout.service'
import { getUserByEmail } from '@/services/user/get-user.service'
import NextAuth, { NextAuthOptions, User } from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'
// import { RegisterFormValues } from '@/interfaces/forms.interface'
// import { signupUser } from '@/services/auth/signup.service'
// import { getUserByEmail } from '@/services/user/get-user.service'
// import clientPromise from '@/utils/mongo/client'
// import { MongoDBAdapter } from '@auth/mongodb-adapter'
// import { Adapter } from 'next-auth/adapters'
// import GoogleProvider from 'next-auth/providers/google'

export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        email: { label: 'Email', type: 'email', required: true, placeholder: 'test@test.test' },
        password: { label: 'Password', type: 'password', required: true }
      },
      authorize: async (credentials, _) => {
        const email = credentials?.email ?? ''
        const password = credentials?.password ?? ''

        const { login, error: loginError } = await loginUser(email, password)
        if (loginError !== null) throw new Error(JSON.stringify(loginError))

        const { user, error: getUserError } = await getUserByEmail(email)
        if (getUserError !== null) throw new Error(JSON.stringify(getUserError))

        const { _id: id, ...adaptedUser } = userAdapter(user as UserInterface)
        return { ...adaptedUser, id, sessionId: login?.sessionId }
      }
    })
    // GoogleProvider({
    //   clientId: process.env.GOOGLE_CLIENT_ID ?? '',
    //   clientSecret: process.env.GOOGLE_CLIENT_SECRET ?? ''
    // })
  ],
  pages: {
    signIn: '/login'
    // newUser: '/newUser'
  },
  callbacks: {
    signIn: async (arg) => {
      // console.log('SIGNIN: ', arg)
      if (arg.account?.provider === 'google') {
        //   try {
        // const { account, profile } = arg
        //     const { user } = await getUserByEmail(profile?.email as string)

        //     if (user !== undefined) return true

        //     if (profile !== undefined) {
        //       const registerData: RegisterFormValues = {
        //         firstName: profile.given_name,
        //         lastName: profile.family_name,
        //         birthday: new Date(1997, 3, 14),
        //         email: profile.email as string,
        //         password: 'Test1234',
        //         phone: '+54 11 123456789',
        //         role: 'volunteer',
        //         username: profile.sub as string
        //       }

        //       const { error } = await signupUser(registerData)
        //       if (error !== null) return false
        //       return true

        // When the Google provider is activated, this statement must be deleted
        return false
        //     }
      }
      return true
      // } catch (error) {
      //   console.log(error)
      //   return false
      // }
    },
    jwt: async (arg) => {
      // console.log('JWT: ', arg)
      // arg -> token, user, account, profile
      const { token, user, account } = arg

      // arg props vary according to the provider
      if (account?.provider === 'google') {
        // const { user: userData, error } = await getUserByEmail(token.email as string)
        // const { _id, ...adaptedUser } = userAdapter(userData)
        // const { access_token: accessToken, id_token: idToken } = account
        // return { ...token, ...user, ...adaptedUser, accessToken, idToken, provider: account.provider }
      }

      if (account?.provider === 'credentials') {
        const { firstName, lastName } = user
        const name = firstName + ' ' + lastName

        return { ...token, name, ...user, provider: account.provider }
      }

      // remove user data that will be in session.user state from token
      // const { iat, exp, jti, sub, id, sessionId, email, username, accessToken, idToken } = token
      // return { iat, exp, jti, sub, id, sessionId, email, username, accessToken, idToken }
      return token
    },
    session: async (arg) => {
      // console.log('SESSION: ', arg)
      // arg -> session, token
      const { session, token } = arg
      const { iat, exp, jti, idToken, accessToken, sessionId, provider, ...userData } = token

      session.user = {
        ...session.user,
        ...(userData as User)
      }

      session.token = { provider }
      session.token.accessToken = accessToken
      session.token.idToken = idToken
      session.token.sessionId = sessionId

      return session
    }
  },
  // adapter: MongoDBAdapter(clientPromise) as Adapter,
  // callbacks: {
  //   jwt: async (arg) => {
  // console.log('JWT: ', arg)
  //     // arg -> token, user, account, profile
  //     const { token, user, account } = arg

  //     // arg props vary according to the provider
  //     if (account?.provider === 'google') {
  //       const { access_token: accessToken, id_token: idToken } = account

  //       return { ...token, ...user, accessToken, idToken }
  //     }

  //     return token
  //   },
  // session: async (arg) => {
  //   // console.log('SESSION: ', arg)
  //   // arg -> session, token
  //   const { session, token } = arg
  //   const { user, error } = await getUserByEmail(token.email as string)

  //   if (error === null && user !== undefined) {
  //     const { _id, ...adaptedUser } = userAdapter(user)
  //     session.user = {
  //       ...session.user,
  //       ...adaptedUser,
  //       id: _id
  //     }
  //     session.token = {}
  //     session.token.accessToken = token.accessToken
  //     session.token.idToken = token.idToken
  //   }

  //   return session
  // },
  // },
  session: {
    strategy: 'jwt'
  },
  events: {
    signOut: async (arg) => {
      // TODO: improve logout handle
      const { token } = arg
      const { error } = await logoutUser(token.sessionId)
      if (error !== null) {
        console.log(error)
      }
    }
  }
}

const handler = NextAuth(authOptions)

export { handler as GET, handler as POST }
