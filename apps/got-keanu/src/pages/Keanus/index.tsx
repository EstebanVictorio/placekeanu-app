import Section from "blocks/Section"
import { Link } from "react-router-dom"
import { Button } from "@nextui-org/button"
import { Card } from "@nextui-org/card"
import { Spinner } from "@nextui-org/spinner"
import useGallery from "hooks/useGallery"
import KeanuGallery from "blocks/pages/Keanus/KeanuGallery"

const Keanus = () => {
  const gallery = useGallery()

  if (!gallery) {
    return (
      <Section>
        <Card className="flex justify-center items-center">
          <Spinner />
        </Card>
      </Section>
    )
  }

  return (
    <Section>
      <Card className="flex flex-col p-12 gap-y-8">
        <h1 className="text-lg md:text-5xl text-center">Your Keanu Reeves Gallery ✨</h1>
        <KeanuGallery gallery={gallery.items} />
        <div className="flex flex-wrap gap-4">
          <Button
            as={Link}
            color="danger"
            to="/"
            className="basis-full lg:basis-auto flex-grow flex-shrink"
          >
              Go back to Home
          </Button>
          <Button
            as={Link}
            color="primary"
            to="/keanus/new"
            className="basis-full lg:basis-auto flex-grow flex-shrink"
          >
              Add a new Keanu Image
          </Button>
        </div>
      </Card>
    </Section>
  )
}

export default Keanus