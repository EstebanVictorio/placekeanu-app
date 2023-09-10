import { ObjectSchema, ObjectShape, safeParse, Input } from "valibot"
import { ActionFunctionArgs } from "react-router-dom"

export type Mutation<S extends ObjectSchema<any>> = (input: Required<Input<S>>) => unknown

export const createAction = <T extends ObjectShape>({ schema, mutation }: {
  schema: ObjectSchema<T>,
  mutation: Mutation<ObjectSchema<T>>
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
      return mutation(data as Required<Input<typeof schema>>)
    }

    throw new Error("Invalid data")
  }
}