import { LoaderFunction } from "react-router-dom";
import store from "store"
import { actions } from "store/slices/keanu"
import { client } from "gql-client/client"

export const loader: LoaderFunction = async () => {
  const { dispatch } = store
  const { keanu } = await client.query({
    keanu: {
      svg: true,
      url: true,
    }
  })

  if(keanu) {
    return dispatch(actions.successKeanu(keanu))
  }

  throw new Error("Couldn't load random Keanu 😢")
}