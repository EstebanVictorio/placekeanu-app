import { Card } from "@nextui-org/card"
import { Checkbox } from "@nextui-org/checkbox"
import { Input } from "@nextui-org/input"
import { Button } from "@nextui-org/button"
import { Link, Form } from "react-router-dom"
import { useSelector } from "react-redux"
import { selectors } from "store/slices/keanu"
import KeanuImg from "../KeanuImg"

const formClassName = "flex flex-col p-8 gap-y-4"

const KeanuImgForm = () => {
  const keanu = useSelector(selectors.selectKeanu)
  const status = useSelector(selectors.selectKeanuStatus)

  return (
    <Card as={Form} className={formClassName} method="post" action="/keanus/new">
      <h1 className="text-5xl">Get your new Keanu image!</h1>
      <KeanuImg keanu={keanu} status={status} />
      <div className="flex gap-x-4">
        <Input label="Width:" name="width" defaultValue="200" />
        <Input label="Height:" name="height" />
      </div>
      <div className="flex gap-x-4">
        <label className="flex gap-x-4">
          <span>Grayscale:</span>
          <Checkbox value="g" name="grayscale" />
        </label>
        <label className="flex gap-x-4">
          <span>Young Keanu:</span>
          <Checkbox value="y" name="young" />
        </label>
      </div>
      <div className="flex gap-x-4 mt-12">
        <Button
          as={Link}
          to="/keanus"
          color="danger"
          disableRipple
          className="w-1/2"
        >
          Go back to Gallery
        </Button>
        <Button
          type="submit"
          color="primary"
          disableRipple
          className="w-1/2"
        >
          Get Keanu image!
        </Button>
      </div>
    </Card>
  )
}

export default KeanuImgForm