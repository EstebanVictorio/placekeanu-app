import { GraphQLResolveInfo } from "graphql"

export const hello = (_a: unknown, __b: unknown, ___c: unknown, ____: GraphQLResolveInfo) => {
  return "Hello world from GraphQL!"
}