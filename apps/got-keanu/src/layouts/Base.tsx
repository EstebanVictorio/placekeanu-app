import { Outlet } from "react-router-dom"

const Base = () => {
  return (
    <main className="w-screen h-screen flex justify-center items-center">
      <Outlet />
    </main>
  )
}

export default Base