import { GraphQLResolveInfo } from "graphql"

export const hello = (_, __, ___, info: GraphQLResolveInfo) => {
  return "Hello world from GraphQL!"
}
