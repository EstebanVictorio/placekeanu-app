import { Card } from "@nextui-org/card"
import { Button } from "@nextui-org/button"
import Section from "blocks/Section"
import { Link } from "react-router-dom"

const randomCap200AtLeast100 = () => Math.floor(Math.random() * 201) + 100

const Home = () => {
  return (
    <Section>
      <Card className="p-4 xl:p-12 gap-y-8">
        <h1 className="text-lg md:text-5xl text-center">
          Welcome to the Keanu Reeves Gallery app!
        </h1>
        <div className="flex flex-wrap gap-4">
          <Button
            as={Link}
            to="/keanus"
            color="primary"
            variant="bordered"
            className="flex-grow flex-shrink hover:text-white hover:border-white !p-2"
          >
              Go to Gallery
          </Button>
          <Button
            as={Link}
            color="default"
            className="flex-grow flex-shrink whitespace-pre-wrap text-center !p-2"
            to={`/keanus/${randomCap200AtLeast100()}x${randomCap200AtLeast100()}`}
          >
              Add Random image
          </Button>
          <Button
            as={Link}
            color="primary"
            to="/keanus/new"
            className="flex-grow flex-shrink basis-full lg:basis-auto whitespace-pre-wrap text-center !p-2"
          >
              Add new image
          </Button>
        </div>
      </Card>
    </Section>
  )
}

export default Home