import { type Cache } from "@envelop/response-cache"
import { useExtendContext } from '@envelop/core'

export const extendContext = () => useExtendContext(
  (_: Context<Cache>) => {

    return {
      
    }
  }
)
