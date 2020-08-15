import * as actionTypes from "./actionTypes";
export const fetchData = () => {
  return {
    type: actionTypes.FETCH_DATA,
  };
};
export const fetchDataStart = () => {
return{
  
  type: actionTypes.FETCH_DATA_START,
} 


  };

export const fetchDataSuccess = (payload) => {
  return {
    type: actionTypes.FETCH_DATA_SUCCESS,
    payload: payload,
  };
};
export const fetchDataFail = (error) => {
  return {
    type: actionTypes.FETCH_DATA_FAIL,
    error: error,
  };
};
export const setCountryName = (countryName) => {
  console.log("action set country name", countryName)
  return {
    type: actionTypes.SET_COUNTRY_NAME,
    countryName: countryName,
  };
};
