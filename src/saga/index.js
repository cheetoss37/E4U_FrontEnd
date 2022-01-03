import { all } from "redux-saga/effects";
import { authSaga } from "./auth";
import { userSaga } from "./users";
import { testSaga } from "./test";
import { resultSaga } from "./result";
import { questionSaga } from "./question";

export default function* rootSaga() {
  yield all([authSaga(), userSaga(), testSaga(), resultSaga(), questionSaga()]);
}
