import * as request from 'superagent'
import {baseUrl} from '../constants'
import {logout} from './users'
import {isExpired} from '../jwt'

export const GET_ALL_CONTRACTS = "GET_ALL_CONTRACTS"
export const GET_CONTRACT_IMAGE="GET_CONTRACT_IMAGE"
export const CONTRACT_DELETED = "CONTRACT_DELETED"


export const getAllContracts = (userId) => (dispatch, getState)  => {

  const state = getState()
  if (!state.currentUser) return null
  const jwt = state.currentUser.jwt

  if (isExpired(jwt)) return dispatch(logout())
    request
      .get(`${baseUrl}/contracts/${userId}`)
      .set('Authorization', `Bearer ${jwt}`)
      .then(result => dispatch(  {type: GET_ALL_CONTRACTS,
            payload: result.body}))
      .catch(err => console.error(err))
}

export const getContractImage = (userid, image) => (dispatch, getState)  => {

    const state = getState()
    if (!state.currentUser) return null
    const jwt = state.currentUser.jwt

    if (isExpired(jwt)) return dispatch(logout())

    request
      .get(`${baseUrl}/contracts/${userid}/${image}`)
      .set('Authorization', `Bearer ${jwt}`)
      .then(result => dispatch({type: GET_CONTRACT_IMAGE, payload: result.body}))
      .catch(err => console.error(err))
}

export const deleteContract = (id) => (dispatch, getState) => {

  const state = getState()
  if (!state.currentUser) return null
  const jwt = state.currentUser.jwt

  if (isExpired(jwt)) return dispatch(logout())

  request
    .delete(`${baseUrl}/contracts/${id}`)
    .set('Authorization', `Bearer ${jwt}`)
    .then(response => {
      dispatch({
        type: CONTRACT_DELETED,
        payload: id
      })
    })
    .catch(err => console.error(err))
}
