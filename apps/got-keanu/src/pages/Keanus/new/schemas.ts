import { string, regex, enumType, object, optional, literal } from "valibot"

export const dimensionsSchema =
  string([
    regex(/^[0-9]+(x[0-9]+)*$/),
  ])

export const photoEffectsSchema = enumType([
  "y",
  "g",
  "yg",
  "gy",
])

export const imageSchema = object({
  width: string(),
  height:
    optional(
      string()
    ),
  young: optional(
    literal("y")
  ),
  grayscale: optional(
    literal("g")
  ),
})