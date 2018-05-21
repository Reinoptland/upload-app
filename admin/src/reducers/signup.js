import {
	ADMIN_SIGNUP_SUCCESS, ADMIN_SIGNUP_FAILED
} from '../actions/admins'

export default function (state = {}, {type, payload}) {
	switch(type) {
    case ADMIN_SIGNUP_SUCCESS:
      return {
        success: true
      }

    case ADMIN_SIGNUP_FAILED:
      return {
        error: payload
      }

		default:
      return state
	}
}
