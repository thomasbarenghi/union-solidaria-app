import Endpoints from '@/utils/constants/endpoints.const'
import store from '@/redux/store'
import { updateCurrentUser } from '@/redux/slices/authSession'

export const loggedUserReduxMiddleware = (url: string, res: any) => {
  const { username } = store.getState().authSession.session
  const expectedUrl = Endpoints.USER_BY_ID(username)
  if (url === expectedUrl) {
    console.log('reduxMiddleware', res)
    store.dispatch(updateCurrentUser(res))
  }
  return res
}
