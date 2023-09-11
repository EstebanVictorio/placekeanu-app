import { ObjectSchema, ObjectShape, safeParse, Output, Issue } from "valibot"
import { ActionFunctionArgs } from "react-router-dom"

export type Mutation<S extends ObjectSchema<any>> = (safeMutationInput: Output<S>) => unknown
export type MutationWithErrors<S extends ObjectSchema<any>> = (safeMutationInput: Output<S>, errors?: Issue[]) => unknown

type ConstructableError = new (...args: any[]) => Error

export const createAction = <T extends ObjectShape>({
  schema,
  mutation,
  customError,
  throwErr = true,
  dev = { active: true }
}: {
  schema: ObjectSchema<T>,
  mutation: Mutation<ObjectSchema<T>> | MutationWithErrors<ObjectSchema<T>>,
  throwErr?: boolean,
  customError?: {
    ValidationError: ConstructableError
    args?: any[]
  }
  dev?: {
    active: boolean
    actionName?: string
  }
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
      if(dev?.active) {
        console.log(`[Action][${ dev.actionName ? `${dev.actionName} Result` : "Result"}]: `, result.output)
      }

      return mutation(result.output)
    }

    if(throwErr) {
      if(customError && !result.success) {
        const { ValidationError, args = [] } = customError
        if (args) {
          throw new ValidationError(...args)
        }
  
        throw new ValidationError()
      }

      throw new Error('Invalid data')
    }

    if(!result.success) {
      const { issues } = result
      return mutation(data as Output<ObjectSchema<T>>, issues)
    }
  }
}