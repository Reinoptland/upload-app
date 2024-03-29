import * as request from 'superagent'
import {baseUrl} from '../constants'
import {isExpired} from '../jwt'
import {logout} from './users'

export const UPLOAD_SUCCESS = 'UPLOAD_SUCCESS'
export const UPLOAD_FAILED = 'UPLOAD_FAILED'
export const UPDATE_UPLOADS = 'UPDATE_UPLOADS'
export const UPLOADING_FILE = 'UPLOADING_FILE'

export const upload = (userId, contracten, type, provider, uploadStatus) => (dispatch, getState) => {
    const state = getState()
    const jwt = state.currentUser.jwt
  
    if (isExpired(jwt)) return dispatch(logout())
    
    contracten.map(file => { 

    return request
      .post(`${baseUrl}/contracts/${userId}`)
      .set('Authorization', `Bearer ${jwt}`)
      .attach('file',file)
      .field('type',type)
      .field('provider',provider)
      .field('uploadStatus', uploadStatus)
      .then(res => {
          console.log(res)
        dispatch({
          type: UPLOAD_SUCCESS,
          payload: res.body
        })
      })
      .catch(err => {
        dispatch({
          type: UPLOAD_FAILED,
          payload: 'upload mislukt'
        })
      })
    })
  }
  

export const getUploads = (id) => (dispatch, getState) => {
  const state = getState()
  if (!state.currentUser) return null
  const jwt = state.currentUser.jwt

  if (isExpired(jwt)) return dispatch(logout())

  request
    .get(`${baseUrl}/uploads/${id}`)
    .set('Authorization', `Bearer ${jwt}`)
    .then(result => {
      dispatch({
        type: UPDATE_UPLOADS,
        payload: result.body
      })
    })
    .catch(err => console.error(err))
}

export const uploading = () => ({
  type: UPLOADING_FILE
})
