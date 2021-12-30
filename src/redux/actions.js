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

export const postRegisterFailed = (error) => ({
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

//question
export const createQuestionRequest = (question) => ({
  type: type.POST_CREATE_QUESTION_REQUEST,
  payload: question,
});

export const createQuestionSuccess = (question) => ({
  type: type.POST_CREATE_QUESTION_SUCCESS,
  payload: question,
});

export const createQuestionFailed = (error) => ({
  type: type.POST_CREATE_QUESTION_FAILED,
  payload: error,
});

export const updateQuestionRequest = (question) => ({
  type: type.UPDATE_QUESTION_REQUEST,
  payload: question,
});

export const updateQuestionSuccess = (question) => ({
  type: type.UPDATE_QUESTION_SUCCESS,
  payload: question,
});

export const updateQuestionFailed = (error) => ({
  type: type.UPDATE_QUESTION_FAILED,
  payload: error,
});

export const deleteQuestionRequest = (question) => ({
  type: type.DELETE_QUESTION_REQUEST,
  payload: question,
});

export const deleteQuestionSuccess = (question) => ({
  type: type.DELETE_QUESTION_SUCCESS,
  payload: question,
});

export const deleteQuestionFailed = (error) => ({
  type: type.DELETE_QUESTION_FAILED,
  payload: error,
});

export const searchQuestionRequest = (data) => ({
  type: type.SEARCH_QUESTION_REQUEST,
  payload: data,
});

export const searchQuestionSuccess = (data) => ({
  type: type.SEARCH_QUESTION_SUCCESS,
  payload: data,
});

export const searchQuestionFaled = (error) => ({
  type: type.SEARCH_QUESTION_FAILED,
  payload: error,
});

export const getListQuestionRequest = (question) => ({
  type: type.GET_LIST_QUESTION_REQUEST,
  payload: question,
});

export const getListQuestionSuccess = (question) => ({
  type: type.GET_LIST_QUESTION_SUCCESS,
  payload: question,
});

export const getListQuestionFailed = (error) => ({
  type: type.GET_LIST_QUESTION_FAILED,
  payload: error,
});

export const getQuestionDetailRequest = (question) => ({
  type: type.GET_QUESTION_DETAIL_REQUEST,
  payload: question,
});

export const getQuestionDetailSuccess = (question) => ({
  type: type.GET_QUESTION_DETAIL_SUCCESS,
  payload: question,
});

export const getQuestionDetailFailed = (error) => ({
  type: type.GET_QUESTION_DETAIL_FAILED,
  payload: error,
});

//test

export const getAllTestRequest = (test) => ({
  type: type.GET_ALL_TEST_REQUEST,
  payload: test,
});

export const getAllTestSuccess = (test) => ({
  type: type.GET_ALL_TEST_SUCCESS,
  payload: test,
});

export const getAllTestFailed = (error) => ({
  type: type.GET_ALL_TEST_FAILED,
  payload: error,
});

export const getPublicTestRequest = (test) => ({
  type: type.GET_PUBLIC_TEST_REQUEST,
  payload: test,
});

export const getPublicTestSuccess = (test) => ({
  type: type.GET_PUBLIC_TEST_SUCCESS,
  payload: test,
});

export const getPublicTestFailed = (error) => ({
  type: type.GET_PUBLIC_TEST_FAILED,
  payload: error,
});

export const getTestDetail = (test) => ({
  type: type.GET_TEST_DETAIL_REQUEST,
  payload: test,
});

export const getTestSuccess = (test) => ({
  type: type.GET_TEST_DETAIL_SUCCESS,
  payload: test,
});

export const getTestDetailFailed = (error) => ({
  type: type.GET_TEST_DETAIL_FAILED,
  payload: error,
});

export const createTestRequest = (test) => ({
  type: type.CREATE_TEST_REQUEST,
  payload: test,
});

export const createTestSuccess = (test) => ({
  type: type.CREATE_TEST_SUCCESS,
  payload: test,
});

export const createTestFailed = (error) => ({
  type: type.CREATE_TEST_FAILED,
  payload: error,
});

export const updateTestRequest = (test) => ({
  type: type.UPDATE_TEST_REQUEST,
  payload: test,
});

export const updateTestSuccess = (test) => ({
  type: type.UPDATE_TEST_SUCCESS,
  payload: test,
});

export const updateTestFailed = (error) => ({
  type: type.UPDATE_TEST_FAILED,
  payload: error,
});

export const deleteTestRequest = (test) => ({
  type: type.DELETE_TEST_REQUEST,
  payload: test,
});

export const deleteTestSuccess = (test) => ({
  type: type.DELETE_TEST_SUCCESS,
  payload: test,
});

export const deleteTestFailed = (error) => ({
  type: type.DELETE_TEST_FAILED,
  payload: error,
});

export const publishTestRequest = (test) => ({
  type: type.PUBLISH_TEST_REQUEST,
  payload: test,
});

export const publishTestSuccess = (test) => ({
  type: type.PUBLISH_TEST_SUCCESS,
  payload: test,
});

export const publishTestFailed = (error) => ({
  type: type.PUBLISH_TEST_FAILED,
  payload: error,
});

export const searchTestRequest = (test) => ({
  type: type.SEARCH_TEST_REQUEST,
  payload: test,
});

export const searchTestSuccess = (test) => ({
  type: type.SEARCH_TEST_SUCCESS,
  payload: test,
});

export const searchTestFailed = (error) => ({
  type: type.SEARCH_TEST_FAILED,
  payload: error,
});

//user

export const getListUserRequest = (user) => ({
  type: type.GET_LIST_USER_REQUEST,
  payload: user,
});

export const getListUserSuccess = (user) => ({
  type: type.GET_LIST_USER_SUCCESS,
  payload: user,
});

export const getListUserFailed = (error) => ({
  type: type.GET_LIST_USER_FAILED,
  payload: error,
});

export const createUserRequest = (user) => ({
  type: type.CREATE_USER_REQUEST,
  payload: user,
});

export const createUserSuccess = (user) => ({
  type: type.CREATE_USER_SUCCESS,
  payload: user,
});

export const createUserFailed = (error) => ({
  type: type.CREATE_USER_FAILED,
  payload: error,
});

export const updateUserRequest = (user) => ({
  type: type.UPDATE_USER_REQUEST,
  payload: user,
});

export const updateUserSuccess = (user) => ({
  type: type.UPDATE_USER_SUCCESS,
  payload: user,
});

export const updateUserFailed = (error) => ({
  type: type.UPDATE_USER_FAILED,
  payload: error,
});

export const deleteUserRequest = (user) => ({
  type: type.DELETE_USER_REQUEST,
  payload: user,
});

export const deleteUserSuccess = (user) => ({
  type: type.DELETE_USER_SUCCESS,
  payload: user,
});

export const deleteUserFailed = (error) => ({
  type: type.DELETE_USER_FAILED,
  payload: error,
});

export const searchUserRequest = (user) => ({
  type: type.SEARCH_USER_REQUEST,
  payload: user,
});

export const searchUserSuccess = (user) => ({
  type: type.SEARCH_USER_SUCCESS,
  payload: user,
});

export const searchUserFailed = (error) => ({
  type: type.SEARCH_USER_FAILED,
  payload: error,
});

//result

export const getListResultRequest = (result) => ({
  type: type.GET_LIST_RESULT_REQUEST,
  payload: result,
});

export const getListResultSuccess = (result) => ({
  type: type.GET_LIST_RESULT_SUCCESS,
  payload: result,
});

export const getListResultFailed = (error) => ({
  type: type.GET_LIST_RESULT_FAILED,
  payload: error,
});

export const getResultDetail = (result) => ({
  type: type.GET_RESULT_DETAIL_REQUEST,
  payload: result,
});

export const getResultSuccess = (result) => ({
  type: type.GET_RESULT_DETAIL_SUCCESS,
  payload: result,
});

export const getResultFailed = (error) => ({
  type: type.GET_RESULT_DETAIL_FAILED,
  payload: error,
});

export const postResultRequest = (result) => ({
  type: type.POST_RESULT_REQUEST,
  payload: result,
});

export const postResultSuccess = (result) => ({
  type: type.POST_RESULT_SUCCESS,
  payload: result,
});

export const postResultFailed = (error) => ({
  type: type.POST_RESULT_FAILED,
  payload: error,
});
