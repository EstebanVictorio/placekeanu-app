import { createAction } from "utils/forms/createAction"
import { imageSchema as schema } from "./schemas"
import { newKeanuMutation as mutation } from "./mutations"
import AppError from "error-nmspc/AppError"
import codes from "error-nmspc/codes"

export const newKeanuAction = createAction({
  schema,
  mutation,
  throwErr: false,
  customError: {
    ValidationError: AppError,
    args: [codes.INVALID_DATA, "Invalid data for New Keanu"]
  },
  dev: {
    active: import.meta.env.DEV,
    actionName: "New Keanu",
  },
})