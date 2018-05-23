import {GET_ALL_CONTRACTS, UPDATE_CONTRACTS} from '../actions/contracts'

const initialState=[]

export default (state = initialState, {type, payload}) => {
  
  switch (type) {
   
    
      case  GET_ALL_CONTRACTS:
          return payload
      case UPDATE_CONTRACTS:
          return {...state,
          ...payload}

    default:
      return state
  }
}
