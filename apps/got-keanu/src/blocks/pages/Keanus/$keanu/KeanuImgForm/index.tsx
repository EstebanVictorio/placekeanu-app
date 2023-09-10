import { Card } from "@nextui-org/card"
import { Checkbox } from "@nextui-org/checkbox"
import { Input } from "@nextui-org/input"
import { Button } from "@nextui-org/button"
import { Link, Form } from "react-router-dom"
import { useSelector } from "react-redux"
import { selectors } from "store/slices/keanu"
import KeanuImg from "../KeanuImg"
import Section from "blocks/Section"

const formClassName = "flex flex-col p-8 gap-y-4"

const KeanuImgForm = () => {
  const keanu = useSelector(selectors.selectKeanu)
  const status = useSelector(selectors.selectKeanuStatus)

  return (
    <Section>
      <Card as={Form} className={formClassName} method="post" action="/keanus/new">
        <h1 className="text-xl lg:text-5xl">Get your new Keanu image!</h1>
        <KeanuImg keanu={keanu} status={status} />
        <div className="flex gap-4 flex-wrap lg:flex-nowrap">
          <Input label="Width:" name="width" defaultValue="200" className="basis-full lg:basis-auto flex-grow flex-shrink" />
          <Input label="Height:" name="height" className="basis-full lg:basis-auto flex-grow flex-shrink" />
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
        <div className="flex flex-wrap xl:flex-nowrap gap-4 mt-12">
          <Button
            as={Link}
            to="/keanus"
            color="danger"
            disableRipple
            className="basis-full lg:basis-auto flex-grow flex-shrink"
          >
            Go back to Gallery
          </Button>
          <Button
            type="submit"
            color="primary"
            disableRipple
            className="basis-full lg:basis-auto flex-grow flex-shrink"
          >
            Get Keanu image!
          </Button>
        </div>
      </Card>
    </Section>
  )
}

export default KeanuImgForm