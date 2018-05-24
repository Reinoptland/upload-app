import {GET_CONTRACT_IMAGE, UPDATE_CONTRACTS} from '../actions/contracts'

export default (state = [], {type, payload}) => {
  
  switch (type) {   
      case  GET_CONTRACT_IMAGE:
          return payload

      case UPDATE_CONTRACTS:
           return {...state, uploadStatus:payload.uploadStatus}
      
    default:
      return state
  }
}