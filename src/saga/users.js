import { call, put, takeLatest } from "redux-saga/effects";
import * as api from "../services/common.service";
import * as type from "../redux/types";
import { AppConst } from "../constants";

function* getListUser(action) {
  try {
    const response = yield call(api.getUser, action.payload);
    if (response.status === AppConst.STT_OK) {
      yield put({ type: "GET_LIST_USER_SUCCESS", payload: response.data });
    } else {
      yield put({ type: "GET_LIST_USER_FAILED", payload: response });
    }
  } catch (error) {
    yield put({ type: "GET_LIST_USER_FAILED", payload: error });
  }
}

function* createUser(action) {
  try {
    const response = yield call(api.createUser, action.payload);
    if (response.status === AppConst.STT_OK) {
      yield put({ type: "CREATE_USER_SUCCESS", payload: response.data });
      try {
        const response = yield call(api.getUser, { page: 1 });
        if (response.status === AppConst.STT_OK) {
          yield put({ type: "GET_LIST_USER_SUCCESS", payload: response.data });
        } else {
          yield put({ type: "GET_LIST_USER_FAILED", payload: response });
        }
      } catch (error) {
        yield put({ type: "GET_LIST_USER_FAILED", payload: error });
      }
    } else {
      yield put({ type: "CREATE_USER_FAILED", payload: response });
    }
  } catch (error) {
    yield put({ type: "CREATE_USER_FAILED", payload: error });
  }
}

function* deleteUser(action) {
  try {
    const response = yield call(api.deleteUser, action.payload);
    if (response.status === AppConst.STT_OK) {
      yield put({ type: "DELETE_USER_SUCCESS", payload: response.data });
      try {
        const response = yield call(api.getUser, { page: 1 });
        if (response.status === AppConst.STT_OK) {
          yield put({ type: "GET_LIST_USER_SUCCESS", payload: response.data });
        } else {
          yield put({ type: "GET_LIST_USER_FAILED", payload: response });
        }
      } catch (error) {
        yield put({ type: "GET_LIST_USER_FAILED", payload: error });
      }
    } else {
      yield put({ type: "DELETE_USER_FAILED", payload: response });
    }
  } catch (error) {
    yield put({ type: "DELETE_USER_FAILED", payload: error });
  }
}

function* searchUser(action) {
  try {
    const response = yield call(api.searchUser, action.payload);
    if (response.status === AppConst.STT_OK) {
      yield put({ type: "SEARCH_USER_SUCCESS", payload: response.data });
    } else {
      yield put({ type: "SEARCH_USER_FAILED", payload: response });
    }
  } catch (error) {
    yield put({ type: "SEARCH_USER_FAILED", payload: error });
  }
}

export function* userSaga() {
  yield takeLatest(type.GET_LIST_USER_REQUEST, getListUser);
  yield takeLatest(type.CREATE_USER_REQUEST, createUser);
  yield takeLatest(type.DELETE_USER_REQUEST, deleteUser);
  yield takeLatest(type.SEARCH_USER_REQUEST, searchUser);
}
