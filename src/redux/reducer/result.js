import { AppConst } from "../../constants";
import * as type from "../types";

const INITITAL_STATE = {
  listResult: [],
  resultDetail: {},
  isFetching: false,
  error: null,
};

export default function resultReducer(state = INITITAL_STATE, action) {
  switch (action.type) {
    case type.POST_RESULT_REQUEST:
      return {
        ...state,
        isFetching: true,
      };
    case type.POST_RESULT_SUCCESS:
      return {
        ...state,
        resultDetail: action.payload.testData,
        isFetching: false,
      };
    case type.POST_RESULT_FAILED:
      return {
        ...state,
        isFetching: false,
        error: action.payload,
      };
    default:
      return state;
  }
}
