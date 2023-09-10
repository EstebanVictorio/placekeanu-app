import { LoaderFunction } from "react-router-dom";
import store from "store"
import { actions } from "store/slices/keanu"

export const loader: LoaderFunction = async () => {
  const { dispatch } = store
  return dispatch(actions.clearKeanu())
}