import { Status } from "constants"
import { Fragment } from "react"
import { Image } from "@nextui-org/image"

interface Props {
  status: keyof typeof Status
  keanu: Maybe<KeanuImg>
}

const KeanuImg = ({
  status,
  keanu
}: Props) => {
  if (status === Status.IDLE) {
    return (
      <p>No current Keanu.</p>
    )
  }

  if(status === Status.LOADING) {
    return (
      <p>Loading your Keanu...</p>
    )
  }

  if (!keanu) {
    return (
      <p>This Keanu failed to load. Sad feelings only :(</p>
    )
  }

  return (
    <Fragment>
      <Image
        src={keanu.url}
        alt="A handsome Keanu"
        className="object-contain w-full"
        classNames={{
          wrapper: "!max-w-full w-full"
        }}
      />
      <figcaption
        className="px-4 bottom-0 w-full bg-black text-white z-20 text-small flex flex-col text-center"
      >
          <span>
            Look at
              <span className="text-yellow-500 mx-1">
              ✨ Keanu ✨
              </span>
          </span>
          <span className="text-yellow-500">
            What a wonderful person
          </span>
        </figcaption>
    </Fragment>
  )
}


export default KeanuImg