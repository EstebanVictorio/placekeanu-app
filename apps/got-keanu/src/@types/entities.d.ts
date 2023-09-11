type Maybe<T> = T | null | undefined

type KeanuImg = Maybe<{ url: string, svg: string }>

type ValidKeanuImgInput = {
  width?: number
  height?: number
  grayscale?: boolean
  young?: boolean
}

type KeanuAction = {
  payload: KeanuImg
}

type ErrorPayload = {
  error: string
}

type KeanuGallery = {
  items: KeanuImg[]
}