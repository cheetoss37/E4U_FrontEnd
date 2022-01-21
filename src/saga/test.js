import { call, put, takeLatest } from "redux-saga/effects";
import * as api from "../services/common.service";
import * as type from "../redux/types";
import { AppConst } from "../constants";

function* getAllTest(action) {
  try {
    const response = yield call(api.getTestsList, action.payload);
    if (response.status === AppConst.STT_OK) {
      yield put({ type: "GET_ALL_TEST_SUCCESS", payload: response.data });
    } else {
      yield put({ type: "GET_ALL_TEST_FAILED", payload: response });
    }
  } catch (error) {
    yield put({ type: "GET_ALL_TEST_FAILED", payload: error });
  }
}

function* getPublicTest(action) {
  try {
    const response = yield call(api.getListTest, action.payload);
    if (response.status === AppConst.STT_OK) {
      yield put({ type: "GET_PUBLIC_TEST_SUCCESS", payload: response.data });
    } else {
      yield put({ type: "GET_PUBLIC_TEST_FAILED", payload: response });
    }
  } catch (error) {
    yield put({ type: "GET_PUBLIC_TEST_FAILED", payload: error });
  }
}

function* executeTestNumber(action) {
  try {
    const response = yield call(api.getExecuteTestNumber, action.payload);
    if (response.status === AppConst.STT_OK) {
      yield put({
        type: "GET_TEST_EXECUTE_NUMBER_SUCCESS",
        payload: response.data,
      });
    } else {
      yield put({ type: "GET_TEST_EXECUTE_NUMBER_FAILED", payload: response });
    }
  } catch (error) {
    yield put({ type: "GET_TEST_EXECUTE_NUMBER_FAILED", payload: error });
  }
}

function* getTestDetail(action) {
  try {
    const response = yield call(api.getDetail, action.payload);
    if (response.status === AppConst.STT_OK) {
      yield put({ type: "GET_TEST_DETAIL_SUCCESS", payload: response.data });
    } else {
      yield put({ type: "GET_TEST_DETAIL_FAILED", payload: response });
    }
  } catch (error) {
    yield put({ type: "GET_TEST_DETAIL_FAILED", payload: error });
  }
}

function* getListTestSearch(action) {
  try {
    const response = yield call(api.searchTest, action.payload);
    if (response.status === AppConst.STT_OK) {
      yield put({ type: "SEARCH_TEST_SUCCESS", payload: response.data });
    } else {
      yield put({ type: "SEARCH_TEST_FAILED", payload: response });
    }
  } catch (error) {
    yield put({ type: "SEARCH_TEST_FAILED", payload: error });
  }
}

function* createTest(action) {
  try {
    const response = yield call(api.createTest, action.payload);
    if (response.status === AppConst.STT_OK) {
      yield put({ type: "CREATE_TEST_SUCCESS", payload: response.data });
    } else {
      yield put({ type: "CREATE_TEST_FAILED", payload: response });
    }
  } catch (error) {
    yield put({ type: "CREATE_TEST_FAILED", payload: error });
  }
}

function* deleteTest(action) {
  try {
    const response = yield call(api.deleteTest, action.payload);
    if (response.status === AppConst.STT_OK) {
      yield put({ type: "DELETE_TEST_SUCCESS", payload: response.data });
      try {
        const response = yield call(api.getTestsList, action.payload);
        if (response.status === AppConst.STT_OK) {
          yield put({ type: "GET_ALL_TEST_SUCCESS", payload: response.data });
        } else {
          yield put({ type: "GET_ALL_TEST_FAILED", payload: response });
        }
      } catch (error) {
        yield put({ type: "GET_ALL_TEST_FAILED", payload: error });
      }
    } else {
      yield put({ type: "DELETE_TEST_FAILED", payload: response });
    }
  } catch (error) {
    yield put({ type: "DELETE_TEST_FAILED", payload: error });
  }
}

function* editTest(action) {
  try {
    const response = yield call(api.updateTest, action.payload);
    if (response.status === AppConst.STT_OK) {
      yield put({
        type: "UPDATE_TEST_SUCCESS",
        payload: response.data,
      });
      try {
        const response = yield call(api.getTestsList, action.payload);
        if (response.status === AppConst.STT_OK) {
          yield put({
            type: "GET_ALL_TEST_SUCCESS",
            payload: response.data,
          });
        } else {
          yield put({ type: "GET_ALL_TEST_FAILED", payload: response });
        }
      } catch (error) {
        yield put({ type: "GET_ALL_TEST_FAILED", payload: error });
      }
    } else {
      yield put({ type: "UPDATE_TEST_FAILED", payload: response });
    }
  } catch (error) {
    yield put({ type: "UPDATE_TEST_FAILED", payload: error });
  }
}

export function* testSaga() {
  yield takeLatest(type.GET_ALL_TEST_REQUEST, getAllTest);
  yield takeLatest(type.GET_PUBLIC_TEST_REQUEST, getPublicTest);
  yield takeLatest(type.GET_TEST_DETAIL_REQUEST, getTestDetail);
  yield takeLatest(type.SEARCH_TEST_REQUEST, getListTestSearch);
  yield takeLatest(type.CREATE_TEST_REQUEST, createTest);
  yield takeLatest(type.DELETE_TEST_REQUEST, deleteTest);
  yield takeLatest(type.UPDATE_TEST_REQUEST, editTest);
  yield takeLatest(type.GET_TEST_EXECUTE_NUMBER_REQUEST, executeTestNumber);
}
