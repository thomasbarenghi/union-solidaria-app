// This is an example of how to read a JSON Web Token from an API route
import { getToken } from 'next-auth/jwt'
import { NextRequest } from 'next/server'

const handler = async (req: NextRequest) => {
  // TODO: getToken doesn't work correctly, it returns 'null'
  const token = await getToken({ req })
  console.log('JSON Web Token', token)
  return token
}

export { handler as GET, handler as POST }
