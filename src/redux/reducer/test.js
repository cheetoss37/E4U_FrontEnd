import { AppConst } from "../../constants";
import * as type from "../types";

const INITITAL_STATE = {
  allTestList: [],
  publicTestList: [],
  testDetail: {},
  isFetching: false,
  error: null,
};

export default function testReducer(state = INITITAL_STATE, action) {
  switch (action.type) {
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
    default:
      return state;
  }
}
