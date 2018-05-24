import {GET_USER} from '../actions/users'

export default (state = [], {type, payload}) => {
  
  switch (type) { 
    
      case  GET_USER:
          return payload

      default:
          return state
          
  }
}