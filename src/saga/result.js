import { call, put, takeLatest } from "redux-saga/effects";
import * as api from "../services/common.service";
import * as type from "../redux/types";
import { AppConst } from "../constants";

function* postResult(action) {
  try {
    const response = yield call(api.postResult, action.payload);
    if (response.status === AppConst.STT_OK) {
      yield put({ type: "POST_RESULT_SUCCESS", payload: response.data });
    } else {
      yield put({ type: "POST_RESULT_FAILED", payload: response });
    }
  } catch (error) {
    yield put({ type: "POST_RESULT_FAILED", payload: error });
  }
}

function* getlistResult(action) {
  try {
    const response = yield call(api.getListResult, action.payload);
    if (response.status === AppConst.STT_OK) {
      yield put({ type: "GET_LIST_RESULT_SUCCESS", payload: response.data });
    } else {
      yield put({ type: "GET_LIST_RESULT_FAILED", payload: response });
    }
  } catch (error) {
    yield put({ type: "GET_LIST_RESULT_FAILED", payload: error });
  }
}

function* getResultDetail(action) {
  try {
    const response = yield call(api.getListResult, action.payload);
    if (response.status === AppConst.STT_OK) {
      yield put({ type: "GET_RESULT_DETAIL_SUCCESS", payload: response.data });
    } else {
      yield put({ type: "GET_RESULT_DETAIL_FAILED", payload: response });
    }
  } catch (error) {
    yield put({ type: "GET_RESULT_DETAIL_FAILED", payload: error });
  }
}

export function* resultSaga() {
  yield takeLatest(type.POST_RESULT_REQUEST, postResult);
  yield takeLatest(type.GET_LIST_RESULT_REQUEST, getlistResult);
  yield takeLatest(type.GET_RESULT_DETAIL_REQUEST, getResultDetail);
}
