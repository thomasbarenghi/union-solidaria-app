import { userAdapter } from '@/adapters/user.adapt'
import { loginUser } from '@/services/auth/login.service'
import NextAuth from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'
// import { RegisterFormValues } from '@/interfaces/forms.interface'
// import { signupUser } from '@/services/auth/signup.service'
// import { getUserByEmail } from '@/services/user/get-user.service'
// import clientPromise from '@/utils/mongo/client'
// import { MongoDBAdapter } from '@auth/mongodb-adapter'
// import { Adapter } from 'next-auth/adapters'
// import GoogleProvider from 'next-auth/providers/google'

const handler = NextAuth({
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

        const { user, error } = await loginUser(email, password)

        if (error !== null) throw new Error(JSON.stringify(error))
        const { _id, ...adaptedUser } = userAdapter(user)
        return { ...adaptedUser, id: _id }
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
  }
  // adapter: MongoDBAdapter(clientPromise) as Adapter,
  // callbacks: {
  //   jwt: async (arg) => {
  //     // console.log('JWT: ', arg)
  //     // arg -> token, user, account, profile
  //     const { token, user, account } = arg

  //     // arg props vary according to the provider
  //     if (account?.provider === 'google') {
  //       const { access_token: accessToken, id_token: idToken } = account

  //       return { ...token, ...user, accessToken, idToken }
  //     }

  //     return token
  //   },
  //   session: async (arg) => {
  //     // console.log('SESSION: ', arg)
  //     // arg -> session, token
  //     const { session, token } = arg
  //     const { user, error } = await getUserByEmail(token.email as string)

  //     if (error === null && user !== undefined) {
  //       const { _id, ...adaptedUser } = userAdapter(user)
  //       session.user = {
  //         ...session.user,
  //         ...adaptedUser,
  //         id: _id
  //       }
  //       session.token = {}
  //       session.token.accessToken = token.accessToken
  //       session.token.idToken = token.idToken
  //     }

  //     return session
  //   },
  //   signIn: async (arg) => {
  //     // console.log('SIGNIN: ', arg)
  //     const { account, profile } = arg
  //     try {
  //       if (account?.provider === 'google') {
  //         const { user } = await getUserByEmail(profile?.email as string)

  //         if (user !== undefined) return true

  //         if (profile !== undefined) {
  //           const registerData: RegisterFormValues = {
  //             firstName: profile.given_name,
  //             lastName: profile.family_name,
  //             birthday: new Date(1997, 3, 14),
  //             email: profile.email as string,
  //             password: 'Test1234',
  //             phone: '+54 11 123456789',
  //             role: 'volunteer',
  //             username: profile.sub as string
  //           }

  //           // TODO: handle res
  //           const { error } = await signupUser(registerData)
  //           if (error !== null) return false
  //           return true
  //         }
  //       }
  //       return true
  //     } catch (error) {
  //       console.log(error)
  //       return false
  //     }
  //   }
  // },
  // session: {
  //   strategy: 'jwt'
  // }
})

export { handler as GET, handler as POST }
