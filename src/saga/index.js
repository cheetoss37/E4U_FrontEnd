import { all } from "redux-saga/effects";
import { authSaga } from "./auth";
import { userSaga } from "./users";

export default function* rootSaga() {
  yield all([authSaga(), userSaga()]);
}
