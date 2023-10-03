// This import is necessary for type extension, otherwise an "not callable" error is displayed at '/app/api/auth/[...nextauth]/route.ts'
import 'next-auth'

// complete interface
declare module 'next-auth' {
  interface Session {
    user: {
      address: string
    }
  }
}
