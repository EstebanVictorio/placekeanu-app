import { LoaderFunction } from "react-router-dom";
import { safeParse } from "valibot"
import { dimensionsSchema, photoEffectsSchema } from "../new/schemas"
import store from "store"
import { actions } from "store/slices/keanu"
import { PayloadAction } from "@reduxjs/toolkit"

type Params = {
  dimensions: `${number}` | `${number}x${number}`,
  photoEffects?: 'y' | 'g' | 'yg' | 'gy',
}

export const loader: LoaderFunction = async ({ params }) => {
  const { dimensions, photoEffects } = params as Params

  const { success: areDimensionsValid } = safeParse(dimensionsSchema, dimensions)
  const { success: arePhotoEffectsValid } = safeParse(photoEffectsSchema, photoEffects)

  if(!areDimensionsValid) {
    throw new Error("Invalid dimensions")
  }

  if(photoEffects && !arePhotoEffectsValid) {
    throw new Error("Invalid photo effects")
  }

  const [width, height] = dimensions.split('x')

  const payload: PayloadAction<ValidKeanuImgInput>['payload'] = {
    width: parseInt(width, 10),
    grayscale: photoEffects?.includes('g'),
    young: photoEffects?.includes('y'),
    height:
      height
        ? parseInt(height, 10)
        : undefined,
  }

  const { dispatch } = store
  return dispatch(actions.loadingKeanu(payload))
}