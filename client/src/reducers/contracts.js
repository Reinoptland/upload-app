import {GET_ALL_CONTRACTS, CONTRACT_DELETED} from '../actions/contracts'

export default (state = [], {type, payload}) => {
  
  switch (type) {

      case  GET_ALL_CONTRACTS:
      return payload

      case CONTRACT_DELETED:
      return state.filter(contract => contract.id !== payload)

    default:
      return state
  }
}
