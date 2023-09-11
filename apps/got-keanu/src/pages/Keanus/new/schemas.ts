import { string, regex, enumType, number, object, optional, integer, coerce, boolean } from "valibot"

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
  width: optional(
    coerce(
      number([
        integer(),
      ]),
      Number,
    )
  ),
  height:
    coerce(
      number([
        integer(),
      ]),
      Number
    ),
  young: optional(
    coerce(
      boolean(),
      (value) => value === "y",
    ),
  ),
  grayscale: optional(
    coerce(
      boolean(),
      (value) => value === "g",
    ),
  ),
})