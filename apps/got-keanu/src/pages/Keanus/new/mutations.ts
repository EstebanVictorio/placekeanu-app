import { type MutationWithErrors } from "utils/forms/createAction"
import { imageSchema } from "./schemas"
import store from "store"
import { actions } from "store/slices/keanu"
import { PayloadAction } from "@reduxjs/toolkit"

export const newKeanuMutation: MutationWithErrors<typeof imageSchema> = ({
  width,
  height,
  grayscale,
  young
}, errors) => {

  if(errors) {
    return { errors }
  }

  const { dispatch } = store
  const payload: PayloadAction<ValidKeanuImgInput>['payload'] = {
    width,
    height,
    grayscale,
    young,
  }

  return dispatch(actions.loadingKeanu(payload))
}