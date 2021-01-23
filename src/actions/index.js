import axios from 'axios';

export const GET_SMURF_DATA_START = "GET_SMURF_DATA_START"
export const GET_SMURF_DATA_SUCCESS = "GET_SMURF_DATA_SUCCESS"
export const GET_SMURF_DATA_FAILURE = "GET_SMURF_DATA_FAILURE"

export const ADD_SMURF = "ADD_SMURF"
export const ADD_SMURF_FAIL = "ADD_SMURF_FAIL"
export const POST_SMURF_DATA_FAILURE = "POST_SMURF_DATA_FAILURE"


export const getSmurfData = () => {
    return (dispatch) => {
        dispatch({type:GET_SMURF_DATA_START})

        setTimeout(() => {              //using setTimeout to check if loading page is working
            axios
                .get('http://localhost:3333/smurfs')
                .then((res) => {
                    console.log('success', res)
                    dispatch({type:GET_SMURF_DATA_SUCCESS, payload: res.data})
                })
                .catch((err) => {
                    console.log(err)
                    dispatch({type:GET_SMURF_DATA_FAILURE, payload: err})
                })
        }, 1500)

        // axios
        //     .get('http://localhost:3333/smurfs')
        //     .then((res) => {
        //         console.log('success', res)
        //         dispatch({type:GET_SMURF_DATA_SUCCESS, payload: res.data})
        //     })
        //     .catch((err) => {
        //         console.log(err)
        //         dispatch({type:GET_SMURF_DATA_FAILURE, payload: err})
        //     })
    }
}

export const postSmurfData = (obj) => dispatch => {
    if (!obj.name || !obj.position || !obj.nickname) {
        dispatch({type: ADD_SMURF_FAIL,  payload: `Please fill out required fields - ${!obj.name ? " name" : ""} ${!obj.position ? " position" : ""} ${!obj.nickname ? " nickname" : ""}`})
    }
    else {
        axios
            .post("http://localhost:3333/smurfs", obj)
            .then(res => {
                console.log(res);
                dispatch({type: ADD_SMURF, payload: obj});
            })
            .catch(err => {
                console.log(err.message)
                dispatch({type: ADD_SMURF_FAIL, payload: err.message})
            })
    }
}

export const errorText = () => dispatch => {
    dispatch({type: ADD_SMURF_FAIL})
}



//Task List:
//1. Add fetch smurfs action: 
//              - fetch and return initial list of smurfs
//              - dispatch actions that indicate if we are waiting for a server response
//              - dispatch an error text action if an error is returned from the server
//2. Add add smurf action:
//              - dispatch an error text action if smurf data does not includes a name, nickname and position field
//              - send a post request with the smurf as body to see if there is an error
//              - dispatch add smurf action if request is successful
//              - dispatch an error text action if an request returns an error
//3. Add set error text action:
//              - return action object setting error text
//4. Any other actions you deem nessiary to complete application.