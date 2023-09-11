import { createAction } from "utils/forms/createAction"
import { imageSchema as schema } from "./schemas"
import { newKeanuMutation as mutation } from "./mutations"

export const newKeanuAction = createAction({
  schema,
  mutation,
  dev: import.meta.env.DEV,
})