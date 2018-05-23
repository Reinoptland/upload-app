import {GET_CONTRACT_IMAGE} from '../actions/contracts'

const initialState=[]

export default (state = initialState, {type, payload}) => {
  
  switch (type) {
   
    
      case  GET_CONTRACT_IMAGE:
      {  
          return payload
      }

    default:
      return state
  }
}