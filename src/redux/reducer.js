import * as actionTypes from "./actionTypes"
const initialState = {
    loading: false,
    error: null,
    payload: null,
    countryName:"Iran",
    fetchFinish:false
}

export default(state = initialState, action) => {
    switch (action.type) {
        
        case actionTypes.SET_COUNTRY_NAME:
            console.log(action.countryName,"payload in reducer")
            return {
                ...state,
                countryName: action.countryName
            }

        case actionTypes.FETCH_DATA_START:
            return {
                ...state,
                loading: true
            }

     
        case actionTypes.FETCH_DATA_SUCCESS:
            return {
                ...state,
                loading: false,
                payload: action.payload,
                fetchFinish:true
            }
        case actionTypes.FETCH_DATA_FAIL:
            return {
                ...state,
                loading: false,
                error: action.error
            }

        default:
            return state
    }
}
