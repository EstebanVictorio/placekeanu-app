import useError from "./useError"
import Error from "./Error"
import BadRequest from "./40X/400"
import NotFound from "./40X/404"
import ServiceUnavailable from "./50X/503"
import { match } from "ts-pattern"
import AppError from "error-nmspc/AppError"
import Codes from "error-nmspc/codes"

const Boundary = () => {
  const error = useError()

  if (error instanceof AppError) {
    const { code } = error

    return (
      match(code)
        .with(Codes.INVALID_DATA, () => <BadRequest errorMessage={error.message} />)
        .with(Codes.SERVICE_UNAVAILABLE, () => <ServiceUnavailable errorMessage={error.message} />)
        .with(Codes.NOT_FOUND, () => <NotFound />)
        .run()
    )
  }

  return (
    <Error error={error} />
  )
}

export default Boundary