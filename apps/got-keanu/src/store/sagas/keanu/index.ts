import { call, put } from "redux-saga/effects"
import { getKeanu } from "./service"
import { actions } from "store/slices/keanu"
import { PayloadAction } from "@reduxjs/toolkit"

export function* keanuSaga (
  action: PayloadAction<ValidKeanuImgInput>
) {
  const { payload } = action
  const keanu: Maybe<KeanuImg> = yield call(getKeanu, payload, { svg: true, url: true })
  yield put(actions.successKeanu(keanu))
}