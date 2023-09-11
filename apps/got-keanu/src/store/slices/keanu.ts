import { createSlice, type PayloadAction, } from "@reduxjs/toolkit"
import { type RootState } from "../index"
import { Status } from "constants/index"
import { type Code } from "error-nmspc/codes"

export type State = {
  keanu: Maybe<KeanuImg>
  status: keyof typeof Status
  error: Maybe<string>
  errorCode: Maybe<Code>
}

const initialState: State = {
  keanu: null,
  error: null,
  errorCode: null,
  status: Status.IDLE
}

const keanu = createSlice({
  name: 'keanu',
  initialState,
  reducers: {
    clearKeanu: (state) => {
      state.status = Status.IDLE
      state.keanu = null
    },
    loadingKeanu: (state, _: PayloadAction<ValidKeanuImgInput>) => {
      state.status = Status.LOADING
    },
    failedKeanu: (state, action: PayloadAction<ErrorPayload>) => {
      state.status = Status.ERROR
      state.error = action.payload.error
      state.errorCode = action.payload.code as Code
    },
    successKeanu: (state, action:PayloadAction<KeanuImg>) => {
      state.keanu = action.payload
      state.status = Status.SUCCESS
    }
  }
})

const { actions, reducer } = keanu

export { actions }

export const selectors = {
  selectKeanuStatus: (state: RootState) => state.keanu.status,
  selectKeanu: (state: RootState) => state.keanu.keanu,
  selectError: (state: RootState) => ({ message: state.keanu.error, code: state.keanu.errorCode }),
}

export default reducer