import {GET_CONTRACTS_BY_ID} from '../actions/contracts'
import {UPDATE_CONTRACTS} from '../actions/contracts'

const initialState = [{
    id:" ",
    userId:" ",
    contractImage:" ",
    contractType:" ",
    contractProvider:" ",
    uploadStatus:" "
}]

export default (state = [], {type, payload}) => {

    switch (type) {

        case GET_CONTRACTS_BY_ID:
            {
                return payload
            }
       
        case UPDATE_CONTRACTS:
        {   
            
            //return [{...state, [state.uploadStatus]:payload.uploadStatus}]
            const contractIndex=state.map((eachcontract,index)=>{
                if(eachcontract.id===payload.id){
                    return index
                }
                
            })
            
            //console.log(updatedIndex)
            console.log("index",contractIndex)

    return [...state, state[contractIndex].uploadStatus=payload.uploadStatus]
    
        }

        default:
            return state
    }
}
