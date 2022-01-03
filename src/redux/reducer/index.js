import { combineReducers } from "redux";
import authReducer from "./auth";
import snDoTestReducer from "./sn-do-test";
import userReducer from "./users";
import testReducer from "./test";
import questionReducer from "./question";
import resultReducer from "./result";

const reducer = combineReducers({
  auth: authReducer,
  doTest: snDoTestReducer,
  user: userReducer,
  test: testReducer,
  question: questionReducer,
  result: resultReducer,
});

export default reducer;
