import * as request from 'superagent'
import {baseUrl} from '../constants'
import {logout} from './admins'
import {isExpired} from '../jwt'

export const GET_CONTRACTS_BY_ID = "GET_CONTRACTS_BY_ID"
export const GET_ALL_CONTRACTS = "GET_ALL_CONTRACTS"

export const getUserDetails = (userid) => (dispatch, getState) => {

  const state = getState()
  if (!state.currentAdmin) 
    return null
  const jwt = state.currentAdmin.jwt

  if (isExpired(jwt)) 
    return dispatch(logout())
  request
    .get(`${baseUrl}/contracts/${userid}`)
    .set('Authorization', `Bearer ${jwt}`)
    .then(result => dispatch({type: GET_CONTRACTS_BY_ID, payload: result.body}))
    .catch(err => console.error(err))
}

export const getAllContracts = () => (dispatch, getState) => {

  const state = getState()
  if (!state.currentAdmin) 
    return null
  const jwt = state.currentAdmin.jwt

  if (isExpired(jwt)) 
    return dispatch(logout())
  request
    .get(`${baseUrl}/contracts`)
    .set('Authorization', `Bearer ${jwt}`)
    .then(result => dispatch({type: GET_ALL_CONTRACTS, payload: result.body}))
    .catch(err => console.error(err))
}

export const submitStatus = (uploadState) => (dispatch, getState) => {

  const state = getState()
  if (!state.currentAdmin) 
    return null
  const jwt = state.currentAdmin.jwt

  if (isExpired(jwt)) 
    return dispatch(logout())
  request
    .patch(`${baseUrl}/contracts/${uploadState.id}/status`)
    .set('Authorization', `Bearer ${jwt}`)
    .send({uploadStatus: uploadState.uploadStatus})
    .catch(err => console.error(err))
}