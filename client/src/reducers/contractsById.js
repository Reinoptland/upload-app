import {GET_CONTRACTS_BY_ID} from '../actions/contracts'

const initialState = []

export default(state = initialState, {type, payload}) => {

    switch (type) {

        case GET_CONTRACTS_BY_ID:
            {
                return payload
            }

        default:
            return state
    }
}
