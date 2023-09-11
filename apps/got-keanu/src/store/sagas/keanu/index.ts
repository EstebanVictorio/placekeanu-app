import { call, put } from "redux-saga/effects"
import { getKeanu } from "./service"
import { actions } from "store/slices/keanu"
import { PayloadAction } from "@reduxjs/toolkit"
import Codes from "error-nmspc/codes"

export function* keanuSaga (
  action: PayloadAction<ValidKeanuImgInput>
) {
  const { payload } = action

  try {

    const keanu: Maybe<KeanuImg> = yield call(getKeanu, payload, { svg: true, url: true })
    yield put(actions.successKeanu(keanu))

  } catch (error) {

    const err = error as Error

    if (err.message.includes('Failed to fetch')) {
      yield put(actions.failedKeanu({
        error: "KQL Service Unavailable",
        code: Codes.SERVICE_UNAVAILABLE,
      }))
    }

  }
}