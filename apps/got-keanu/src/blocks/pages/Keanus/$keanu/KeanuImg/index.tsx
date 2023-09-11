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

  if (status === Status.ERROR) {
    return (
      <p>This Keanu failed to load. Sad feelings only :(</p>
    )
  }

  if (!keanu) {
    return (
      <p>This version of Keanu does not exist yet.</p>
    )
  }

  return (
    <Fragment>
      <Image
        src={keanu.url}
        alt="A handsome Keanu"
        className="max-h-[300px]"
        classNames={{
          wrapper: "object-contain !w-full !max-w-none flex justify-center",
          img: "!max-w-[240px] md:!max-w-[700px] lg:!max-w-[800px]"
        }}
      />
      <figcaption
        className="p-4 bottom-0 w-full bg-black text-white z-20 text-small flex flex-col text-center rounded-md"
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