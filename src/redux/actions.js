import * as type from "./types";

export const postLoginStart = (users) => ({
  type: type.POST_LOGIN_REQUESTED,
  payload: users,
});

export const postLoginSuccess = (users) => ({
  type: type.POST_LOGIN_SUCCESS,
  payload: users,
});

export const postLoginFailed = (error) => ({
  type: type.POST_LOGIN_FAILED,
  payload: error,
});

export const postRegisterStart = (users) => ({
  type: type.POST_REGISTER_REQUESTED,
  payload: users,
});

export const postRegisterSuccess = (users) => ({
  type: type.POST_REGISTER_SUCCESS,
  payload: users,
});

export const postRegisterDailed = (error) => ({
  type: type.POST_REGISTER_FAILED,
  payload: error,
});

export const reset = () => ({
  type: type.RESET,
});

//Do-test

export const setSelectedQuestion = (question) => ({
  type: type.SET_SELECTED_QUESTION,
  payload: question,
});

export const setListQuestion = (listQuestion) => ({
  type: type.SET_LIST_QUESTION,
  payload: listQuestion,
});

export const setTestData = (test) => ({
  type: type.SET_TEST_DATA,
  payload: test,
});
