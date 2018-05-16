import * as request from 'superagent'
import {baseUrl} from '../constants'
import {logout} from './users'
import {isExpired} from '../jwt'

export const GET_USER_BY_ID="GET_USER_BY_ID"
export const GET_ALL_USERS="GET_ALL_USERS"

export const getUserDetails =(userid)=> (dispatch,getState)  => {
    
    const state = getState()
    if (!state.currentUser) return null
     const jwt = state.currentUser.jwt
  
     if (isExpired(jwt)) return dispatch(logout())
      request
        .get(`${baseUrl}/users/${userid}`)
        .set('Authorization', `Bearer ${jwt}`)
        .then(result => dispatch(  {type: GET_USER_BY_ID,
          payload: result.body}))
        .catch(err => console.error(err))
    }


    export const getAllUsers =()=> (dispatch,getState)  => {
    
        const state = getState()
        if (!state.currentUser) return null
         const jwt = state.currentUser.jwt
      
         if (isExpired(jwt)) return dispatch(logout())
          request
            .get(`${baseUrl}/users`)
            .set('Authorization', `Bearer ${jwt}`)
            .then(result => dispatch(  {type: GET_ALL_USERS,
              payload: result.body}))
            .catch(err => console.error(err))
        }
    