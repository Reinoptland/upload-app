import {ADMIN_LOGOUT, ADMIN_LOGIN_SUCCESS} from './actions/admins'
import {localStorageJwtKey} from './constants'

export const storeJwt = store => next => action => {
  try {
    if (action.type === ADMIN_LOGIN_SUCCESS) {
      localStorage.setItem(localStorageJwtKey, action.payload.jwt)
      localStorage.setItem('userId', action.payload.userId)
     
    }
    if (action.type === ADMIN_LOGOUT) {
      localStorage.removeItem(localStorageJwtKey)
    }
  }
  catch (e) {
    console.log(`Interaction with LocalStorage went wrong`, e)
  }

  next(action)
}
