import { GraphQLResolveInfo, Source } from "graphql"
import { match } from "ts-pattern"

type Args = {
  width: number
  height?: number
  young?: boolean
  grayscale?: boolean
}

export const keanu = async (
  _a: Source,
  args: Args,
  ___: unknown,
  ____: GraphQLResolveInfo
) => {
  console.log("info",____)
  const { width, height, young, grayscale } = args

  let urlPath = `/${width}`
  urlPath += height ? `/${height}` : ""

  urlPath =
    match([!!young, !!grayscale])
      .with([true, true], () => `${urlPath}/yg`)
      .with([false, true], () => `${urlPath}/g`)
      .with([true, false], () => `${urlPath}/y`)
      .with([false, false], () => urlPath)
      .exhaustive()
  

  const url = new URL(`${process.env.API_URL}${urlPath}`)

  const response = await fetch(url)
  const text = await response.text()
  return {
    svg: text,
    url: url.toString(),
  }
}
