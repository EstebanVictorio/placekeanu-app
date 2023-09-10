import { useSelector } from "react-redux"
import { Link } from "react-router-dom"
import { selectors } from "store/slices/keanu"
import Section from "blocks/Section"
import { Card } from "@nextui-org/card"
import { Button } from "@nextui-org/button"
import KeanuImg from "blocks/pages/Keanus/$keanu/KeanuImg"

import { Status } from "constants/index"

const cardClassName = "min-h-unit-20 flex justify-center items-center relative border-slate-300 border"

const Keanu = () => {
  const keanu = useSelector(selectors.selectKeanu)
  const status = useSelector(selectors.selectKeanuStatus)

  return (
    <Section className="flex flex-col gap-y-8 ">
      <Card
        as={keanu && status === Status.SUCCESS ? "figure" : undefined}
        className={cardClassName}
      >
        <KeanuImg
          status={status}
          keanu={keanu}
        />
      </Card>
      <Button as={Link} color="primary" to="/keanus">
        Go back to Gallery
      </Button>
    </Section>
  )
}

export default Keanu