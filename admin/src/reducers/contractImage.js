import {GET_CONTRACT_IMAGE, UPDATE_CONTRACTS} from '../actions/contracts'

export default (state = [], {type, payload}) => {
  
  switch (type) {   
      case  GET_CONTRACT_IMAGE:{
          console.log('payload getcontimage',payload)
          return payload}

        case UPDATE_CONTRACTS:
           // return {...state, ...payload}
           return {...state, uploadStatus:payload.uploadStatus}
      
    default:
      return state
  }
}