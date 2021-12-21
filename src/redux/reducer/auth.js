import * as type from "../types";

const INITITAL_STATE = {
  user: {},
  token: "",
  error: null,
  isFetching: false,
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
      };
    case type.POST_REGISTER_FAILED:
      return {
        ...state,
        error: action.payload,
        loading: false,
      };
    default:
      return state;
  }
}
