import { AppConst } from "../../constants";
import * as type from "../types";

const INITITAL_STATE = {
  listQuestion: [],
  questionDetail: { answer: [], selectedAnswer: "" },
  page: 1,
  totalPage: 1,
  isFetching: false,
  error: null,
};

export default function questionReducer(state = INITITAL_STATE, action) {
  switch (action.type) {
    case type.SET_NEW_SELECTED_QUESTION:
      return {
        ...state,
        questionDetail: action.payload,
      };
    case type.GET_LIST_QUESTION_REQUEST:
      return {
        ...state,
        isFetching: true,
      };
    case type.GET_LIST_QUESTION_SUCCESS:
      return {
        ...state,
        listQuestion: action.payload.questionData,
        isFetching: false,
        totalPage: action.payload.totalPage,
        page: action.payload.currentPage,
      };
    case type.GET_LIST_QUESTION_FAILED:
      return {
        ...state,
        isFetching: false,
        error: action.payload,
      };
    case type.GET_QUESTION_DETAIL_REQUEST:
      return {
        ...state,
        isFetching: true,
      };
    case type.GET_QUESTION_DETAIL_SUCCESS:
      return {
        ...state,
        isFetching: false,
        questionDetail: action.payload,
      };
    case type.POST_CREATE_QUESTION_REQUEST:
      return {
        ...state,
        isFetching: true,
      };
    case type.POST_CREATE_QUESTION_SUCCESS:
      return {
        ...state,
        isFetching: false,
      };
    case type.POST_CREATE_QUESTION_FAILED:
      return {
        ...state,
        isFetching: false,
        error: action.payload,
      };
    case type.GET_QUESTION_DETAIL_FAILED:
      return {
        ...state,
        isFetching: false,
        error: action.payload,
      };
    case type.DELETE_QUESTION_REQUEST:
      return {
        ...state,
        isFetching: true,
      };
    case type.DELETE_QUESTION_SUCCESS:
      return {
        ...state,
        isFetching: false,
      };
    case type.DELETE_QUESTION_FAILED:
      return {
        ...state,
        isFetching: false,
        error: action.payload,
      };
    case type.SEARCH_QUESTION_REQUEST:
      return {
        ...state,
        isFetching: true,
      };
    case type.SEARCH_QUESTION_SUCCESS:
      return {
        ...state,
        isFetching: false,
        listQuestion: action.payload.questionData,
        totalPage: action.payload.totalPage,
        page: action.payload.currentPage,
      };
    case type.SEARCH_QUESTION_FAILED:
      return {
        ...state,
        isFetching: false,
        error: action.payload,
      };
    case type.UPDATE_QUESTION_REQUEST:
      return {
        ...state,
        isFetching: true,
      };
    case type.UPDATE_QUESTION_SUCCESS:
      return {
        ...state,
        isFetching: false,
      };
    case type.UPDATE_QUESTION_FAILED:
      return {
        ...state,
        isFetching: false,
        error: action.payload,
      };
    default:
      return state;
  }
}
