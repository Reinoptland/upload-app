import {ADD_ADMIN} from '../actions/admins'

export default (state = null, {type, payload}) => {
  switch (type) {

    case ADD_ADMIN:
      return {
        ...state,
        [payload.id]: payload
      }

    default:
      return state
  }
}