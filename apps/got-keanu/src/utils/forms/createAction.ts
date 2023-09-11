import { ObjectSchema, ObjectShape, safeParse, Output } from "valibot"
import { ActionFunctionArgs } from "react-router-dom"

export type Mutation<S extends ObjectSchema<any>> = (safeMutationInput: Output<S>) => unknown

export const createAction = <T extends ObjectShape>({ schema, mutation, dev = true }: {
  schema: ObjectSchema<T>,
  mutation: Mutation<ObjectSchema<T>>
  dev?: boolean
}) => {
  return async ({ request }: ActionFunctionArgs) => {
    const formData = await request.clone().formData()

    const entries =
      Array
        .from(formData.entries())

    const data = entries.reduce((acc, dataTuple) => {
      const [key, value] = dataTuple
      acc[key] = value.toString()
      return acc
    }, {} as Record<string, string>)

    const result = safeParse(schema, data)

    if(result.success) {
      if(dev) {
        console.log(result.output)
      }
      return mutation(result.output)
    }

    throw new Error("Invalid data")
  }
}