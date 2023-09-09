import { GraphQLResolveInfo } from "graphql"

export const hello = (_: unknown, __: unknown, ___: unknown, ____: GraphQLResolveInfo) => {
  return "Hello world from GraphQL!"
}
