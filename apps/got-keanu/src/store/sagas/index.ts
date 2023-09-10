import { all, takeLatest } from "redux-saga/effects"
import { keanuSaga } from "./keanu"
import { gallerySaga } from "./gallery"

export default function* rootSaga() {
  yield all([
    takeLatest('keanu/loadingKeanu', keanuSaga),
    takeLatest('keanu/successKeanu', gallerySaga),
  ])
}