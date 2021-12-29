import { AppConst } from "../../constants";
import * as type from "../types";

const INITITAL_STATE = {
  user: {},
  token: "",
  error: null,
  isFetching: false,
  isAuth: Boolean(localStorage.getItem(AppConst.USER_PROFILE)),
};

export default function authReducer(state = INITITAL_STATE, action) {
  switch (action.type) {
    case type.POST_LOGIN_REQUESTED:
      return {
        ...state,
        isFetching: true,
      };
    case type.POST_LOGIN_SUCCESS:
      return {
        ...state,
        user: action.payload.user,
        token: action.payload.token,
        loading: false,
        isAuth: true,
      };
    case type.POST_LOGIN_FAILED:
      return {
        ...state,
        error: action.payload,
        loading: false,
        isAuth: false,
      };
    case type.POST_REGISTER_REQUESTED:
      return {
        ...state,
        isFetching: true,
      };
    case type.POST_REGISTER_SUCCESS:
      return {
        ...state,
        user: action.payload.user,
        loading: false,
      };
    case type.POST_REGISTER_FAILED:
      return {
        ...state,
        error: action.payload,
        loading: false,
      };
    case type.RESET:
      return {
        INITITAL_STATE,
      };
    default:
      return state;
  }
}
