import {GET_USER} from '../actions/users'

/*
The state will contain the users in an object with the game ID as key
*/

export default (state = {}, {type, payload}) => {
  switch (type) {
    case GET_USER:
      return payload





    default:
      return state
  }}
