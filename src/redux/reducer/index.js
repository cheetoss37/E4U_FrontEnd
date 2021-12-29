import { combineReducers } from "redux";
import authReducer from "./auth";
import snDoTestReducer from "./sn-do-test";

const reducer = combineReducers({
  auth: authReducer,
  doTest: snDoTestReducer,
});

export default reducer;
