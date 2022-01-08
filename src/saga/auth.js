import { call, put, takeLatest } from "redux-saga/effects";
import * as api from "../services/auth.service";
import * as type from "../redux/types";
import { AppConst } from "../constants";

function* login(action) {
  try {
    const response = yield call(api.login, action.payload);
    if (response.status === AppConst.STT_OK) {
      yield put({ type: "POST_LOGIN_SUCCESS", payload: response.data });
      localStorage.setItem(
        AppConst.USER_PROFILE,
        JSON.stringify(response.data)
      );
    } else {
      yield put({ type: "POST_LOGIN_FAILED", response });
    }
  } catch (error) {
    yield put({ type: "POST_LOGIN_FAILED", payload: error });
  }
}

function* register(action) {
  try {
    const response = yield call(api.register, action.payload);
    if (response.status === AppConst.STT_OK) {
      yield put({ type: "POST_REGISTER_SUCCESS", payload: response.data });
    } else {
      yield put({ type: "POST_REGISTER_FAILED", payload: response });
    }
  } catch (error) {
    yield put({ type: "POST_REGISTER_FAILED", payload: error });
  }
}

export function* authSaga() {
  yield takeLatest(type.POST_LOGIN_REQUESTED, login);
  yield takeLatest(type.POST_REGISTER_REQUESTED, register);
}
