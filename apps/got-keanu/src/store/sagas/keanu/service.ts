import { client } from "gql-client/client"
import { QueryGenqlSelection } from "gql-client/generated/schema"


export type Args =
  Required<QueryGenqlSelection>['keanu']['__args']

export type SelectionSet =
  Pick<Required<QueryGenqlSelection>['keanu'],'svg' | 'url'>

export const getKeanu = async (
  args: Args,
  selectionSet: SelectionSet
): Promise<Maybe<KeanuImg>> => {

  const { keanu } = await client.query({
    keanu: {
      __args: args,
      ...selectionSet,
    }
  })

  return keanu
}
