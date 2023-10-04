import CredentialsProvider from 'next-auth/providers/credentials'
import GoogleProvider from 'next-auth/providers/google'
import NextAuth from 'next-auth'
import { loginUser } from '@/services/auth/login.service'
import { signupUser } from '@/services/auth/signup.service'
import { getUserByEmail } from '@/services/user/get-user.service'
import { RegisterFormValues } from '@/interfaces/forms.interface'

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
        return user
      }
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID ?? '',
      clientSecret: process.env.GOOGLE_CLIENT_SECRET ?? ''
    })
  ],
  pages: {
    signIn: '/login'
  },
  callbacks: {
    // entra a jwt y session una vez que pasa signIng, si devuelve false no se accede a estas funciones
    jwt: async (arg) => {
      // console.log('JWT: ', arg)
      // arg -> token, user, account, profile
      const { token, user } = arg
      return { ...token, ...user }
    },
    session: async (arg) => {
      // console.log('SESSION: ', arg)
      // arg -> session, token
      const { session, token } = arg
      session.user = token as any
      return session
    },
    signIn: async (arg) => {
      // console.log('SIGNIN: ', arg)
      const { account, profile } = arg
      try {
        if (account?.provider === 'google') {
          const { user } = await getUserByEmail(profile?.email as string)
          if (user !== undefined) return true

          if (profile !== undefined) {
            const registerData: RegisterFormValues = {
              firstName: 'Manu Google',
              lastName: 'Fernandez Google',
              birthday: new Date(1997, 3, 14),
              email: profile.email as string,
              password: 'Test1234',
              phone: '+54 11 12345678',
              role: 'volunteer',
              username: profile.sub as string
            }

            // TODO: handle res
            const { error } = await signupUser(registerData)
            if (error !== null) return false
            return true
          }
        }
        return true
      } catch (error) {
        console.log(error)
        return false
      }
    }
  }
})

export { handler as GET, handler as POST }
