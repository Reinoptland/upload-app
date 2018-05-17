import * as request from 'superagent'
import {baseUrl} from '../constants'
import {isExpired} from '../jwt'
import {logout} from './admins'

export const GET_ALL_USERS = "GET_ALL_USERS"

export const getUsers = () => (dispatch, getState) => {
  const state = getState()
  if (!state.currentAdmin) return null
  const jwt = state.currentAdmin.jwt

  if (isExpired(jwt)) return dispatch(logout())

  request
    .get(`${baseUrl}/users`)
    .set('Authorization', `Bearer ${jwt}`)
    .then(result => {
      dispatch({
        type: GET_ALL_USERS,
        payload: result.body
      })
    })
    .catch(err => console.error(err))
}

