import * as request from 'superagent'
import {baseUrl} from '../constants'
import {logout} from './users'
import {isExpired} from '../jwt'

export const GET_CONTRACTS_BY_ID="GET_CONTRACTS_BY_ID"
export const GET_ALL_CONTRACTS="GET_ALL_CONTRACTS"

export const getUserDetails =(userid)=> (dispatch,getState)  => {
    
    const state = getState()
    if (!state.currentUser) return null
     const jwt = state.currentUser.jwt
  
     if (isExpired(jwt)) return dispatch(logout())
      request
        .get(`${baseUrl}/users/${userid}`)
        .set('Authorization', `Bearer ${jwt}`)
        .then(result => dispatch(  {type: GET_CONTRACTS_BY_ID,
          payload: result.body}))
        .catch(err => console.error(err))
    }


    export const getAllContracts =()=> (dispatch,getState)  => {
    
        const state = getState()
        if (!state.currentUser) return null
         const jwt = state.currentUser.jwt
      
         if (isExpired(jwt)) return dispatch(logout())
          request
            .get(`${baseUrl}/contracts`)
            .set('Authorization', `Bearer ${jwt}`)
            .then(result => dispatch(  {type: GET_ALL_CONTRACTS,
              payload: result.body}))
            .catch(err => console.error(err))
        }
    