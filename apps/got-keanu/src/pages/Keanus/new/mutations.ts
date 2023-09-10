import { type Mutation } from "utils/forms/createAction"
import { imageSchema } from "./schemas"
import store from "store"
import { actions } from "store/slices/keanu"
import { PayloadAction } from "@reduxjs/toolkit"

export const newKeanuMutation: Mutation<typeof imageSchema> = ({
  width,
  height,
  grayscale,
  young
}) => {
  
  const { dispatch } = store
  const payload: PayloadAction<ValidKeanuImgInput>['payload'] = {
    width: parseInt(width, 10),
    grayscale: grayscale === "g",
    young: young === "y",
    height:
      height
        ? parseInt(height, 10)
        : undefined,
  }

  return dispatch(actions.loadingKeanu(payload))
}