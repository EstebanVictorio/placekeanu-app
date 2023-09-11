import useError from "./useError"
import Error from "./Error"

const Boundary = () => {
  const error = useError()

  return (
    <Error error={error} />
  )
}

export default Boundary