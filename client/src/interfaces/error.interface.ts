// This interface serves as a typesafe to parsed json errors object returned by signIn function from next-auth
// 'status' and 'ok' returned properties of signIn method does not work correctly
// docs about signIn() https://next-auth.js.org/getting-started/client#using-the-redirect-false-option
// docs about open issue https://github.com/nextauthjs/next-auth/issues/7638
export interface FetchError<S> {
  status: 'unhandled' | Partial<S>
  message: string
  serverError?: any
}
