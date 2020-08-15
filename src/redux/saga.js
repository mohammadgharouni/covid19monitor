import {
  takeEvery,
  select,
  put,
  call,
  takeLatest,
  take,
} from "redux-saga/effects";
import * as actionTypes from "./actionTypes";
import axios from "axios";
import { fetchDataStart, fetchDataSuccess, fetchDataFail } from "./action";

function* fetchNews() {
  try {
    const state = yield select();
    console.log(state,"state in sagaaaaaaaaaa")
    yield put(fetchDataStart());
    let resp = yield call(() =>
      axios.get(`https://services1.arcgis.com/0MSEUqKaxRlEPj5g/arcgis/rest/services/ncov_cases/FeatureServer/2/query?f=json&where=Confirmed%20%3E%200&returnGeometry=false&spatialRel=esriSpatialRelIntersects&outFields=*&orderByFields=Confirmed%20desc&resultOffset=0&resultRecordCount=200&cacheHint=true`)
    );
    yield put(fetchDataSuccess(resp.data));
  } catch (error) {
    yield put(fetchDataFail(error));
  }
}

function* mySaga() {
  yield takeEvery(actionTypes.FETCH_DATA, fetchNews);
}

export default mySaga;
