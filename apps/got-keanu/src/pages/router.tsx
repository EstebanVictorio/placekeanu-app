import { createBrowserRouter } from "react-router-dom"
import Base from "layouts/Base"
import Home from "./Home"
import Keanu from "./Keanus/$keanu"
import NewKeanu from "./Keanus/new"
import { loader as newKeanuLoader } from "./Keanus/new/loader"
import { newKeanuAction } from "./Keanus/new/actions"
import Keanus from "./Keanus"
import { loader as keanuLoader } from "./Keanus/$keanu/loader"
import ErrorBoundary from "./Error/Boundary"
import NotFound from "./Error/40X/404"

const router = createBrowserRouter([
  {
    path: "/",
    element: <Base />,
    errorElement: <ErrorBoundary />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/keanus",
        element: <Keanus />,
      },
      {
        path: "/keanus/:dimensions/:photoEffects?",
        element: <Keanu />,
        loader: keanuLoader,
      },
      {
        path: "/keanus/new",
        element: <NewKeanu />,
        loader: newKeanuLoader,
        action: newKeanuAction,
      },
    ]
  },
  {
    path: "*",
    element: <NotFound />,
  }
])

export default router