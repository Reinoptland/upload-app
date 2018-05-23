import {GET_ALL_CONTRACTS} from '../actions/contracts'

const initialState=[]

export default (state = initialState, {type, payload}) => {
  
  switch (type) {
   
    
      case  GET_ALL_CONTRACTS:
          return payload

    default:
      return state
  }
}
