import { AppConst } from "../../constants";
import * as type from "../types";

const INITITAL_STATE = {
  allTestList: [],
  publicTestList: [],
  testDetail: {
    testName: "",
    testType: 2,
    testTime: "",
    testLevel: 1,
    state: 1,
    listQuestion: [],
  },
  testListQuestion: [],
  isFetching: false,
  error: null,
  status: null,
  totalPage: 1,
  page: 1,
};

export default function testReducer(state = INITITAL_STATE, action) {
  switch (action.type) {
    case type.SET_TEST_SELECTED_QUESTION:
      return {
        ...state,
        testListQuestion: action.payload,
      };
    case type.SET_NEW_TEST:
      return {
        ...state,
        testDetail: action.payload,
      };
    case type.GET_ALL_TEST_REQUEST:
      return {
        ...state,
        isFetching: true,
      };
    case type.GET_ALL_TEST_SUCCESS:
      return {
        ...state,
        allTestList: action.payload.testData,
        isFetching: false,
        totalPage: action.payload.totalPage,
        page: action.payload.currentPage,
      };
    case type.GET_ALL_TEST_FAILED:
      return {
        ...state,
        isFetching: false,
        error: action.payload,
      };
    case type.GET_PUBLIC_TEST_REQUEST:
      return {
        ...state,
        isFetching: true,
      };
    case type.GET_PUBLIC_TEST_SUCCESS:
      return {
        ...state,
        isFetching: false,
        publicTestList: action.payload.testData,
        totalPage: action.payload.totalPage,
        page: action.payload.currentPage,
      };
    case type.GET_PUBLIC_TEST_FAILED:
      return {
        ...state,
        isFetching: false,
        error: action.payload,
      };
    case type.GET_TEST_DETAIL_REQUEST:
      return {
        ...state,
        isFetching: true,
      };
    case type.GET_TEST_DETAIL_SUCCESS:
      return {
        ...state,
        isFetching: false,
        testDetail: action.payload,
      };
    case type.GET_TEST_DETAIL_FAILED:
      return {
        ...state,
        isFetching: false,
        error: action.payload,
      };
    case type.SEARCH_TEST_REQUEST:
      return {
        ...state,
        isFetching: true,
      };
    case type.SEARCH_TEST_SUCCESS:
      return {
        ...state,
        isFetching: false,
        allTestList: action.payload.testData,
        totalPage: action.payload.totalPage,
        page: action.payload.currentPage,
      };
    case type.SEARCH_TEST_FAILED:
      return {
        ...state,
        isFetching: false,
        error: action.payload,
      };
    case type.CREATE_TEST_REQUEST:
      return {
        ...state,
        isFetching: true,
      };
    case type.CREATE_TEST_SUCCESS:
      return {
        ...state,
        isFetching: false,
        status: 200,
      };
    case type.CREATE_TEST_FAILED:
      return {
        ...state,
        isFetching: false,
        error: action.payload,
      };
    case type.DELETE_TEST_REQUEST:
      return {
        ...state,
        isFetching: true,
      };
    case type.DELETE_TEST_SUCCESS:
      return {
        ...state,
        isFetching: false,
      };
    case type.DELETE_TEST_FAILED:
      return {
        ...state,
        isFetching: false,
        error: action.payload,
      };
    default:
      return state;
  }
}
