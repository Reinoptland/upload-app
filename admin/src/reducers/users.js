import {GET_ALL_USERS} from '../actions/users'

const initialState=[]

export default (state = initialState, {type, payload}) => {
  
  switch (type) {
   
    case  GET_ALL_USERS:
       return payload
      
    default:
      return state
  }
}