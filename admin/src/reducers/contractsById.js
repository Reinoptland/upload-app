import {GET_CONTRACTS_BY_ID} from '../actions/contracts'

export default (state = [], {type, payload}) => {

    switch (type) {

        case GET_CONTRACTS_BY_ID:
            {
                return payload
            }
       
        default:
            return state
    }
}
