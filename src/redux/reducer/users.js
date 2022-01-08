import * as type from "../types";

const INITITAL_STATE = {
  listUser: [],
  userDetail: {},
  isFetching: false,
  error: null,
  totalPage: 1,
  page: 1,
};

export default function userReducer(state = INITITAL_STATE, action) {
  switch (action.type) {
    case type.GET_LIST_USER_REQUEST:
      return {
        ...state,
        isFetching: true,
      };
    case type.GET_LIST_USER_SUCCESS:
      return {
        ...state,
        isFetching: false,
        listUser: action.payload.usersData,
        totalPage: action.payload.totalPage,
        page: action.payload.currentPage,
      };
    case type.GET_LIST_USER_FAILED:
      return {
        ...state,
        isFetching: false,
        error: action.payload,
      };
    case type.CREATE_USER_REQUEST:
      return {
        ...state,
        isFetching: true,
      };
    case type.CREATE_USER_SUCCESS:
      return {
        ...state,
        isFetching: false,
        userDetail: action.payload.user,
      };
    case type.CREATE_USER_FAILED:
      return {
        ...state,
        isFetching: false,
        error: action.payload,
      };
    case type.UPDATE_USER_REQUEST:
      return {
        ...state,
        isFetching: true,
      };
    case type.UPDATE_USER_SUCCESS:
      return {
        ...state,
        isFetching: false,
        userDetail: action.payload.user,
      };
    case type.UPDATE_USER_FAILED:
      return {
        ...state,
        isFetching: false,
        error: action.payload,
      };
    case type.DELETE_USER_REQUEST:
      return {
        ...state,
        isFetching: true,
      };
    case type.DELETE_USER_SUCCESS:
      return {
        ...state,
        isFetching: false,
      };
    case type.DELETE_USER_FAILED:
      return {
        ...state,
        isFetching: false,
        error: action.payload,
      };
    case type.SEARCH_USER_REQUEST:
      return {
        ...state,
        isFetching: true,
      };
    case type.SEARCH_USER_SUCCESS:
      return {
        ...state,
        isFetching: false,
        listUser: action.payload.usersData,
        totalPage: action.payload.totalPage,
        page: action.payload.currentPage,
      };
    case type.SEARCH_USER_FAILED:
      return {
        ...state,
        isFetching: false,
        error: action.payload,
      };
    default:
      return state;
  }
}
