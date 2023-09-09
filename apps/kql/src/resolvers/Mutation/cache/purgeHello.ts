import { type Cache } from "@envelop/response-cache"
import { GraphQLResolveInfo } from "graphql"

export const purgeHello = async (
  _,
  __,
  { cache }: Context<Cache>,
  info: GraphQLResolveInfo,
) => {
  let result = false
  const invalidation = cache.invalidate([
    { typename: "Hello" },
  ]) as Promise<void>

  await invalidation.then(() => {
    result = true
  })

  return result
}
