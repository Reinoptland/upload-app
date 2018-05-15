import { GET_USER_BY_ID} from '../actions/images'
import {GET_ALL_USERS} from '../actions/images'

const initialState={}

export default (state = initialState, {type, payload}) => {
  
  switch (type) {
   
    case  GET_USER_BY_ID:
      {  
          return payload
      }
    
      case  GET_ALL_USERS:
      {  
          return payload
      }

    default:
      return state
  }
}
