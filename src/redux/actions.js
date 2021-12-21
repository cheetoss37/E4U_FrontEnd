import * as type from "./type";

export const postLoginStart = () => ({
  type: type.POST_LOGIN_REQUESTED,
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
