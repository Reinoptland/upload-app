import {ADD_ADMIN} from '../actions/admins'

/*
The state will contain the ADMINs in an object with the game ID as key
*/

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