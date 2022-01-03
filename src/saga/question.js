import { call, put, takeLatest } from "redux-saga/effects";
import * as api from "../services/common.service";
import * as type from "../redux/types";
import { AppConst } from "../constants";

function* getLisetQuestion(action) {
  try {
    const response = yield call(api.getQuestions, action.payload);
    if (response.status === AppConst.STT_OK) {
      yield put({ type: "GET_LIST_QUESTION_SUCCESS", payload: response.data });
    } else {
      yield put({ type: "GET_LIST_QUESTION_FAILED", payload: response });
    }
  } catch (error) {
    yield put({ type: "GET_LIST_QUESTION_FAILED", payload: error });
  }
}

function* createQuestion(action) {
  try {
    const response = yield call(api.createQuestion, action.payload);
    if (response.status === AppConst.STT_OK) {
      yield put({
        type: "POST_CREATE_QUESTION_SUCCESS",
        payload: response.data,
      });
      try {
        const response = yield call(api.getQuestions, action.payload);
        if (response.status === AppConst.STT_OK) {
          yield put({
            type: "GET_LIST_QUESTION_SUCCESS",
            payload: response.data,
          });
        } else {
          yield put({ type: "GET_LIST_QUESTION_FAILED", payload: response });
        }
      } catch (error) {
        yield put({ type: "GET_LIST_QUESTION_FAILED", payload: error });
      }
    } else {
      yield put({ type: "POST_CREATE_QUESTION_FAILED", payload: response });
    }
  } catch (error) {
    yield put({ type: "POST_CREATE_QUESTION_FAILED", payload: error });
  }
}

function* deleteQuestion(action) {
  try {
    const response = yield call(api.deleteQuestion, action.payload);
    if (response.status === AppConst.STT_OK) {
      yield put({
        type: "DELETE_QUESTION_SUCCESS",
        payload: response.data,
      });
      try {
        const response = yield call(api.getQuestions, action.payload);
        if (response.status === AppConst.STT_OK) {
          yield put({
            type: "GET_LIST_QUESTION_SUCCESS",
            payload: response.data,
          });
        } else {
          yield put({ type: "GET_LIST_QUESTION_FAILED", payload: response });
        }
      } catch (error) {
        yield put({ type: "GET_LIST_QUESTION_FAILED", payload: error });
      }
    } else {
      yield put({ type: "DELETE_QUESTION_FAILED", payload: response });
    }
  } catch (error) {
    yield put({ type: "DELETE_QUESTION_FAILED", payload: error });
  }
}

function* getListQuestionSearch(action) {
  try {
    const response = yield call(api.searchQuestion, action.payload);
    if (response.status === AppConst.STT_OK) {
      yield put({ type: "SEARCH_QUESTION_SUCCESS", payload: response.data });
    } else {
      yield put({ type: "SEARCH_QUESTION_FAILED", payload: response });
    }
  } catch (error) {
    yield put({ type: "SEARCH_QUESTION_FAILED", payload: error });
  }
}

export function* questionSaga() {
  yield takeLatest(type.GET_LIST_QUESTION_REQUEST, getLisetQuestion);
  yield takeLatest(type.POST_CREATE_QUESTION_REQUEST, createQuestion);
  yield takeLatest(type.DELETE_QUESTION_REQUEST, deleteQuestion);
  yield takeLatest(type.SEARCH_QUESTION_REQUEST, getListQuestionSearch);
}
