import { useRouteError } from "react-router-dom"

const useError = () => {
  const error = useRouteError() as Error
  return error
}

export default useError