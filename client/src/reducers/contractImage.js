import {GET_CONTRACT_IMAGE} from '../actions/contracts'

export default (state = {}, {type, payload}) => {
  
  switch (type) {
   
    case  GET_CONTRACT_IMAGE: 
        return payload

    default:
      return state
  }
}