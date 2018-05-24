import * as request from 'superagent'
import {baseUrl} from '../constants'

export const ADD_ADMIN = 'ADD_ADMin'
export const ADMIN_LOGIN_SUCCESS = 'ADMIN_LOGIN_SUCCESS'
export const ADMIN_LOGIN_FAILED = 'ADMIN_LOGIN_FAILED'
export const ADMIN_SIGNUP_SUCCESS = 'ADMIN_SIGNUP_SUCCESS'
export const ADMIN_SIGNUP_FAILED = 'ADMIN_SIGNUP_FAILED'
export const ADMIN_LOGOUT = 'ADMIN_LOGOUT'

export const logout = () => ({

	type: ADMIN_LOGOUT
	
})

export const login = (email, password) => (dispatch) =>

	request
		.post(`${baseUrl}/loginsAdmin`)
    .send({email, password})
    .then(result => {
      dispatch({

        type: ADMIN_LOGIN_SUCCESS,
				payload: result.body
				
      })
    })
    .catch(err => {
    	if (err.status === 400) {

    		dispatch({
    			type: ADMIN_LOGIN_FAILED,
    			payload: err.response.body.message || 'Unknown error'
				})
				
			}
			
    	else {
    		console.error(err)
    	}
  })


export const signup = (email, password, privacy) => (dispatch) => {

  request
		.post(`${baseUrl}/admins`)
		.send({ email, password, privacy })
		.then(result => {
			dispatch({

				type: ADMIN_SIGNUP_SUCCESS

			})
		})
		.catch(err => {
			if (err.status === 400) {
				dispatch({

					type: ADMIN_SIGNUP_FAILED,
					payload: err.response.body.message || 'Unknown error'

				})
			}
			else {
				console.error(err)
			}
		})
}

