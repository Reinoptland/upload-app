import {GET_ALL_CONTRACTS, CONTRACT_DELETED} from '../actions/contracts'

const initialState = []

export default (state = initialState, {type, payload}) => {
  
  switch (type) {

      case  GET_ALL_CONTRACTS:
      return payload

      case CONTRACT_DELETED:
      return state.splice(payload.id)

    default:
      return state
  }
}
