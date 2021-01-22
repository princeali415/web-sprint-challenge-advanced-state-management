import {GET_SMURF_DATA_START, GET_SMURF_DATA_SUCCESS, GET_SMURF_DATA_FAILURE,
ADD_SMURF, POST_SMURF_DATA_FAILURE, POST_SMURF_DATA_SUCCESS} from '../actions/index'

export const initialState = {
    smurfs: [],
    isLoading: false,
    error: "",
    
}

const reducer = (state = initialState, action)=>{
    switch(action.type){
        case GET_SMURF_DATA_START:
            return {
                ...state,
                isLoading: true,
                error: '',
            }
        case GET_SMURF_DATA_SUCCESS:
            return {
                ...state,
                isLoading: false,
                smurfs: action.payload
            }
        case GET_SMURF_DATA_FAILURE:
            return {
                ...state,
                isLoading: false,
                error: action.payload,
            }
        case ADD_SMURF:
            return {
                ...state,
                smurfs: [...state.smurfs, action.payload],
                isPosting: true,
            }
        case POST_SMURF_DATA_SUCCESS:
            return {
                ...state,
                isPosting: false,
            }
        case POST_SMURF_DATA_FAILURE:
            return {
                ...state,
                error: action.payload,
                isPosting: false,
            }
        default:
            return state
    }
}

export default reducer;
//Task List:
//1. Add in the initialState needed to hold: 
//      - an array of smurfs
//      - a boolean indicating if the app is loading
//      - error text
//2. Setup your reducer to take the state and action as peremeters
//3. Add in cases to your reducer to handle:
//      - The start of an api call
//      - The end of an api call
//      - The adding a smurf to the smurf list when added into payload
//      - Setting Error Text
//      - Any other state changes you see as necessary